/***Generated Resource **/

var resource = require('resource');
var GeoShape = resource.define('GeoShape'); 

GeoShape.schema.description = "The geographic shape of a place."; 
GeoShape.persist('fs'); 


GeoShape.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


GeoShape.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


GeoShape.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


GeoShape.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


GeoShape.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


GeoShape.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.GeoShape = GeoShape;


GeoShape.property('box', {
  "name" : "box", 
  "displayName" : "Box", 
  "description" : "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
"type":  "string" 
}); 


GeoShape.property('circle', {
  "name" : "circle", 
  "displayName" : "Circle", 
  "description" : "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", 
"type":  "string" 
}); 


GeoShape.property('elevation', {
  "name" : "elevation", 
  "displayName" : "Elevation", 
  "description" : "The elevation of a location.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


GeoShape.property('line', {
  "name" : "line", 
  "displayName" : "Line", 
  "description" : "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", 
"type":  "string" 
}); 


GeoShape.property('polygon', {
  "name" : "polygon", 
  "displayName" : "Polygon", 
  "description" : "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
"type":  "string" 
}); 


exports.GeoShape = GeoShape;
