/***Generated Resource **/

var resource = require('resource');
var WarrantyPromise = resource.define('WarrantyPromise'); 

WarrantyPromise.schema.description = "A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product."; 
WarrantyPromise.persist('fs'); 


WarrantyPromise.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


WarrantyPromise.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


WarrantyPromise.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


WarrantyPromise.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


WarrantyPromise.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


WarrantyPromise.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.WarrantyPromise = WarrantyPromise;


WarrantyPromise.property('durationOfWarranty', {
  "name" : "durationOfWarranty", 
  "displayName" : "Duration Ofwarranty", 
  "description" : "The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


WarrantyPromise.property('warrantyScope', {
  "name" : "warrantyScope", 
  "displayName" : "Warranty Scope", 
  "description" : "The scope of the warranty promise.", 
"type":"object","properties" : {"WarrantyScope" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.WarrantyPromise = WarrantyPromise;
