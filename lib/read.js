/*
 * parse.js: Responsible for parsing an indivudal schema from http://schema.org.
 *
 * (C) 2011 Charlie Robbins.
 *
 */
 
var fs = require('fs'),
    path = require('path'),
    exec = require('child_process').exec,
    argv = require('optimist').argv,
    colors = require('colors'),
    jsdom = require('jsdom'),
    request = require('request'),
    cheerio = require('cheerio'),
    validator = require('validator'), 
    _ = require('underscore'),
    changeCase = require('change-case');
    schemaOrg = require('./index');
    sugar = require('sugar');
var fs = require('fs');


var temp_bases = temp_bases || {};

var read = exports;

//
// ### function local (options, callback)
// #### @options {Object} Options to use when parsing the local schema
// #### @callback {function} Continuation to respond to when complete.
// Reads the local schema using the specified `options`.
//
read.local = function (options, callback) {
  //
  // If there is no `options.type` we cannot create a target url.
  //
  if (!options.type) {
    return callback(new Error('Cannot parse schema with no type.'));
  }

  //
  // If there is a cached version of this schema and we have not
  // been indicated to force the download, return.
  //
  if (serveCache(options, callback)) {
    return;
  }
  
  var type       = options.type;
  options.schemaDir = options.schemaDir || path.join(__dirname, '..', 'schemas');
  options.resoucesDir = options.resoucesDir || path.join(__dirname, '..', 'resources/' + type );
  options.filename  = options.filename  || type.toLowerCase() + '.json';
  options.resouces_filename  = options.filename  || 'index.js';
  
  
  var schemaFile = path.join(options.schemaDir, options.filename);
  var resourceFile = path.join(options.resourcesDir,options.resouces_filename);      
  schemaOrg.putFile(options.type, schemaFile, callback);
};




//
// ### function remote (options, callback)
// #### @options {Object} Options to use when parsing the remote schema.
// #### @callback {function} Continuation to respond to when complete.
// Reads and parses the remote version of `options.schema`, saves it locally,
// caches it and returns the resulting schemas.
//
read.remote = function (options, callback) {
  //
  // If there is no `options.type` we cannot create a target url.
  //
  if (!options.type) {
    return callback(new Error('Cannot parse schema with no type.'));
  }

  //
  // If there is a cached version of this schema and we have not
  // been indicated to force the download, return.
  //
  if (serveCache(options, callback)) {
    return;
  } 

  var type       = options.type;
  options.schemaDir = options.schemaDir || path.join(__dirname, '..', 'schemas');
  options.resourcesDir = options.resourcesDir || path.join(__dirname, '..', 'resources/' + type );
 //schemaOrg.logger.info('options.resourcesDir ==== ' + options.resourcesDir.green);
  options.filename  = options.filename  || options.type.toLowerCase() + '.json';
  options.resources_filename  = 'index.js';
  
  
  var schemaFile = path.join(options.schemaDir, options.filename);  
  var resourceFile = path.join(options.resourcesDir,options.resources_filename); 

  read.realName(options, function (err, realName) {
    if (err) {
      return callback(err);
    }
    
    var url = 'http://schema.org/' + realName;
    
    //
    // Request the URL which contains the schema information
    //
    //schemaOrg.logger.info('Contacting: ' + url.green);
    request({ uri: url }, function (error, response, body) {
      if (error && response.statusCode !== 200) {
        console.log('Error when contacting: ' + url);
        return callback(error);
      }

      //
      // Parse the resulting HTML using jQuery
      //
      schemaOrg.logger.info('Parsing: ' + url.green);  
      

      //console.log(body);
      var $ = cheerio.load(body);
      //console.log($);



      createfile(options.resourcesDir,resourceFile,function(){
        createResource($, resourceFile, type);
      });
      

      //jsdom.env( {
      //  html: body,
      //  scripts: [
      //    'http://code.jquery.com/jquery-1.5.min.js'
      //  ]
      //}, function (err, window) {

        //var $ = window.jQuery,
         //schema = { type: type };

        var schema = { type: "object" };

        //schemaOrg.logger.info('Reading: ' + url.green);

        // Look for version information and add if found
        var version = $('.version'); // e.g. <div class="version">Schema Draft Version 0.9</div>
        //schemaOrg.logger.info('version == : ' + version.magenta);
        if (version) schema.version = version.html().replace(/^\s+/, '').replace(/\s+$/, '');
 

        //
        // Iterate over the set of `tbody` tags in the `.definition-table`.
        // getting the associated `thead` element for each tag and converting 
        // the contents to JSON accordingly.
        //
        $('.definition-table tbody').each(function (i, body) {
          var jbody = $(body),
              head = jbody.prev(),
              propList = [];

          var currentType = $(head.find('th a')[0]).html().trim(); 

          //schemaOrg.logger.info('Parsing Type: ' + currentType.magenta);

          var html = jbody.html(),
              theadIndex = html.indexOf('<thead');

          //
          // If there is any `<thead*` HTML in the `tbody` tag then 
          // remove it. This avoids unexpected behavior from malformed
          // HTML.
          //
          if (theadIndex > 0) {
            jbody = $('<tbody>' + html.substr(0, theadIndex) + '</tbody>');
          }

          //
          // Iterate over each `tr` within the `tbody`, creating a property
          // in the current type (or base type) appropriately. 
          //
          jbody.find('tr').each(function (i, tr) {
            var jtr = $(tr), 
                types = [],
                desc =  $(jtr.find('td.prop-desc')[0]).html(),
                prop = {};

            if (desc) {
              desc = validator.entities.decode(desc).replace(/<.*?>/g, '');
            }
            var cleanName = removeElements($,$(jtr.find('th code')[0]).html(), "a");

            prop = {
              name: cleanName,
              description: desc
            };

            //
            // If the property has multiple types, set the `type`
            // property to be an Array and sanitize any anchor tags.
            //
            var ptype = $(jtr.find('td.prop-ect')[0]),
                atypes = $(ptype.find('a'));

            if (atypes.length > 0) {
              atypes.each(function (i, el) { types.push($(el).html()) });
              if(types.length >= 1){  //expect at least one type
                //   prop.type = types[0];
                //   var typeAsObject0 = '{ "type":"object", ' +  
                //                       '"properties" : { "id":{"type" : "string"},' +  
                //                                      '"ResourceType" :{"type" : "string", "default" : "'  +
                //                                        prop.type + '" } } }' ;
                //  //schemaOrg.logger.info('step 1 typeAsObject0 :: ======== : ' + JSON.stringify(typeAsObject0) );

                //   prop.type = JSON.parse(typeAsObject0);
                // }else{
                  var multitypes={};
                  var multitypeBuilder = '{"type":"object","properties" : {';
                  for (var i=0;i<types.length;i++)
                          {                            
                            multitypeBuilder += '"' +  types[i] + '" : ' + 
                                           '   {"type" :"object",' + 
                                           '   "properties" : {' + 
                                           '                    "id" : { "type" : "Array" } ' + 
                                           //'                     "ResourceType" : {"type" :"string" , ' +
                                           //'                                        "default" : "' + types[i] + '" }' +
                                           '}}' ;
                            if(i < (types.length - 1)){
                              //console.log("line 227 - adding , i== " + i + " types.length = " + types.length + " for type = " + types[i] );
                              multitypeBuilder += ',';  //dont need a comma for last item
                            }
                          }
                  multitypeBuilder +=  '}}';  
                  //console.log("multitypeBuilder === " + JSON.stringify(multitypeBuilder) );

                  // schemaOrg.logger.info('multitypes ======== : \n\n' + JSON.stringify(multitypeBuilder)  + '\n\n');
                  prop.type = JSON.parse(multitypeBuilder); 
               }
              

              //prop.type = JSON.parse(typeAsObject);
                
            }
            else {

              prop.type = ptype.html().replace(/\s/g, '');
              //schemaOrg.logger.info('ELSE TYPE :: prop.type ======== : ' + prop.type);
              var typeAsObject = '{ "type":"object", ' +  
                                  '"properties" : { "id":{"type" : "' + prop.type + '"}' +  
                                                   //'"ResourceType" :{"type" : "string", "default" :"'  
                                                   // + prop.type + '" } +
                                                  '} }' ;
              
              //schemaOrg.logger.info('typeAsObject %%% : ' + JSON.stringify(typeAsObject) );

              prop.type = JSON.parse(typeAsObject);

            }
            
            
            //schemaOrg.logger.info('typeAsObject ======== : ' + typeAsObject);
            


            propList.push(prop);
          });

          //
          // If we are parsing the current type specified by `options.type`
          // then set the list of properties obtained on that type.
          //
          if (currentType === type) {
            mproplist = [];
            for (var i=0; i<propList.length; i++){
               mproplist[i] = '"' + propList[i].name + '"' + ':' + JSON.stringify(propList[i]) ;
            }
            var combinedMPropListString = mproplist.join(",");

            var mproplistObject = '{' + combinedMPropListString + '}' ;
            mproplistObject = JSON.parse(mproplistObject);

            return schema.properties = mproplistObject; 
            //return schema.properties = propList;
          }

          //
          // Otherwise set the property list of the type that has been parsed
          // on the `schema.bases` object which represents all base types which
          // the current type depends on.
          //
          //schema.bases = schema.bases || {};

          mprop = [];
            for (var i=0; i<propList.length; i++){
               mprop[i] = '"' + propList[i].name + '"' + ':' + JSON.stringify(propList[i]) ;
            }
            var combinedMPropString = mprop.join(",");

            var mpropObject = '{"type" : "object", "properties" : {' + combinedMPropString + '} }' ;

            //schemaOrg.logger.info("****** mpropObject ==  [");
            // schemaOrg.logger.info(JSON.stringify(mpropObject).yellow);
            // schemaOrg.logger.info("******");


            mpropObject = JSON.parse(mpropObject);

            temp_bases[currentType] = mpropObject;

          //schema.bases[currentType] = propList;
        });


         


        //schema.bases = JSON.parse({"type" : "object", "properties" : });
 
        var schemaBasesAsObject = ' {"bases" :{ "type":"object", "properties": ' +
                                     JSON.stringify(temp_bases) + '} }' ;     
                           
        
        //schemaOrg.logger.info("!!!!!! *********   schemaBasesAsObject ==== [ \n " + schemaBasesAsObject);
        schema.properties = JSON.parse(schemaBasesAsObject);



        schemaOrg.logger.info('Writing schema: ' + schemaFile.magenta);
        //exec('mkdir -p' + options.schemaDir, function (err) {
         // if (err) {
          //  return callback(err);
         // }

          fs.writeFile(schemaFile, JSON.stringify(schema, null, 2), function (err) {
            if (err) {
              return callback(err);
            }

            //schemaOrg.logger.info('Done parsing schema: ' + schemaFile.magenta);
            schemaOrg.cache.put(schema);
            callback(null, schema);
          });    
        //});
      //});
    });
  });
};

//
// ### function realName (options, callback)
// #### @type {string|Object} Type of the schema to find the real name for
//
read.realName = function (options, callback) {
  options = typeof options === 'object' ? options : { type: options };
  
  if (!options.type) {
    return callback(new Error('Type is required when finding real name.'));
  }
  
  var listOptions = {
    schemaDir: options.schemaDir
  };
  
  schemaOrg.list.local(listOptions, function (err, schemas) {
    if (err) {
      return callback(err);
    }

    
    var realName = schemas.filter(function (name) {
      return name.toLowerCase() === options.type.toLowerCase();
    })[0];
    
    return !realName 
      ? callback(new Error('Cannot find realname for type: ' + options.type))
      : callback(null, realName);
  });
};

//
// ### @private function serveCache (callback)
// #### @callback {function} Continuation to respond to with the cache
// Helper function to server a cached version if it exists.
//
function serveCache (options, callback) {
  if (schemaOrg.cache.get[options.type] && !options.force) {
    //
    // If the schema exists in the cache and we have not been 
    // indicated to force the download, return the cached version.
    //
    callback(null, schemaOrg.cache.get[options.type]);
    return true;
  }
  
  return false;
}

function removeElements($,text, selector) {
    var wrapped = $("<div>" + text + "</div>");
    var text = wrapped.find(selector).text();
    return text;
    //return wrapped.html();
}



function createfile(resouceDir, resourceFile, callback){

    fs.mkdir(resouceDir, function(){
        fs.writeFile(resourceFile, "/***Generated Resource **/\n\n", function (err) {
              if (err) {
                //console.log('######### ERRRROR #####' + err);
                return callback(err);
              }

              //schemaOrg.logger.info('Done creating file: &&&&&&&&&&&&&  ' + resourceFile.magenta); 
              callback();
        });
    }); 
}





function createResourcePropertyString(type,stream,prop,callback){
      stream.write('\n\n');
      stream.write(type+ ".property('" + prop.name + "', {\n");
      stream.write('  "name" : "' + prop.name + '", \n'); 
      var propname = changeCase.sentenceCase(prop.name);  
      propname = changeCase.titleCase(propname);   
      stream.write('  "displayName" : "' + propname + '", \n');
      stream.write('  "description" : "' + prop.description + '", \n');
      stream.write(    prop.type + ' \n');
      //stream.write('  "default" : "' + '" \n');

      stream.write("}); \n");
      //stream.write("\n\nexports." + type + " = " + type + ";\n");
      callback();
}


function getLinkToResource(ResourceType){
  var types = ResourceType;
  var multitypes={};
        var multitypeBuilder = '  "type":"object","properties" : {';
        for (var i=0;i<types.length;i++)
                { 
                  //console.log("i = " + i + " types[i] = " + types[i] );
                  if (_.contains(['Text','URL','Duration'], types[i])) {
                      multitypeBuilder = {  "type":"string"} ;
                  }else if (_.contains(['Number' , 'Float' , 'Integer'], types[i])) {
                    multitypeBuilder = {  "type":"number"};
                  }else if (_.contains(['Boolean'], types[i])) {
                    multitypeBuilder = {  "type":"boolean"};
                  }else if (_.contains(['Date','Time', 'DateTime'], types[i])) {
                    multitypeBuilder = {  "type" :"Date"};
                  }else{                     
                    multitypeBuilder += '"' +  types[i] + '" : ' + 
                                   '   {"type" :"object",' + 
                                   '   "properties" : {' + 
                                   '                    "id" : { "type" : "array" }' + 
                                   //'                     "ResourceType" : {"type" :"string" , ' +
                                   //'                                        "default" : "' + types[i] + '" }' +
                                   '}}' ;
                    
                    if(i < (types.length - 1)){
                      //console.log("i = " + i + " types.length == " + types.length + " for type " + types[i]);
                      multitypeBuilder += ',';  //dont need a comma for last item
                    }
                  }
                }
        multitypeBuilder +=  '}';  

  return multitypeBuilder;

}

function createResource($, resourceFile, type, callback){
    var resource={};

    var stream = fs.createWriteStream(resourceFile,{ 'flags': 'a' });
    stream.once('open', function(fd) {
      
    });
    stream.on('error', function (err) {
      console.log(err);
    });

    schemaOrg.logger.info('createResource::type = : ' + type.green);
    stream.write("var resource = require('resource');\n");
    stream.write("var " + type + " = resource.define('" + type + "'); \n\n"); 

    // 
    //Look for version information and add if found
    var version = $('.version'); // e.g. <div class="version">Schema Draft Version 0.9</div>  
    if (version) resource.version = version.html().replace(/^\s+/, '').replace(/\s+$/, '');

    //schemaOrg.logger.info('version == : ' + resource.version.magenta);
    var schemaDescription  = $('.page-title + div').text(); 
    schemaDescription = _.escape(schemaDescription); 
    schemaDescription = schemaDescription.replace(/\n/g, '<br />');
    //schemaOrg.logger.info("SchemanDescription from page ===  " + schemaDescription);


    stream.write(type + ".schema.description = \"" + schemaDescription + "\"; \n");
    stream.write(type + ".persist('fs'); \n");  
   

    // //
    // // Iterate over the set of `tbody` tags in the `.definition-table`.
    // // getting the associated `thead` element for each tag and converting 
    // // the contents to JSON accordingly.
    // //
    $('.definition-table tbody').each(function (i, body) {
      var jbody = $(body),
      head = jbody.prev(),
      propList = [];

      var currentType = $(head.find('th a')[0]).html().trim();
      //schemaOrg.logger.info('createResource:: Parsing Type: ' + currentType.magenta);


      //Process only fields corresponding this type.
      var prop={};
      if(type != currentType){
        //console.log("type " + type + " not equal to " + currentType + " put pointer to " + currentType + " here");
        var inheritedTypes = [];
        inheritedTypes.add(currentType);
        prop.type = getLinkToResource(inheritedTypes);
        prop.name = currentType;
        prop.description = "Inherits from " + currentType;  
        createResourcePropertyString(type,stream,prop, function(){
        });
        propList.push(prop);
      }else{
            //console.log(" continue with " + currentType + " fields" );
            var html = jbody.html(),
            theadIndex = html.indexOf('<thead');
            //
            // If there is any `<thead*` HTML in the `tbody` tag then 
            // remove it. This avoids unexpected behavior from malformed
            // HTML.
            //
            if (theadIndex > 0) {
              jbody = $('<tbody>' + html.substr(0, theadIndex) + '</tbody>');
            }   

            // Iterate over each `tr` within the `tbody`, creating a property
            // in the current type (or base type) appropriately.           
            jbody.find('tr').each(function (i, tr) {
                var jtr = $(tr), 
                    types = [],
                    desc =  $(jtr.find('td.prop-desc')[0]).html(); 

                if (desc) {
                    desc = validator.entities.decode(desc).replace(/<.*?>/g, ''); 
                    desc = _.escape(desc);
                    desc = desc.replace(/\n/g, '<br />');
                }
                var cleanName = removeElements($,$(jtr.find('th code')[0]).html(), "a");

                prop = {
                  name: cleanName,
                  description: desc
                };

                //
                // If the property has multiple types, set the `type`
                // property to be an Array and sanitize any anchor tags.
                //
                var ptype = $(jtr.find('td.prop-ect')[0]),
                    atypes = $(ptype.find('a'));

                if (atypes.length > 0) {
                  atypes.each(function (i, el) { types.push($(el).html()) });
                  if(types.length >= 1){  //expect at least one type 
                    var multitypeBuilder = getLinkToResource(types); 
                    prop.type = multitypeBuilder; 
                  } //end of if types.length > 1                
                } //end of atypes.length > 0
                else {
                  prop.type = ptype.html().replace(/\s/g, ''); 
                  var typeAsObject = ' "type":"object", ' +  
                                      '"properties" : { "id":{"type" : "array"}' +  
                                                       //'"ResourceType" :{"type" : "string", "default" :"'  
                                                       // + prop.type + '" }' + 
                                                      '}' ;
                  
                  //schemaOrg.logger.info('typeAsObject %%% : ' + JSON.stringify(typeAsObject) );

                  if (_.contains(['Text','URL','Duration'], prop.type)) {
                    prop.type = '  "type":  "string"' ;
                  }else if (_.contains(['Number' , 'Float' , 'Integer'], prop.type)) {
                    prop.type = '  "type":  "number"'  ;
                  }else if (_.contains(['Boolean'], prop.type)) {
                    prop.type =  '  "type":  "boolean"' ;
                  }else if (_.contains(['Date','Time', 'DateTime'], prop.type)) {
                    prop.type =   '  "type":  "date"'  ;
                  }else{ 
                    prop.type = typeAsObject;
                  }
                } //end of else  
                createResourcePropertyString(type,stream,prop, function(){
                });
                propList.push(prop);
            }); //end of find tr  
      } //End of else            
                
            
    }); //end of each

    stream.write("\n\nexports." + type + " = " + type + ";\n"); 

} //end of function