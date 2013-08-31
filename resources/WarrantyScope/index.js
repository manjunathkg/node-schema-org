/***Generated Resource **/

var resource = require('resource');
var WarrantyScope = resource.define('WarrantyScope'); 

WarrantyScope.schema.description = "A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
Commonly used values:

http://purl.org/goodrelations/v1#Labor-BringIn
http://purl.org/goodrelations/v1#PartsAndLabor-BringIn
http://purl.org/goodrelations/v1#PartsAndLabor-PickUp"; 
WarrantyScope.persist('fs'); 


WarrantyScope.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


WarrantyScope.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


WarrantyScope.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.WarrantyScope = WarrantyScope;
