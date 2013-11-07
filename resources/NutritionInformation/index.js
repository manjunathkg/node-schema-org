/***Generated Resource **/

var resource = require('resource');
var NutritionInformation = resource.define('NutritionInformation'); 

NutritionInformation.schema.description = "Nutritional information about the recipe."; 
NutritionInformation.persist('fs'); 


NutritionInformation.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


NutritionInformation.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


NutritionInformation.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


NutritionInformation.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


NutritionInformation.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


NutritionInformation.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.NutritionInformation = NutritionInformation;


NutritionInformation.property('calories', {
  "name" : "calories", 
  "displayName" : "Calories", 
  "description" : "The number of calories", 
"type":"object","properties" : {"Energy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('carbohydrateContent', {
  "name" : "carbohydrateContent", 
  "displayName" : "Carbohydrate Content", 
  "description" : "The number of grams of carbohydrates.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('cholesterolContent', {
  "name" : "cholesterolContent", 
  "displayName" : "Cholesterol Content", 
  "description" : "The number of milligrams of cholesterol.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('fatContent', {
  "name" : "fatContent", 
  "displayName" : "Fat Content", 
  "description" : "The number of grams of fat.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('fiberContent', {
  "name" : "fiberContent", 
  "displayName" : "Fiber Content", 
  "description" : "The number of grams of fiber.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('proteinContent', {
  "name" : "proteinContent", 
  "displayName" : "Protein Content", 
  "description" : "The number of grams of protein.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('saturatedFatContent', {
  "name" : "saturatedFatContent", 
  "displayName" : "Saturated Fatcontent", 
  "description" : "The number of grams of saturated fat.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('servingSize', {
  "name" : "servingSize", 
  "displayName" : "Serving Size", 
  "description" : "The serving size, in terms of the number of volume or mass", 
"type":  "string" 
}); 


NutritionInformation.property('sodiumContent', {
  "name" : "sodiumContent", 
  "displayName" : "Sodium Content", 
  "description" : "The number of milligrams of sodium.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('sugarContent', {
  "name" : "sugarContent", 
  "displayName" : "Sugar Content", 
  "description" : "The number of grams of sugar.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('transFatContent', {
  "name" : "transFatContent", 
  "displayName" : "Trans Fatcontent", 
  "description" : "The number of grams of trans fat.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


NutritionInformation.property('unsaturatedFatContent', {
  "name" : "unsaturatedFatContent", 
  "displayName" : "Unsaturated Fatcontent", 
  "description" : "The number of grams of unsaturated fat.", 
"type":"object","properties" : {"Mass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.NutritionInformation = NutritionInformation;
