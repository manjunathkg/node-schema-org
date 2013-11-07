/***Generated Resource **/

var resource = require('resource');
var MedicalObservationalStudy = resource.define('MedicalObservationalStudy'); 

MedicalObservationalStudy.schema.description = "An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment."; 
MedicalObservationalStudy.persist('fs'); 


MedicalObservationalStudy.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.MedicalObservationalStudy = MedicalObservationalStudy;


MedicalObservationalStudy.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalObservationalStudy = MedicalObservationalStudy;


MedicalObservationalStudy.property('outcome', {
  "name" : "outcome", 
  "displayName" : "Outcome", 
  "description" : "Expected or actual outcomes of the study.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('population', {
  "name" : "population", 
  "displayName" : "Population", 
  "description" : "Any characteristics of the population used in the study, e.g. &#x27;males under 65&#x27;.", 
"type":  "string" 
}); 


MedicalObservationalStudy.property('sponsor', {
  "name" : "sponsor", 
  "displayName" : "Sponsor", 
  "description" : "Sponsor of the study.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('status', {
  "name" : "status", 
  "displayName" : "Status", 
  "description" : "The status of the study (enumerated).", 
"type":"object","properties" : {"MedicalStudyStatus" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('studyLocation', {
  "name" : "studyLocation", 
  "displayName" : "Study Location", 
  "description" : "The location in which the study is taking/took place.", 
"type":"object","properties" : {"AdministrativeArea" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalObservationalStudy.property('studySubject', {
  "name" : "studySubject", 
  "displayName" : "Study Subject", 
  "description" : "A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalObservationalStudy = MedicalObservationalStudy;


MedicalObservationalStudy.property('studyDesign', {
  "name" : "studyDesign", 
  "displayName" : "Study Design", 
  "description" : "Specifics about the observational study design (enumerated).", 
"type":"object","properties" : {"MedicalObservationalStudyDesign" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalObservationalStudy = MedicalObservationalStudy;
