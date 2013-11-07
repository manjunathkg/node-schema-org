/***Generated Resource **/

var resource = require('resource');
var DietarySupplement = resource.define('DietarySupplement'); 

DietarySupplement.schema.description = "A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites."; 
DietarySupplement.persist('fs'); 


DietarySupplement.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


DietarySupplement.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


DietarySupplement.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


DietarySupplement.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


DietarySupplement.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


DietarySupplement.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.DietarySupplement = DietarySupplement;


DietarySupplement.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


DietarySupplement.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.DietarySupplement = DietarySupplement;


DietarySupplement.property('adverseOutcome', {
  "name" : "adverseOutcome", 
  "displayName" : "Adverse Outcome", 
  "description" : "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('contraindication', {
  "name" : "contraindication", 
  "displayName" : "Contraindication", 
  "description" : "A contraindication for this therapy.", 
"type":"object","properties" : {"MedicalContraindication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('duplicateTherapy', {
  "name" : "duplicateTherapy", 
  "displayName" : "Duplicate Therapy", 
  "description" : "A therapy that duplicates or overlaps this one.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('indication', {
  "name" : "indication", 
  "displayName" : "Indication", 
  "description" : "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
"type":"object","properties" : {"MedicalIndication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('seriousAdverseOutcome', {
  "name" : "seriousAdverseOutcome", 
  "displayName" : "Serious Adverseoutcome", 
  "description" : "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.DietarySupplement = DietarySupplement;


DietarySupplement.property('activeIngredient', {
  "name" : "activeIngredient", 
  "displayName" : "Active Ingredient", 
  "description" : "An active ingredient, typically chemical compounds and/or biologic substances.", 
"type":  "string" 
}); 


DietarySupplement.property('background', {
  "name" : "background", 
  "displayName" : "Background", 
  "description" : "Descriptive information establishing a historical perspective on the supplement. May include the rationale for the name, the population where the supplement first came to prominence, etc.", 
"type":  "string" 
}); 


DietarySupplement.property('dosageForm', {
  "name" : "dosageForm", 
  "displayName" : "Dosage Form", 
  "description" : "A dosage form in which this drug/supplement is available, e.g. &#x27;tablet&#x27;, &#x27;suspension&#x27;, &#x27;injection&#x27;.", 
"type":  "string" 
}); 


DietarySupplement.property('isProprietary', {
  "name" : "isProprietary", 
  "displayName" : "Is Proprietary", 
  "description" : "True if this item&#x27;s name is a proprietary/brand name (vs. generic name).", 
"type":  "boolean" 
}); 


DietarySupplement.property('legalStatus', {
  "name" : "legalStatus", 
  "displayName" : "Legal Status", 
  "description" : "The drug or supplement&#x27;s legal status, including any controlled substance schedules that apply.", 
"type":"object","properties" : {"DrugLegalStatus" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('manufacturer', {
  "name" : "manufacturer", 
  "displayName" : "Manufacturer", 
  "description" : "The manufacturer of the product.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('maximumIntake', {
  "name" : "maximumIntake", 
  "displayName" : "Maximum Intake", 
  "description" : "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
"type":"object","properties" : {"MaximumDoseSchedule" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('mechanismOfAction', {
  "name" : "mechanismOfAction", 
  "displayName" : "Mechanism Ofaction", 
  "description" : "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", 
"type":  "string" 
}); 


DietarySupplement.property('nonProprietaryName', {
  "name" : "nonProprietaryName", 
  "displayName" : "Non Proprietaryname", 
  "description" : "The generic name of this drug or supplement.", 
"type":  "string" 
}); 


DietarySupplement.property('recommendedIntake', {
  "name" : "recommendedIntake", 
  "displayName" : "Recommended Intake", 
  "description" : "Recommended intake of this supplement for a given population as defined by a specific recommending authority.", 
"type":"object","properties" : {"RecommendedDoseSchedule" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DietarySupplement.property('safetyConsideration', {
  "name" : "safetyConsideration", 
  "displayName" : "Safety Consideration", 
  "description" : "Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.", 
"type":  "string" 
}); 


DietarySupplement.property('targetPopulation', {
  "name" : "targetPopulation", 
  "displayName" : "Target Population", 
  "description" : "Characteristics of the population for which this is intended, or which typically uses it, e.g. &#x27;adults&#x27;.", 
"type":  "string" 
}); 


exports.DietarySupplement = DietarySupplement;
