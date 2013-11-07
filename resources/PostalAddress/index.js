/***Generated Resource **/

var resource = require('resource');
var PostalAddress = resource.define('PostalAddress'); 

PostalAddress.schema.description = "The mailing address."; 
PostalAddress.persist('fs'); 


PostalAddress.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PostalAddress.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PostalAddress.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PostalAddress.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PostalAddress.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PostalAddress.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PostalAddress = PostalAddress;


PostalAddress.property('contactType', {
  "name" : "contactType", 
  "displayName" : "Contact Type", 
  "description" : "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", 
"type":  "string" 
}); 


PostalAddress.property('email', {
  "name" : "email", 
  "displayName" : "Email", 
  "description" : "Email address.", 
"type":  "string" 
}); 


PostalAddress.property('faxNumber', {
  "name" : "faxNumber", 
  "displayName" : "Fax Number", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


PostalAddress.property('telephone', {
  "name" : "telephone", 
  "displayName" : "Telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


exports.PostalAddress = PostalAddress;


PostalAddress.property('addressCountry', {
  "name" : "addressCountry", 
  "displayName" : "Address Country", 
  "description" : "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
"type":"object","properties" : {"Country" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PostalAddress.property('addressLocality', {
  "name" : "addressLocality", 
  "displayName" : "Address Locality", 
  "description" : "The locality. For example, Mountain View.", 
"type":  "string" 
}); 


PostalAddress.property('addressRegion', {
  "name" : "addressRegion", 
  "displayName" : "Address Region", 
  "description" : "The region. For example, CA.", 
"type":  "string" 
}); 


PostalAddress.property('postalCode', {
  "name" : "postalCode", 
  "displayName" : "Postal Code", 
  "description" : "The postal code. For example, 94043.", 
"type":  "string" 
}); 


PostalAddress.property('postOfficeBoxNumber', {
  "name" : "postOfficeBoxNumber", 
  "displayName" : "Post Officeboxnumber", 
  "description" : "The post offce box number for PO box addresses.", 
"type":  "string" 
}); 


PostalAddress.property('streetAddress', {
  "name" : "streetAddress", 
  "displayName" : "Street Address", 
  "description" : "The street address. For example, 1600 Amphitheatre Pkwy.", 
"type":  "string" 
}); 


exports.PostalAddress = PostalAddress;
