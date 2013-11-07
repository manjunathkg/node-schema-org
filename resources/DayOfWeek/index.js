/***Generated Resource **/

var resource = require('resource');
var DayOfWeek = resource.define('DayOfWeek'); 

DayOfWeek.schema.description = "The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#Monday<br />http://purl.org/goodrelations/v1#Tuesday<br />http://purl.org/goodrelations/v1#Wednesday<br />http://purl.org/goodrelations/v1#Thursday<br />http://purl.org/goodrelations/v1#Friday<br />http://purl.org/goodrelations/v1#Saturday<br />http://purl.org/goodrelations/v1#Sunday<br />http://purl.org/goodrelations/v1#PublicHolidays<br />		"; 
DayOfWeek.persist('fs'); 


DayOfWeek.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


DayOfWeek.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


DayOfWeek.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


DayOfWeek.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


DayOfWeek.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


DayOfWeek.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.DayOfWeek = DayOfWeek;
