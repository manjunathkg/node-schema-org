/***Generated Resource **/

var resource = require('resource');
var QualitativeValue = resource.define('QualitativeValue'); 

QualitativeValue.schema.description = "A predefined value for a product characteristic, e.g. the the power cord plug type &quot;US&quot; or the garment sizes &quot;S&quot;, &quot;M&quot;, &quot;L&quot;, and &quot;XL&quot;"; 
QualitativeValue.persist('fs'); 


QualitativeValue.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


QualitativeValue.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


QualitativeValue.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


QualitativeValue.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


QualitativeValue.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


QualitativeValue.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.QualitativeValue = QualitativeValue;


QualitativeValue.property('equal', {
  "name" : "equal", 
  "displayName" : "Equal", 
  "description" : "This ordering relation for qualitative values indicates that the subject is equal to the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('greater', {
  "name" : "greater", 
  "displayName" : "Greater", 
  "description" : "This ordering relation for qualitative values indicates that the subject is greater than the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('greaterOrEqual', {
  "name" : "greaterOrEqual", 
  "displayName" : "Greater Orequal", 
  "description" : "This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('lesser', {
  "name" : "lesser", 
  "displayName" : "Lesser", 
  "description" : "This ordering relation for qualitative values indicates that the subject is lesser than the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('lesserOrEqual', {
  "name" : "lesserOrEqual", 
  "displayName" : "Lesser Orequal", 
  "description" : "This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('nonEqual', {
  "name" : "nonEqual", 
  "displayName" : "Non Equal", 
  "description" : "This ordering relation for qualitative values indicates that the subject is not equal to the object.", 
"type":"object","properties" : {"QualitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


QualitativeValue.property('valueReference', {
  "name" : "valueReference", 
  "displayName" : "Value Reference", 
  "description" : "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.", 
"type":"object","properties" : {"Enumeration" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"StructuredValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.QualitativeValue = QualitativeValue;
