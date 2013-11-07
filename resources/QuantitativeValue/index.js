/***Generated Resource **/

var resource = require('resource');
var QuantitativeValue = resource.define('QuantitativeValue'); 

QuantitativeValue.schema.description = " A point value or interval for product characteristics and other purposes."; 
QuantitativeValue.persist('fs'); 


QuantitativeValue.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


QuantitativeValue.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


QuantitativeValue.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


QuantitativeValue.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


QuantitativeValue.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


QuantitativeValue.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.QuantitativeValue = QuantitativeValue;


QuantitativeValue.property('maxValue', {
  "name" : "maxValue", 
  "displayName" : "Max Value", 
  "description" : "The upper of the product characteristic.", 
"type":  "number" 
}); 


QuantitativeValue.property('minValue', {
  "name" : "minValue", 
  "displayName" : "Min Value", 
  "description" : "The lower value of the product characteristic.", 
"type":  "number" 
}); 


QuantitativeValue.property('unitCode', {
  "name" : "unitCode", 
  "displayName" : "Unit Code", 
  "description" : "The unit of measurement given using the UN/CEFACT Common Code (3 characters).", 
"type":  "string" 
}); 


QuantitativeValue.property('value', {
  "name" : "value", 
  "displayName" : "Value", 
  "description" : "The value of the product characteristic.", 
"type":  "number" 
}); 


QuantitativeValue.property('valueReference', {
  "name" : "valueReference", 
  "displayName" : "Value Reference", 
  "description" : "A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.", 
"type":"object","properties" : {"Enumeration" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"StructuredValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.QuantitativeValue = QuantitativeValue;
