/***Generated Resource **/

var resource = require('resource');
var MedicalAudience = resource.define('MedicalAudience'); 

MedicalAudience.schema.description = "Target audiences for medical web pages. Enumerated type."; 
MedicalAudience.persist('fs'); 


MedicalAudience.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


MedicalAudience.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


MedicalAudience.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


MedicalAudience.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


MedicalAudience.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


MedicalAudience.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.MedicalAudience = MedicalAudience;


MedicalAudience.property('healthCondition', {
  "name" : "healthCondition", 
  "displayName" : "Health Condition", 
  "description" : "Expectations for health conditions of target audience", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('suggestedGender', {
  "name" : "suggestedGender", 
  "displayName" : "Suggested Gender", 
  "description" : "The gender of the person or audience.", 
"type":  "string" 
}); 


MedicalAudience.property('suggestedMaxAge', {
  "name" : "suggestedMaxAge", 
  "displayName" : "Suggested Maxage", 
  "description" : "Maximal age recommended for viewing content", 
"type":  "number" 
}); 


MedicalAudience.property('suggestedMinAge', {
  "name" : "suggestedMinAge", 
  "displayName" : "Suggested Minage", 
  "description" : "Minimal age recommended for viewing content", 
"type":  "number" 
}); 


exports.MedicalAudience = MedicalAudience;


MedicalAudience.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


MedicalAudience.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalAudience.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalAudience = MedicalAudience;
