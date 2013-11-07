/***Generated Resource **/

var resource = require('resource');
var AlignmentObject = resource.define('AlignmentObject'); 

AlignmentObject.schema.description = "An intangible item that describes an alignment between a learning resource and a node in an educational framework."; 
AlignmentObject.persist('fs'); 


AlignmentObject.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AlignmentObject.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AlignmentObject.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AlignmentObject.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AlignmentObject.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AlignmentObject.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AlignmentObject = AlignmentObject;


AlignmentObject.property('alignmentType', {
  "name" : "alignmentType", 
  "displayName" : "Alignment Type", 
  "description" : "A category of alignment between the learning resource and the framework node. Recommended values include: &#x27;assesses&#x27;, &#x27;teaches&#x27;, &#x27;requires&#x27;, &#x27;textComplexity&#x27;, &#x27;readingLevel&#x27;, &#x27;educationalSubject&#x27;, and &#x27;educationLevel&#x27;.", 
"type":  "string" 
}); 


AlignmentObject.property('educationalFramework', {
  "name" : "educationalFramework", 
  "displayName" : "Educational Framework", 
  "description" : "The framework to which the resource being described is aligned.", 
"type":  "string" 
}); 


AlignmentObject.property('targetDescription', {
  "name" : "targetDescription", 
  "displayName" : "Target Description", 
  "description" : "The description of a node in an established educational framework.", 
"type":  "string" 
}); 


AlignmentObject.property('targetName', {
  "name" : "targetName", 
  "displayName" : "Target Name", 
  "description" : "The name of a node in an established educational framework.", 
"type":  "string" 
}); 


AlignmentObject.property('targetUrl', {
  "name" : "targetUrl", 
  "displayName" : "Target Url", 
  "description" : "The URL of a node in an established educational framework.", 
"type":  "string" 
}); 


exports.AlignmentObject = AlignmentObject;
