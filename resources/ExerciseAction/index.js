/***Generated Resource **/

var resource = require('resource');
var ExerciseAction = resource.define('ExerciseAction'); 

ExerciseAction.schema.description = "The act of participating in exertive activity for the purposes of improving health and fitness"; 
ExerciseAction.persist('fs'); 


ExerciseAction.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


ExerciseAction.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


ExerciseAction.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


ExerciseAction.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


ExerciseAction.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


ExerciseAction.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.ExerciseAction = ExerciseAction;


ExerciseAction.property('agent', {
  "name" : "agent", 
  "displayName" : "Agent", 
  "description" : "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('endTime', {
  "name" : "endTime", 
  "displayName" : "End Time", 
  "description" : "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
"type":  "date" 
}); 


ExerciseAction.property('instrument', {
  "name" : "instrument", 
  "displayName" : "Instrument", 
  "description" : "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('location', {
  "name" : "location", 
  "displayName" : "Location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('object', {
  "name" : "object", 
  "displayName" : "Object", 
  "description" : "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn&#x27;t). e.g. John read *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('participant', {
  "name" : "participant", 
  "displayName" : "Participant", 
  "description" : "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('result', {
  "name" : "result", 
  "displayName" : "Result", 
  "description" : "The result produced in the action. e.g. John wrote *a book*.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('startTime', {
  "name" : "startTime", 
  "displayName" : "Start Time", 
  "description" : "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
"type":  "date" 
}); 


exports.ExerciseAction = ExerciseAction;


ExerciseAction.property('audience', {
  "name" : "audience", 
  "displayName" : "Audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
"type":"object","properties" : {"Audience" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('event', {
  "name" : "event", 
  "displayName" : "Event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ExerciseAction = ExerciseAction;


ExerciseAction.property('course', {
  "name" : "course", 
  "displayName" : "Course", 
  "description" : "A sub property of location. The course where this action was taken.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('diet', {
  "name" : "diet", 
  "displayName" : "Diet", 
  "description" : "A sub property of instrument. The died used in this action.", 
"type":"object","properties" : {"Diet" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('distance', {
  "name" : "distance", 
  "displayName" : "Distance", 
  "description" : "A sub property of asset. The distance travelled.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('exercisePlan', {
  "name" : "exercisePlan", 
  "displayName" : "Exercise Plan", 
  "description" : "A sub property of instrument. The exercise plan used on this action.", 
"type":"object","properties" : {"ExercisePlan" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('exerciseType', {
  "name" : "exerciseType", 
  "displayName" : "Exercise Type", 
  "description" : "Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.", 
"type":  "string" 
}); 


ExerciseAction.property('fromLocation', {
  "name" : "fromLocation", 
  "displayName" : "From Location", 
  "description" : "A sub property of location. The original location of the object or the agent before the action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('oponent', {
  "name" : "oponent", 
  "displayName" : "Oponent", 
  "description" : "A sub property of participant. The oponent on this action.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('sportsActivityLocation', {
  "name" : "sportsActivityLocation", 
  "displayName" : "Sports Activitylocation", 
  "description" : "A sub property of location. The sports activity location where this action occurred.", 
"type":"object","properties" : {"SportsActivityLocation" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('sportsEvent', {
  "name" : "sportsEvent", 
  "displayName" : "Sports Event", 
  "description" : "A sub property of location. The sports event where this action occurred.", 
"type":"object","properties" : {"SportsEvent" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('sportsTeam', {
  "name" : "sportsTeam", 
  "displayName" : "Sports Team", 
  "description" : "A sub property of participant. The sports team that participated on this action.", 
"type":"object","properties" : {"SportsTeam" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ExerciseAction.property('toLocation', {
  "name" : "toLocation", 
  "displayName" : "To Location", 
  "description" : "A sub property of location. The final location of the object or the agent after the action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ExerciseAction = ExerciseAction;
