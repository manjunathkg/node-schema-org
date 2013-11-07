/***Generated Resource **/

var resource = require('resource');
var Property = resource.define('Property'); 

Property.schema.description = "A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property."; 
Property.persist('fs'); 


Property.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Property.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Property.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Property.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Property.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Property.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Property = Property;


Property.property('domainIncludes', {
  "name" : "domainIncludes", 
  "displayName" : "Domain Includes", 
  "description" : "Relates a property to a class that is (one of) the type(s) the property is expected to be used on.", 
"type":"object","properties" : {"Class" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Property.property('rangeIncludes', {
  "name" : "rangeIncludes", 
  "displayName" : "Range Includes", 
  "description" : "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.", 
"type":"object","properties" : {"Class" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Property = Property;
