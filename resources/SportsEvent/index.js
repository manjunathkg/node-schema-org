/***Generated Resource **/

var resource = require('resource');
var SportsEvent = resource.define('SportsEvent'); 

SportsEvent.schema.description = "Event type: Sports event."; 
SportsEvent.persist('fs'); 


SportsEvent.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


SportsEvent.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


SportsEvent.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


SportsEvent.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


SportsEvent.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


SportsEvent.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.SportsEvent = SportsEvent;


SportsEvent.property('attendee', {
  "name" : "attendee", 
  "displayName" : "Attendee", 
  "description" : "A person or organization attending the event.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('attendees', {
  "name" : "attendees", 
  "displayName" : "Attendees", 
  "description" : "A person attending the event (legacy spelling; see singular form, attendee).", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('duration', {
  "name" : "duration", 
  "displayName" : "Duration", 
  "description" : "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.", 
"type":  "string" 
}); 


SportsEvent.property('endDate', {
  "name" : "endDate", 
  "displayName" : "End Date", 
  "description" : "The end date and time of the event (in ISO 8601 date format).", 
"type":  "date" 
}); 


SportsEvent.property('location', {
  "name" : "location", 
  "displayName" : "Location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('offers', {
  "name" : "offers", 
  "displayName" : "Offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('performer', {
  "name" : "performer", 
  "displayName" : "Performer", 
  "description" : "A performer at the event—for example, a presenter, musician, musical group or actor.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('performers', {
  "name" : "performers", 
  "displayName" : "Performers", 
  "description" : "The main performer or performers of the event—for example, a presenter, musician, or actor (legacy spelling; see singular form, performer).", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('startDate', {
  "name" : "startDate", 
  "displayName" : "Start Date", 
  "description" : "The start date and time of the event (in ISO 8601 date format).", 
"type":  "date" 
}); 


SportsEvent.property('subEvent', {
  "name" : "subEvent", 
  "displayName" : "Sub Event", 
  "description" : "An Event that is part of this event. For example, a conference event includes many presentations, each are a subEvent of the conference.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('subEvents', {
  "name" : "subEvents", 
  "displayName" : "Sub Events", 
  "description" : "Events that are a part of this event. For example, a conference event includes many presentations, each are subEvents of the conference (legacy spelling; see singular form, subEvent).", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


SportsEvent.property('superEvent', {
  "name" : "superEvent", 
  "displayName" : "Super Event", 
  "description" : "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.SportsEvent = SportsEvent;
