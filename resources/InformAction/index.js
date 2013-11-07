/***Generated Resource **/

var resource = require('resource');
var InformAction = resource.define('InformAction'); 

InformAction.schema.description = "The act of notifying someone of information pertinent to them, with no expectation of a response."; 
InformAction.persist('fs'); 


InformAction.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


InformAction.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


InformAction.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


InformAction.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


InformAction.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


InformAction.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.InformAction = InformAction;


InformAction.property('agent', {
  "name" : "agent", 
  "displayName" : "Agent", 
  "description" : "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('endTime', {
  "name" : "endTime", 
  "displayName" : "End Time", 
  "description" : "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
"type":  "date" 
}); 


InformAction.property('instrument', {
  "name" : "instrument", 
  "displayName" : "Instrument", 
  "description" : "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('location', {
  "name" : "location", 
  "displayName" : "Location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('object', {
  "name" : "object", 
  "displayName" : "Object", 
  "description" : "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn&#x27;t). e.g. John read *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('participant', {
  "name" : "participant", 
  "displayName" : "Participant", 
  "description" : "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('result', {
  "name" : "result", 
  "displayName" : "Result", 
  "description" : "The result produced in the action. e.g. John wrote *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('startTime', {
  "name" : "startTime", 
  "displayName" : "Start Time", 
  "description" : "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
"type":  "date" 
}); 


exports.InformAction = InformAction;


InformAction.property('about', {
  "name" : "about", 
  "displayName" : "About", 
  "description" : "The subject matter of the content.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('language', {
  "name" : "language", 
  "displayName" : "Language", 
  "description" : "A sub property of instrument. The languaged used on this action.", 
"type":"object","properties" : {"Language" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


InformAction.property('recipient', {
  "name" : "recipient", 
  "displayName" : "Recipient", 
  "description" : "A sub property of participant. The participant who is at the receiving end of the action.", 
"type":"object","properties" : {"Audience" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.InformAction = InformAction;


InformAction.property('event', {
  "name" : "event", 
  "displayName" : "Event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.InformAction = InformAction;
