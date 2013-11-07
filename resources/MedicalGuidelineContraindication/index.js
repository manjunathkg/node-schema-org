/***Generated Resource **/

var resource = require('resource');
var MedicalGuidelineContraindication = resource.define('MedicalGuidelineContraindication'); 

MedicalGuidelineContraindication.schema.description = "A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound."; 
MedicalGuidelineContraindication.persist('fs'); 


MedicalGuidelineContraindication.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.MedicalGuidelineContraindication = MedicalGuidelineContraindication;


MedicalGuidelineContraindication.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalGuidelineContraindication = MedicalGuidelineContraindication;


MedicalGuidelineContraindication.property('evidenceLevel', {
  "name" : "evidenceLevel", 
  "displayName" : "Evidence Level", 
  "description" : "Strength of evidence of the data used to formulate the guideline (enumerated).", 
"type":"object","properties" : {"MedicalEvidenceLevel" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalGuidelineContraindication.property('evidenceOrigin', {
  "name" : "evidenceOrigin", 
  "displayName" : "Evidence Origin", 
  "description" : "Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.", 
"type":  "string" 
}); 


MedicalGuidelineContraindication.property('guidelineDate', {
  "name" : "guidelineDate", 
  "displayName" : "Guideline Date", 
  "description" : "Date on which this guideline&#x27;s recommendation was made.", 
"type":  "date" 
}); 


MedicalGuidelineContraindication.property('guidelineSubject', {
  "name" : "guidelineSubject", 
  "displayName" : "Guideline Subject", 
  "description" : "The medical conditions, treatments, etc. that are the subject of the guideline.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalGuidelineContraindication = MedicalGuidelineContraindication;
