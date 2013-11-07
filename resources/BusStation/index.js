/***Generated Resource **/

var resource = require('resource');
var BusStation = resource.define('BusStation'); 

BusStation.schema.description = "A bus station."; 
BusStation.persist('fs'); 


BusStation.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


BusStation.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


BusStation.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


BusStation.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


BusStation.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


BusStation.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.BusStation = BusStation;


BusStation.property('address', {
  "name" : "address", 
  "displayName" : "Address", 
  "description" : "Physical address of the item.", 
"type":"object","properties" : {"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('containedIn', {
  "name" : "containedIn", 
  "displayName" : "Contained in", 
  "description" : "The basic containment relation between places.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('event', {
  "name" : "event", 
  "displayName" : "Event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('events', {
  "name" : "events", 
  "displayName" : "Events", 
  "description" : "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('faxNumber', {
  "name" : "faxNumber", 
  "displayName" : "Fax Number", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


BusStation.property('geo', {
  "name" : "geo", 
  "displayName" : "Geo", 
  "description" : "The geo coordinates of the place.", 
"type":"object","properties" : {"GeoCoordinates" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('globalLocationNumber', {
  "name" : "globalLocationNumber", 
  "displayName" : "Global Locationnumber", 
  "description" : "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
"type":  "string" 
}); 


BusStation.property('interactionCount', {
  "name" : "interactionCount", 
  "displayName" : "Interaction Count", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


BusStation.property('isicV4', {
  "name" : "isicV4", 
  "displayName" : "Isic v4", 
  "description" : "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
"type":  "string" 
}); 


BusStation.property('logo', {
  "name" : "logo", 
  "displayName" : "Logo", 
  "description" : "URL of an image for the logo of the item.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('map', {
  "name" : "map", 
  "displayName" : "Map", 
  "description" : "A URL to a map of the place.", 
"type":  "string" 
}); 


BusStation.property('maps', {
  "name" : "maps", 
  "displayName" : "Maps", 
  "description" : "A URL to a map of the place (legacy spelling; see singular form, map).", 
"type":  "string" 
}); 


BusStation.property('openingHoursSpecification', {
  "name" : "openingHoursSpecification", 
  "displayName" : "Opening Hoursspecification", 
  "description" : "The opening hours of a certain place.", 
"type":"object","properties" : {"OpeningHoursSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('photo', {
  "name" : "photo", 
  "displayName" : "Photo", 
  "description" : "A photograph of this place.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('photos', {
  "name" : "photos", 
  "displayName" : "Photos", 
  "description" : "Photographs of this place (legacy spelling; see singular form, photo).", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


BusStation.property('telephone', {
  "name" : "telephone", 
  "displayName" : "Telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


exports.BusStation = BusStation;


BusStation.property('openingHours', {
  "name" : "openingHours", 
  "displayName" : "Opening Hours", 
  "description" : "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas &#x27;,&#x27; separating each day. Day or time ranges are specified using a hyphen &#x27;-&#x27;.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: Tuesdays and Thursdays 4-8pm. - If a business is open 7 days a week, then it can be specified as Monday through Sunday, all day.", 
"type":  "string" 
}); 


exports.BusStation = BusStation;
