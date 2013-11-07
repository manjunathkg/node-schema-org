/***Generated Resource **/

var resource = require('resource');
var CreditCard = resource.define('CreditCard'); 

CreditCard.schema.description = "A credit or debit card type as a standardized procedure for transferring the monetary amount for a purchase.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#AmericanExpress<br />http://purl.org/goodrelations/v1#DinersClub<br />http://purl.org/goodrelations/v1#Discover<br />http://purl.org/goodrelations/v1#JCB<br />http://purl.org/goodrelations/v1#MasterCard<br />http://purl.org/goodrelations/v1#VISA<br />		"; 
CreditCard.persist('fs'); 


CreditCard.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


CreditCard.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


CreditCard.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


CreditCard.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


CreditCard.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


CreditCard.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.CreditCard = CreditCard;
