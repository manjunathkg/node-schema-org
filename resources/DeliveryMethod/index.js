/***Generated Resource **/

var resource = require('resource');
var DeliveryMethod = resource.define('DeliveryMethod'); 

DeliveryMethod.schema.description = "A delivery method is a standardized procedure for transferring the product or service to the destination of fulfilment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#DeliveryModeDirectDownload<br />http://purl.org/goodrelations/v1#DeliveryModeFreight<br />http://purl.org/goodrelations/v1#DeliveryModeMail<br />http://purl.org/goodrelations/v1#DeliveryModeOwnFleet<br />http://purl.org/goodrelations/v1#DeliveryModePickUp<br />http://purl.org/goodrelations/v1#DHL<br />http://purl.org/goodrelations/v1#FederalExpress<br />http://purl.org/goodrelations/v1#UPS<br />		"; 
DeliveryMethod.persist('fs'); 


DeliveryMethod.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


DeliveryMethod.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


DeliveryMethod.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


DeliveryMethod.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


DeliveryMethod.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


DeliveryMethod.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.DeliveryMethod = DeliveryMethod;
