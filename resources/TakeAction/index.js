/***Generated Resource **/

var resource = require('resource');
var TakeAction = resource.define('TakeAction'); 

TakeAction.schema.description = "The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.Related actions:GiveAction: The reciprocal of TakeAction.ReceiveAction: Unlike ReceiveAction, TakeAction implies that ownership has been transfered."; 
TakeAction.persist('fs'); 


TakeAction.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


TakeAction.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


TakeAction.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


TakeAction.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


TakeAction.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


TakeAction.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.TakeAction = TakeAction;


TakeAction.property('agent', {
  "name" : "agent", 
  "displayName" : "Agent", 
  "description" : "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('endTime', {
  "name" : "endTime", 
  "displayName" : "End Time", 
  "description" : "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
"type":  "date" 
}); 


TakeAction.property('instrument', {
  "name" : "instrument", 
  "displayName" : "Instrument", 
  "description" : "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('location', {
  "name" : "location", 
  "displayName" : "Location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('object', {
  "name" : "object", 
  "displayName" : "Object", 
  "description" : "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn&#x27;t). e.g. John read *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('participant', {
  "name" : "participant", 
  "displayName" : "Participant", 
  "description" : "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('result', {
  "name" : "result", 
  "displayName" : "Result", 
  "description" : "The result produced in the action. e.g. John wrote *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('startTime', {
  "name" : "startTime", 
  "displayName" : "Start Time", 
  "description" : "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
"type":  "date" 
}); 


exports.TakeAction = TakeAction;


TakeAction.property('fromLocation', {
  "name" : "fromLocation", 
  "displayName" : "From Location", 
  "description" : "A sub property of location. The original location of the object or the agent before the action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


TakeAction.property('toLocation', {
  "name" : "toLocation", 
  "displayName" : "To Location", 
  "description" : "A sub property of location. The final location of the object or the agent after the action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.TakeAction = TakeAction;
