/***Generated Resource **/

var resource = require('resource');
var APIReference = resource.define('APIReference'); 

APIReference.schema.description = "Reference documentation for application programming interfaces (APIs)."; 
APIReference.persist('fs'); 


APIReference.property('Thing', {
  "name" : "Thing", 
  "displayName" : "Thing", 
  "description" : "Inherits from Thing", 
  "type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


APIReference.property('CreativeWork', {
  "name" : "CreativeWork", 
  "displayName" : "Creative Work", 
  "description" : "Inherits from CreativeWork", 
  "type":"object","properties" : {"CreativeWork" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


APIReference.property('Article', {
  "name" : "Article", 
  "displayName" : "Article", 
  "description" : "Inherits from Article", 
  "type":"object","properties" : {"Article" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


APIReference.property('TechArticle', {
  "name" : "TechArticle", 
  "displayName" : "Tech Article", 
  "description" : "Inherits from TechArticle", 
  "type":"object","properties" : {"TechArticle" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


APIReference.property('assembly', {
  "name" : "assembly", 
  "displayName" : "Assembly", 
  "description" : "Library file name e.g., mscorlib.dll, system.web.dll", 
  "type":  "string" 
}); 


APIReference.property('assemblyVersion', {
  "name" : "assemblyVersion", 
  "displayName" : "Assembly Version", 
  "description" : "Associated product/technology version. e.g., .NET Framework 4.5", 
  "type":  "string" 
}); 


APIReference.property('programmingModel', {
  "name" : "programmingModel", 
  "displayName" : "Programming Model", 
  "description" : "Indicates whether API is managed or unmanaged.", 
  "type":  "string" 
}); 


APIReference.property('targetPlatform', {
  "name" : "targetPlatform", 
  "displayName" : "Target Platform", 
  "description" : "Type of app development: phone, Metro style, desktop, XBox, etc.", 
  "type":  "string" 
}); 


exports.APIReference = APIReference;
