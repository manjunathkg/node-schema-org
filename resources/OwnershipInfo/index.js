/***Generated Resource **/

var resource = require('resource');
var OwnershipInfo = resource.define('OwnershipInfo'); 

OwnershipInfo.schema.description = "A structured value providing information about when a certain organization or person owned a certain product."; 
OwnershipInfo.persist('fs'); 


OwnershipInfo.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


OwnershipInfo.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


OwnershipInfo.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


OwnershipInfo.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


OwnershipInfo.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


OwnershipInfo.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.OwnershipInfo = OwnershipInfo;


OwnershipInfo.property('acquiredFrom', {
  "name" : "acquiredFrom", 
  "displayName" : "Acquired From", 
  "description" : "The organization or person from which the product was acquired.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


OwnershipInfo.property('ownedFrom', {
  "name" : "ownedFrom", 
  "displayName" : "Owned From", 
  "description" : "The date and time of obtaining the product.", 
"type":  "date" 
}); 


OwnershipInfo.property('ownedThrough', {
  "name" : "ownedThrough", 
  "displayName" : "Owned Through", 
  "description" : "The date and time of giving up ownership on the product.", 
"type":  "date" 
}); 


OwnershipInfo.property('typeOfGood', {
  "name" : "typeOfGood", 
  "displayName" : "Type Ofgood", 
  "description" : "The product that this structured value is referring to.", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.OwnershipInfo = OwnershipInfo;
