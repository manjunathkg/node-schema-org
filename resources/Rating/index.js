/***Generated Resource **/

var resource = require('resource');
var Rating = resource.define('Rating'); 

Rating.schema.description = "The rating of the video."; 
Rating.persist('fs'); 


Rating.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Rating.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Rating.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Rating.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Rating.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Rating.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Rating = Rating;


Rating.property('bestRating', {
  "name" : "bestRating", 
  "displayName" : "Best Rating", 
  "description" : "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


Rating.property('ratingValue', {
  "name" : "ratingValue", 
  "displayName" : "Rating Value", 
  "description" : "The rating for the content.", 
"type":  "string" 
}); 


Rating.property('worstRating', {
  "name" : "worstRating", 
  "displayName" : "Worst Rating", 
  "description" : "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


exports.Rating = Rating;
