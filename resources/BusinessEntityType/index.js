/***Generated Resource **/

var resource = require('resource');
var BusinessEntityType = resource.define('BusinessEntityType'); 

BusinessEntityType.schema.description = "A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.<br /><br />Commonly used values:<br /><br />http://purl.org/goodrelations/v1#Business<br />http://purl.org/goodrelations/v1#Enduser<br />http://purl.org/goodrelations/v1#PublicInstitution<br />http://purl.org/goodrelations/v1#Reseller<br /><br />		"; 
BusinessEntityType.persist('fs'); 


BusinessEntityType.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


BusinessEntityType.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


BusinessEntityType.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


BusinessEntityType.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


BusinessEntityType.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


BusinessEntityType.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.BusinessEntityType = BusinessEntityType;
