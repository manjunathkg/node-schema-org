/***Generated Resource **/

var resource = require('resource');
var BusinessFunction = resource.define('BusinessFunction'); 

BusinessFunction.schema.description = "The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#ConstructionInstallation<br />http://purl.org/goodrelations/v1#Dispose<br />http://purl.org/goodrelations/v1#LeaseOut<br />http://purl.org/goodrelations/v1#Maintain<br />http://purl.org/goodrelations/v1#ProvideService<br />http://purl.org/goodrelations/v1#Repair<br />http://purl.org/goodrelations/v1#Sell<br />http://purl.org/goodrelations/v1#Buy<br />		"; 
BusinessFunction.persist('fs'); 


BusinessFunction.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


BusinessFunction.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


BusinessFunction.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


BusinessFunction.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


BusinessFunction.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


BusinessFunction.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.BusinessFunction = BusinessFunction;
