/***Generated Resource **/

var resource = require('resource');
var DateTime = resource.define('DateTime'); 

DateTime.schema.description = "A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601)."; 
DateTime.persist('fs'); 
