/***Generated Resource **/

var resource = require('resource');
var PhysicalTherapy = resource.define('PhysicalTherapy'); 

PhysicalTherapy.schema.description = "A process of progressive physical care and rehabilitation aimed at improving a health condition."; 
PhysicalTherapy.persist('fs'); 


PhysicalTherapy.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PhysicalTherapy.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PhysicalTherapy.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PhysicalTherapy.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PhysicalTherapy.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PhysicalTherapy.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PhysicalTherapy = PhysicalTherapy;


PhysicalTherapy.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


PhysicalTherapy.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PhysicalTherapy = PhysicalTherapy;


PhysicalTherapy.property('adverseOutcome', {
  "name" : "adverseOutcome", 
  "displayName" : "Adverse Outcome", 
  "description" : "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('contraindication', {
  "name" : "contraindication", 
  "displayName" : "Contraindication", 
  "description" : "A contraindication for this therapy.", 
"type":"object","properties" : {"MedicalContraindication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('duplicateTherapy', {
  "name" : "duplicateTherapy", 
  "displayName" : "Duplicate Therapy", 
  "description" : "A therapy that duplicates or overlaps this one.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('indication', {
  "name" : "indication", 
  "displayName" : "Indication", 
  "description" : "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
"type":"object","properties" : {"MedicalIndication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalTherapy.property('seriousAdverseOutcome', {
  "name" : "seriousAdverseOutcome", 
  "displayName" : "Serious Adverseoutcome", 
  "description" : "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PhysicalTherapy = PhysicalTherapy;
