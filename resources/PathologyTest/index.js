/***Generated Resource **/

var resource = require('resource');
var PathologyTest = resource.define('PathologyTest'); 

PathologyTest.schema.description = "A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist."; 
PathologyTest.persist('fs'); 


PathologyTest.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PathologyTest.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PathologyTest.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PathologyTest.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PathologyTest.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PathologyTest.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PathologyTest = PathologyTest;


PathologyTest.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


PathologyTest.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PathologyTest = PathologyTest;


PathologyTest.property('affectedBy', {
  "name" : "affectedBy", 
  "displayName" : "Affected by", 
  "description" : "Drugs that affect the test&#x27;s results.", 
"type":"object","properties" : {"Drug" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('normalRange', {
  "name" : "normalRange", 
  "displayName" : "Normal Range", 
  "description" : "Range of acceptable values for a typical patient, when applicable.", 
"type":  "string" 
}); 


PathologyTest.property('signDetected', {
  "name" : "signDetected", 
  "displayName" : "Sign Detected", 
  "description" : "A sign detected by the test.", 
"type":"object","properties" : {"MedicalSign" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('usedToDiagnose', {
  "name" : "usedToDiagnose", 
  "displayName" : "Used Todiagnose", 
  "description" : "A condition the test is used to diagnose.", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PathologyTest.property('usesDevice', {
  "name" : "usesDevice", 
  "displayName" : "Uses Device", 
  "description" : "Device used to perform the test.", 
"type":"object","properties" : {"MedicalDevice" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PathologyTest = PathologyTest;


PathologyTest.property('tissueSample', {
  "name" : "tissueSample", 
  "displayName" : "Tissue Sample", 
  "description" : "The type of tissue sample required for the test.", 
"type":  "string" 
}); 


exports.PathologyTest = PathologyTest;
