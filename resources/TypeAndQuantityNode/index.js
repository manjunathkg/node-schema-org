/***Generated Resource **/

var resource = require('resource');
var TypeAndQuantityNode = resource.define('TypeAndQuantityNode'); 

TypeAndQuantityNode.schema.description = "A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer."; 
TypeAndQuantityNode.persist('fs'); 


TypeAndQuantityNode.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


TypeAndQuantityNode.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


TypeAndQuantityNode.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


TypeAndQuantityNode.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


TypeAndQuantityNode.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


TypeAndQuantityNode.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.TypeAndQuantityNode = TypeAndQuantityNode;


TypeAndQuantityNode.property('amountOfThisGood', {
  "name" : "amountOfThisGood", 
  "displayName" : "Amount Ofthisgood", 
  "description" : "The quantity of the goods included in the offer.", 
"type":  "number" 
}); 


TypeAndQuantityNode.property('businessFunction', {
  "name" : "businessFunction", 
  "displayName" : "Business Function", 
  "description" : "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.", 
"type":"object","properties" : {"BusinessFunction" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TypeAndQuantityNode.property('typeOfGood', {
  "name" : "typeOfGood", 
  "displayName" : "Type Ofgood", 
  "description" : "The product that this structured value is referring to.", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TypeAndQuantityNode.property('unitCode', {
  "name" : "unitCode", 
  "displayName" : "Unit Code", 
  "description" : "The unit of measurement given using the UN/CEFACT Common Code (3 characters).", 
"type":  "string" 
}); 


exports.TypeAndQuantityNode = TypeAndQuantityNode;
