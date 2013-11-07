/***Generated Resource **/

var resource = require('resource');
var AggregateRating = resource.define('AggregateRating'); 

AggregateRating.schema.description = "The average rating based on multiple ratings or reviews."; 
AggregateRating.persist('fs'); 


AggregateRating.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AggregateRating.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AggregateRating.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AggregateRating.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AggregateRating.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AggregateRating.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AggregateRating = AggregateRating;


AggregateRating.property('bestRating', {
  "name" : "bestRating", 
  "displayName" : "Best Rating", 
  "description" : "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


AggregateRating.property('ratingValue', {
  "name" : "ratingValue", 
  "displayName" : "Rating Value", 
  "description" : "The rating for the content.", 
"type":  "string" 
}); 


AggregateRating.property('worstRating', {
  "name" : "worstRating", 
  "displayName" : "Worst Rating", 
  "description" : "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


exports.AggregateRating = AggregateRating;


AggregateRating.property('itemReviewed', {
  "name" : "itemReviewed", 
  "displayName" : "Item Reviewed", 
  "description" : "The item that is being reviewed/rated.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateRating.property('ratingCount', {
  "name" : "ratingCount", 
  "displayName" : "Rating Count", 
  "description" : "The count of total number of ratings.", 
"type":  "number" 
}); 


AggregateRating.property('reviewCount', {
  "name" : "reviewCount", 
  "displayName" : "Review Count", 
  "description" : "The count of total number of reviews.", 
"type":  "number" 
}); 


exports.AggregateRating = AggregateRating;
