/***Generated Resource **/

var resource = require('resource');
var OpeningHoursSpecification = resource.define('OpeningHoursSpecification'); 

OpeningHoursSpecification.schema.description = "A structured value providing information about the opening hours of a place or a certain service inside a place."; 
OpeningHoursSpecification.persist('fs'); 


OpeningHoursSpecification.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


OpeningHoursSpecification.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


OpeningHoursSpecification.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


OpeningHoursSpecification.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


OpeningHoursSpecification.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


OpeningHoursSpecification.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.OpeningHoursSpecification = OpeningHoursSpecification;


OpeningHoursSpecification.property('closes', {
  "name" : "closes", 
  "displayName" : "Closes", 
  "description" : "The closing hour of the place or service on the given day(s) of the week.", 
"type":  "date" 
}); 


OpeningHoursSpecification.property('dayOfWeek', {
  "name" : "dayOfWeek", 
  "displayName" : "Day Ofweek", 
  "description" : "The day of the week for which these opening hours are valid.", 
"type":"object","properties" : {"DayOfWeek" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


OpeningHoursSpecification.property('opens', {
  "name" : "opens", 
  "displayName" : "Opens", 
  "description" : "The opening hour of the place or service on the given day(s) of the week.", 
"type":  "date" 
}); 


OpeningHoursSpecification.property('validFrom', {
  "name" : "validFrom", 
  "displayName" : "Valid From", 
  "description" : "The beginning of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


OpeningHoursSpecification.property('validThrough', {
  "name" : "validThrough", 
  "displayName" : "Valid Through", 
  "description" : "The end of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


exports.OpeningHoursSpecification = OpeningHoursSpecification;
