/***Generated Resource **/

var resource = require('resource');
var MedicalCondition = resource.define('MedicalCondition'); 

MedicalCondition.schema.description = "Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc."; 
MedicalCondition.persist('fs'); 


MedicalCondition.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


MedicalCondition.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


MedicalCondition.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


MedicalCondition.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


MedicalCondition.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


MedicalCondition.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.MedicalCondition = MedicalCondition;


MedicalCondition.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


MedicalCondition.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalCondition = MedicalCondition;


MedicalCondition.property('associatedAnatomy', {
  "name" : "associatedAnatomy", 
  "displayName" : "Associated Anatomy", 
  "description" : "The anatomy of the underlying organ system or structures associated with this entity.", 
"type":"object","properties" : {"AnatomicalStructure" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"AnatomicalSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"SuperficialAnatomy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('cause', {
  "name" : "cause", 
  "displayName" : "Cause", 
  "description" : "An underlying cause. More specifically, one of the causative agent(s) that are most directly responsible for the pathophysiologic process that eventually results in the occurrence.", 
"type":"object","properties" : {"MedicalCause" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('differentialDiagnosis', {
  "name" : "differentialDiagnosis", 
  "displayName" : "Differential Diagnosis", 
  "description" : "One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.", 
"type":"object","properties" : {"DDxElement" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('epidemiology', {
  "name" : "epidemiology", 
  "displayName" : "Epidemiology", 
  "description" : "The characteristics of associated patients, such as age, gender, race etc.", 
"type":  "string" 
}); 


MedicalCondition.property('expectedPrognosis', {
  "name" : "expectedPrognosis", 
  "displayName" : "Expected Prognosis", 
  "description" : "The likely outcome in either the short term or long term of the medical condition.", 
"type":  "string" 
}); 


MedicalCondition.property('naturalProgression', {
  "name" : "naturalProgression", 
  "displayName" : "Natural Progression", 
  "description" : "The expected progression of the condition if it is not treated and allowed to progress naturally.", 
"type":  "string" 
}); 


MedicalCondition.property('pathophysiology', {
  "name" : "pathophysiology", 
  "displayName" : "Pathophysiology", 
  "description" : "Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.", 
"type":  "string" 
}); 


MedicalCondition.property('possibleComplication', {
  "name" : "possibleComplication", 
  "displayName" : "Possible Complication", 
  "description" : "A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.", 
"type":  "string" 
}); 


MedicalCondition.property('possibleTreatment', {
  "name" : "possibleTreatment", 
  "displayName" : "Possible Treatment", 
  "description" : "A possible treatment to address this condition, sign or symptom.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('primaryPrevention', {
  "name" : "primaryPrevention", 
  "displayName" : "Primary Prevention", 
  "description" : "A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('riskFactor', {
  "name" : "riskFactor", 
  "displayName" : "Risk Factor", 
  "description" : "A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age,  coexisting condition.", 
"type":"object","properties" : {"MedicalRiskFactor" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('secondaryPrevention', {
  "name" : "secondaryPrevention", 
  "displayName" : "Secondary Prevention", 
  "description" : "A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('signOrSymptom', {
  "name" : "signOrSymptom", 
  "displayName" : "Sign Orsymptom", 
  "description" : "A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experienceof the medical condition.", 
"type":"object","properties" : {"MedicalSignOrSymptom" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('stage', {
  "name" : "stage", 
  "displayName" : "Stage", 
  "description" : "The stage of the condition, if applicable.", 
"type":"object","properties" : {"MedicalConditionStage" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


MedicalCondition.property('subtype', {
  "name" : "subtype", 
  "displayName" : "Subtype", 
  "description" : "A more specific type of the condition, where applicable, for example &#x27;Type 1 Diabetes&#x27;, &#x27;Type 2 Diabetes&#x27;, or &#x27;Gestational Diabetes&#x27; for Diabetes.", 
"type":  "string" 
}); 


MedicalCondition.property('typicalTest', {
  "name" : "typicalTest", 
  "displayName" : "Typical Test", 
  "description" : "A medical test typically performed given this condition.", 
"type":"object","properties" : {"MedicalTest" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.MedicalCondition = MedicalCondition;
