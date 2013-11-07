/***Generated Resource **/

var resource = require('resource');
var PeopleAudience = resource.define('PeopleAudience'); 

PeopleAudience.schema.description = "A set of characteristics belonging to people, e.g. who compose an item&#x27;s target audience."; 
PeopleAudience.persist('fs'); 


PeopleAudience.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PeopleAudience.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PeopleAudience.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PeopleAudience.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PeopleAudience.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PeopleAudience.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PeopleAudience = PeopleAudience;


PeopleAudience.property('healthCondition', {
  "name" : "healthCondition", 
  "displayName" : "Health Condition", 
  "description" : "Expectations for health conditions of target audience", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PeopleAudience.property('suggestedGender', {
  "name" : "suggestedGender", 
  "displayName" : "Suggested Gender", 
  "description" : "The gender of the person or audience.", 
"type":  "string" 
}); 


PeopleAudience.property('suggestedMaxAge', {
  "name" : "suggestedMaxAge", 
  "displayName" : "Suggested Maxage", 
  "description" : "Maximal age recommended for viewing content", 
"type":  "number" 
}); 


PeopleAudience.property('suggestedMinAge', {
  "name" : "suggestedMinAge", 
  "displayName" : "Suggested Minage", 
  "description" : "Minimal age recommended for viewing content", 
"type":  "number" 
}); 


exports.PeopleAudience = PeopleAudience;
