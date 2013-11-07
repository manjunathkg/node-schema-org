/***Generated Resource **/

var resource = require('resource');
var RecommendedDoseSchedule = resource.define('RecommendedDoseSchedule'); 

RecommendedDoseSchedule.schema.description = "A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement&#x27;s manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity."; 
RecommendedDoseSchedule.persist('fs'); 


RecommendedDoseSchedule.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.RecommendedDoseSchedule = RecommendedDoseSchedule;


RecommendedDoseSchedule.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


RecommendedDoseSchedule.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


RecommendedDoseSchedule.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


RecommendedDoseSchedule.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


RecommendedDoseSchedule.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


RecommendedDoseSchedule.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.RecommendedDoseSchedule = RecommendedDoseSchedule;


RecommendedDoseSchedule.property('doseUnit', {
  "name" : "doseUnit", 
  "displayName" : "Dose Unit", 
  "description" : "The unit of the dose, e.g. &#x27;mg&#x27;.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('doseValue', {
  "name" : "doseValue", 
  "displayName" : "Dose Value", 
  "description" : "The value of the dose, e.g. 500.", 
"type":  "number" 
}); 


RecommendedDoseSchedule.property('frequency', {
  "name" : "frequency", 
  "displayName" : "Frequency", 
  "description" : "How often the dose is taken, e.g. &#x27;daily&#x27;.", 
"type":  "string" 
}); 


RecommendedDoseSchedule.property('targetPopulation', {
  "name" : "targetPopulation", 
  "displayName" : "Target Population", 
  "description" : "Characteristics of the population for which this is intended, or which typically uses it, e.g. &#x27;adults&#x27;.", 
"type":  "string" 
}); 


exports.RecommendedDoseSchedule = RecommendedDoseSchedule;
