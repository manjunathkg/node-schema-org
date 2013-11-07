/***Generated Resource **/

var resource = require('resource');
var EducationalAudience = resource.define('EducationalAudience'); 

EducationalAudience.schema.description = "An EducationalAudience"; 
EducationalAudience.persist('fs'); 


EducationalAudience.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


EducationalAudience.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


EducationalAudience.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


EducationalAudience.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


EducationalAudience.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


EducationalAudience.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.EducationalAudience = EducationalAudience;


EducationalAudience.property('educationalRole', {
  "name" : "educationalRole", 
  "displayName" : "Educational Role", 
  "description" : "An educationalRole of an EducationalAudience", 
"type":  "string" 
}); 


exports.EducationalAudience = EducationalAudience;
