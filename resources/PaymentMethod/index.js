/***Generated Resource **/

var resource = require('resource');
var PaymentMethod = resource.define('PaymentMethod'); 

PaymentMethod.schema.description = "A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#ByBankTransferInAdvance<br />http://purl.org/goodrelations/v1#ByInvoice<br />http://purl.org/goodrelations/v1#Cash<br />http://purl.org/goodrelations/v1#CheckInAdvance<br />http://purl.org/goodrelations/v1#COD<br />http://purl.org/goodrelations/v1#DirectDebit<br />http://purl.org/goodrelations/v1#GoogleCheckout<br />http://purl.org/goodrelations/v1#PayPal<br />http://purl.org/goodrelations/v1#PaySwarm<br />		"; 
PaymentMethod.persist('fs'); 


PaymentMethod.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PaymentMethod.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PaymentMethod.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PaymentMethod.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PaymentMethod.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PaymentMethod.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PaymentMethod = PaymentMethod;
