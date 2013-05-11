/*
 * list.js: Responsible for listing all schemas from http://schema.org.
 *
 * (C) 2011 Charlie Robbins.
 *
 */

var fs = require('fs'),
    path = require('path'),
    exec = require('child_process').exec,
    colors = require('colors'),
    jsdom = require('jsdom'),
    cheerio = require('cheerio'),
    request = require('request'),
    winston = require('winston').cli(),
    schemaOrg = require('./index');

var list = exports;

//
// ### function local (options, callback)
// #### @options {Object} **Optional** Options to use when parsing the local schema list.
// #### @callback {function} Continuation to respond to when complete.
// Loads the local version of `schema-list.json`, caches it and returns
// the resulting schemas.
//
list.local = function (options, callback) {
  if (!callback) {
    callback = options;
    options = null;
  }
  
  options = options || {};
  
  if (serveCache(callback)) {
    //
    // If the schema-list exists in the cache return the cached version.
    //
    return;
  }
  
  options.schemaDir = options.schemaDir || path.join(__dirname, '..', 'schemas');
  options.filename  = options.filename  || 'schema-list.json';
  
  var listFile = path.join(options.schemaDir, options.filename);
  
  schemaOrg.cache.putFile('schema-list', listFile, function (err, list) {
    return err ? callback(err) : callback(null, list.schemas);
  });
};

//
// ### function remote (options, callback) 
// #### @options {Object} **Optional** Options to use when parsing the remote list
// #### @callback {function} Continuation to respond to when complete.
// Reads and parses the remote version of `schema-list.json`, saves it locally,
// caches it and returns the resulting schemas.
//
list.remote = function (options, callback) {
  if (!callback) {
    callback = options;
    options = {};
  }
  
  options.schemaDir = options.schemaDir || path.join(__dirname, '..', 'schemas');
  options.filename  = options.filename  || 'schema-list.json';
  
  var url      = options.url       || 'http://schema.org/docs/full.html',
      listFile = path.join(options.schemaDir, options.filename);

  if (serveCache(callback) && !options.force) {
    //
    // If the schema-list exists in the cache return the cached version.
    //
    return;
  }

  schemaOrg.logger.info('Contacting: ' + url.green);
  
  //
  // Request the URL which contains the list information
  //
  request({ uri: url }, function (error, response, body) {
    if (error && response.statusCode !== 200) {
      console.log('Error when contacting: ' + url);
      return callback(error);
    }

    schemaOrg.logger.info('Parsing: ' + url.green);  
   // schemaOrg.logger.info('body: ' + body.green);  
   // jsdom.env( {
    // html: body,
      //scripts: [
       // 'http://code.jquery.com/jquery-1.5.min.js'
      //]
   // }, function (err, window) {   



      var $ = cheerio.load(body); 

      
      
      schemas = [];

      //
      // Parse the resulting HTML using jQuery.
      //
      schemaOrg.logger.info('Reading: ' + url.green);
      $('a').each(function (i, el) {
        //console.log("*********** Inside list.js ******** url = " + "i= " + i + $(this).attr('href'));
        var match = schema = path.basename($(this).attr('href'));
        //console.log("match = " + match);
        if (!~['read.js', 'documents.html', 'schemas.html', '#'].indexOf(schema)) {
          if ((match = schema.match(/read.js\#(\w+)/))) {
            console.log("pushing " +match[1]);
            return schemas.push(match[1]);
          }

          schemas.push(schema);
        }
      });

      //
      // Sort the schemas for easy retreival later
      //
      schemas = schemas.sort();

      var result = JSON.stringify({
        schemas: schemas
      }, null, 2);

      //
      // Write the results to the target file.
      //
      schemaOrg.logger.info('Saving results to: ' + listFile.green + " options.schemaDir = " + options.schemaDir.yellow);
      //exec('mkdir -p ' + options.schemaDir, function (err) {
        //if (err) {
        //  return callback(err);
        //}
        
        //console.log(options.schemaDir,);

        fs.writeFile(listFile, result, function (err) {
         
         

          //if (err) {
          //  return callback(err);
          //}
          
          //
          // Cache the version we just parsed.
          //
          schemaOrg.cache.put({
            type: 'schema-list',
            schemas: schemas
          });
          
          schemaOrg.logger.info('Done creating ' + listFile.green + ' from ' + url.magenta);
          callback(null, schemas);
        });
      //});
    //});
  });
};

//
// ### @private function serveCache (callback)
// #### @callback {function} Continuation to respond to with the cache
// Helper function to server a cached version if it exists.
//
function serveCache (callback) {
  if (schemaOrg.cache.get['schema-list']) {
    callback(null, schemaOrg.cache.get['schema-list']);
    return true;
  }
  
  return false
}