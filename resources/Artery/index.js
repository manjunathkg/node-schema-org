/***Generated Resource **/

var resource = require('resource');
var Artery = resource.define('Artery'); 

Artery.schema.description = "A type of blood vessel that specifically carries blood away from the heart."; 
Artery.persist('fs'); 


Artery.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Artery.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Artery.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Artery.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Artery.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Artery.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Artery = Artery;


Artery.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


Artery.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Artery = Artery;


Artery.property('associatedPathophysiology', {
  "name" : "associatedPathophysiology", 
  "displayName" : "Associated Pathophysiology", 
  "description" : "If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.", 
"type":  "string" 
}); 


Artery.property('bodyLocation', {
  "name" : "bodyLocation", 
  "displayName" : "Body Location", 
  "description" : "Location in the body of the anatomical structure.", 
"type":  "string" 
}); 


Artery.property('connectedTo', {
  "name" : "connectedTo", 
  "displayName" : "Connected to", 
  "description" : "Other anatomical structures to which this structure is connected.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('diagram', {
  "name" : "diagram", 
  "displayName" : "Diagram", 
  "description" : "An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('function', {
  "name" : "function", 
  "displayName" : "Function", 
  "description" : "Function of the anatomical structure.", 
"type":  "string" 
}); 


Artery.property('partOfSystem', {
  "name" : "partOfSystem", 
  "displayName" : "Part Ofsystem", 
  "description" : "The anatomical or organ system that this structure is part of.", 
"type":"object","properties" : {"AnatomicalSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('relatedCondition', {
  "name" : "relatedCondition", 
  "displayName" : "Related Condition", 
  "description" : "A medical condition associated with this anatomy.", 
"type":"object","properties" : {"MedicalCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('relatedTherapy', {
  "name" : "relatedTherapy", 
  "displayName" : "Related Therapy", 
  "description" : "A medical therapy related to this anatomy.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('subStructure', {
  "name" : "subStructure", 
  "displayName" : "Sub Structure", 
  "description" : "Component (sub-)structure(s) that comprise this anatomical structure.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Artery = Artery;


Artery.property('arterialBranch', {
  "name" : "arterialBranch", 
  "displayName" : "Arterial Branch", 
  "description" : "The branches that comprise the arterial structure.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('source', {
  "name" : "source", 
  "displayName" : "Source", 
  "description" : "The anatomical or organ system that the artery originates from.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Artery.property('supplyTo', {
  "name" : "supplyTo", 
  "displayName" : "Supply to", 
  "description" : "The area to which the artery supplies blood to.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Artery = Artery;
