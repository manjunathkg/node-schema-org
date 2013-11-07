/***Generated Resource **/

var resource = require('resource');
var GeoCoordinates = resource.define('GeoCoordinates'); 

GeoCoordinates.schema.description = "The geographic coordinates of a place or event."; 
GeoCoordinates.persist('fs'); 


GeoCoordinates.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


GeoCoordinates.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


GeoCoordinates.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


GeoCoordinates.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


GeoCoordinates.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


GeoCoordinates.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.GeoCoordinates = GeoCoordinates;


GeoCoordinates.property('elevation', {
  "name" : "elevation", 
  "displayName" : "Elevation", 
  "description" : "The elevation of a location.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


GeoCoordinates.property('latitude', {
  "name" : "latitude", 
  "displayName" : "Latitude", 
  "description" : "The latitude of a location. For example 37.42242.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


GeoCoordinates.property('longitude', {
  "name" : "longitude", 
  "displayName" : "Longitude", 
  "description" : "The longitude of a location. For example -122.08585.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


exports.GeoCoordinates = GeoCoordinates;
