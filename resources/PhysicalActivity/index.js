/***Generated Resource **/

var resource = require('resource');
var PhysicalActivity = resource.define('PhysicalActivity'); 

PhysicalActivity.schema.description = "Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan."; 
PhysicalActivity.persist('fs'); 


PhysicalActivity.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PhysicalActivity.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PhysicalActivity.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PhysicalActivity.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PhysicalActivity.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PhysicalActivity.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PhysicalActivity = PhysicalActivity;


PhysicalActivity.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


PhysicalActivity.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PhysicalActivity = PhysicalActivity;


PhysicalActivity.property('adverseOutcome', {
  "name" : "adverseOutcome", 
  "displayName" : "Adverse Outcome", 
  "description" : "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('contraindication', {
  "name" : "contraindication", 
  "displayName" : "Contraindication", 
  "description" : "A contraindication for this therapy.", 
"type":"object","properties" : {"MedicalContraindication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('duplicateTherapy', {
  "name" : "duplicateTherapy", 
  "displayName" : "Duplicate Therapy", 
  "description" : "A therapy that duplicates or overlaps this one.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('indication', {
  "name" : "indication", 
  "displayName" : "Indication", 
  "description" : "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
"type":"object","properties" : {"MedicalIndication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('seriousAdverseOutcome', {
  "name" : "seriousAdverseOutcome", 
  "displayName" : "Serious Adverseoutcome", 
  "description" : "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PhysicalActivity = PhysicalActivity;


PhysicalActivity.property('associatedAnatomy', {
  "name" : "associatedAnatomy", 
  "displayName" : "Associated Anatomy", 
  "description" : "The anatomy of the underlying organ system or structures associated with this entity.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"AnatomicalSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"SuperficialAnatomy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('category', {
  "name" : "category", 
  "displayName" : "Category", 
  "description" : "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", 
"type":"object","properties" : {"PhysicalActivityCategory" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PhysicalActivity.property('epidemiology', {
  "name" : "epidemiology", 
  "displayName" : "Epidemiology", 
  "description" : "The characteristics of associated patients, such as age, gender, race etc.", 
"type":  "string" 
}); 


PhysicalActivity.property('pathophysiology', {
  "name" : "pathophysiology", 
  "displayName" : "Pathophysiology", 
  "description" : "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", 
"type":  "string" 
}); 


exports.PhysicalActivity = PhysicalActivity;
