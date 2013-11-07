/***Generated Resource **/

var resource = require('resource');
var ParentAudience = resource.define('ParentAudience'); 

ParentAudience.schema.description = "A set of characteristics describing parents, who can be interested in viewing some content"; 
ParentAudience.persist('fs'); 


ParentAudience.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


ParentAudience.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


ParentAudience.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


ParentAudience.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


ParentAudience.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


ParentAudience.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.ParentAudience = ParentAudience;


ParentAudience.property('healthCondition', {
  "name" : "healthCondition", 
  "displayName" : "Health Condition", 
  "description" : "Expectations for health conditions of target audience", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ParentAudience.property('suggestedGender', {
  "name" : "suggestedGender", 
  "displayName" : "Suggested Gender", 
  "description" : "The gender of the person or audience.", 
"type":  "string" 
}); 


ParentAudience.property('suggestedMaxAge', {
  "name" : "suggestedMaxAge", 
  "displayName" : "Suggested Maxage", 
  "description" : "Maximal age recommended for viewing content", 
"type":  "number" 
}); 


ParentAudience.property('suggestedMinAge', {
  "name" : "suggestedMinAge", 
  "displayName" : "Suggested Minage", 
  "description" : "Minimal age recommended for viewing content", 
"type":  "number" 
}); 


exports.ParentAudience = ParentAudience;


ParentAudience.property('childMaxAge', {
  "name" : "childMaxAge", 
  "displayName" : "Child Maxage", 
  "description" : "Maximal age of the child", 
"type":  "number" 
}); 


ParentAudience.property('childMinAge', {
  "name" : "childMinAge", 
  "displayName" : "Child Minage", 
  "description" : "Minimal age of the child", 
"type":  "number" 
}); 


exports.ParentAudience = ParentAudience;
