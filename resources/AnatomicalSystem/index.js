/***Generated Resource **/

var resource = require('resource');
var AnatomicalSystem = resource.define('AnatomicalSystem'); 

AnatomicalSystem.schema.description = "An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems."; 
AnatomicalSystem.persist('fs'); 


AnatomicalSystem.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AnatomicalSystem.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AnatomicalSystem.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AnatomicalSystem.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AnatomicalSystem.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AnatomicalSystem.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AnatomicalSystem = AnatomicalSystem;


AnatomicalSystem.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


AnatomicalSystem.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.AnatomicalSystem = AnatomicalSystem;


AnatomicalSystem.property('associatedPathophysiology', {
  "name" : "associatedPathophysiology", 
  "displayName" : "Associated Pathophysiology", 
  "description" : "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", 
"type":  "string" 
}); 


AnatomicalSystem.property('comprisedOf', {
  "name" : "comprisedOf", 
  "displayName" : "Comprised of", 
  "description" : "The underlying anatomical structures, such as organs, that comprise the anatomical system.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"AnatomicalSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('relatedCondition', {
  "name" : "relatedCondition", 
  "displayName" : "Related Condition", 
  "description" : "A medical condition associated with this anatomy.", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('relatedStructure', {
  "name" : "relatedStructure", 
  "displayName" : "Related Structure", 
  "description" : "Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AnatomicalSystem.property('relatedTherapy', {
  "name" : "relatedTherapy", 
  "displayName" : "Related Therapy", 
  "description" : "A medical therapy related to this anatomy.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.AnatomicalSystem = AnatomicalSystem;
