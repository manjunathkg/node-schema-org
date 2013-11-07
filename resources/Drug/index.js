/***Generated Resource **/

var resource = require('resource');
var Drug = resource.define('Drug'); 

Drug.schema.description = "A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism."; 
Drug.persist('fs'); 


Drug.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Drug.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Drug.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Drug.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Drug.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Drug.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Drug = Drug;


Drug.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


Drug.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Drug = Drug;


Drug.property('adverseOutcome', {
  "name" : "adverseOutcome", 
  "displayName" : "Adverse Outcome", 
  "description" : "A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('contraindication', {
  "name" : "contraindication", 
  "displayName" : "Contraindication", 
  "description" : "A contraindication for this therapy.", 
"type":"object","properties" : {"MedicalContraindication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('duplicateTherapy', {
  "name" : "duplicateTherapy", 
  "displayName" : "Duplicate Therapy", 
  "description" : "A therapy that duplicates or overlaps this one.", 
"type":"object","properties" : {"MedicalTherapy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('indication', {
  "name" : "indication", 
  "displayName" : "Indication", 
  "description" : "A factor that indicates use of this therapy for treatment and/or prevention of a condition, symptom, etc. For therapies such as drugs, indications can include both officially-approved indications as well as off-label uses. These can be distinguished by using the ApprovedIndication subtype of MedicalIndication.", 
"type":"object","properties" : {"MedicalIndication" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('seriousAdverseOutcome', {
  "name" : "seriousAdverseOutcome", 
  "displayName" : "Serious Adverseoutcome", 
  "description" : "A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.", 
"type":"object","properties" : {"MedicalEntity" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Drug = Drug;


Drug.property('activeIngredient', {
  "name" : "activeIngredient", 
  "displayName" : "Active Ingredient", 
  "description" : "An active ingredient, typically chemical compounds and/or biologic substances.", 
"type":  "string" 
}); 


Drug.property('administrationRoute', {
  "name" : "administrationRoute", 
  "displayName" : "Administration Route", 
  "description" : "A route by which this drug may be administered, e.g. &#x27;oral&#x27;.", 
"type":  "string" 
}); 


Drug.property('alcoholWarning', {
  "name" : "alcoholWarning", 
  "displayName" : "Alcohol Warning", 
  "description" : "Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.", 
"type":  "string" 
}); 


Drug.property('availableStrength', {
  "name" : "availableStrength", 
  "displayName" : "Available Strength", 
  "description" : "An available dosage strength for the drug.", 
"type":"object","properties" : {"DrugStrength" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('breastfeedingWarning', {
  "name" : "breastfeedingWarning", 
  "displayName" : "Breastfeeding Warning", 
  "description" : "Any precaution, guidance, contraindication, etc. related to this drug&#x27;s use by breastfeeding mothers.", 
"type":  "string" 
}); 


Drug.property('clincalPharmacology', {
  "name" : "clincalPharmacology", 
  "displayName" : "Clincal Pharmacology", 
  "description" : "Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).", 
"type":  "string" 
}); 


Drug.property('cost', {
  "name" : "cost", 
  "displayName" : "Cost", 
  "description" : "Cost per unit of the drug, as reported by the source being tagged.", 
"type":"object","properties" : {"DrugCost" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('dosageForm', {
  "name" : "dosageForm", 
  "displayName" : "Dosage Form", 
  "description" : "A dosage form in which this drug/supplement is available, e.g. &#x27;tablet&#x27;, &#x27;suspension&#x27;, &#x27;injection&#x27;.", 
"type":  "string" 
}); 


Drug.property('doseSchedule', {
  "name" : "doseSchedule", 
  "displayName" : "Dose Schedule", 
  "description" : "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.", 
"type":"object","properties" : {"DoseSchedule" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('drugClass', {
  "name" : "drugClass", 
  "displayName" : "Drug Class", 
  "description" : "The class of drug this belongs to (e.g., statins).", 
"type":"object","properties" : {"DrugClass" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('foodWarning', {
  "name" : "foodWarning", 
  "displayName" : "Food Warning", 
  "description" : "Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.", 
"type":  "string" 
}); 


Drug.property('interactingDrug', {
  "name" : "interactingDrug", 
  "displayName" : "Interacting Drug", 
  "description" : "Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.", 
"type":"object","properties" : {"Drug" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('isAvailableGenerically', {
  "name" : "isAvailableGenerically", 
  "displayName" : "Is Availablegenerically", 
  "description" : "True if the drug is available in a generic form (regardless of name).", 
"type":  "boolean" 
}); 


Drug.property('isProprietary', {
  "name" : "isProprietary", 
  "displayName" : "Is Proprietary", 
  "description" : "True if this item&#x27;s name is a proprietary/brand name (vs. generic name).", 
"type":  "boolean" 
}); 


Drug.property('labelDetails', {
  "name" : "labelDetails", 
  "displayName" : "Label Details", 
  "description" : "Link to the drug&#x27;s label details.", 
"type":  "string" 
}); 


Drug.property('legalStatus', {
  "name" : "legalStatus", 
  "displayName" : "Legal Status", 
  "description" : "The drug or supplement&#x27;s legal status, including any controlled substance schedules that apply.", 
"type":"object","properties" : {"DrugLegalStatus" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('manufacturer', {
  "name" : "manufacturer", 
  "displayName" : "Manufacturer", 
  "description" : "The manufacturer of the product.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('mechanismOfAction', {
  "name" : "mechanismOfAction", 
  "displayName" : "Mechanism Ofaction", 
  "description" : "The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.", 
"type":  "string" 
}); 


Drug.property('nonProprietaryName', {
  "name" : "nonProprietaryName", 
  "displayName" : "Non Proprietaryname", 
  "description" : "The generic name of this drug or supplement.", 
"type":  "string" 
}); 


Drug.property('overdosage', {
  "name" : "overdosage", 
  "displayName" : "Overdosage", 
  "description" : "Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.", 
"type":  "string" 
}); 


Drug.property('pregnancyCategory', {
  "name" : "pregnancyCategory", 
  "displayName" : "Pregnancy Category", 
  "description" : "Pregnancy category of this drug.", 
"type":"object","properties" : {"DrugPregnancyCategory" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('pregnancyWarning', {
  "name" : "pregnancyWarning", 
  "displayName" : "Pregnancy Warning", 
  "description" : "Any precaution, guidance, contraindication, etc. related to this drug&#x27;s use during pregnancy.", 
"type":  "string" 
}); 


Drug.property('prescribingInfo', {
  "name" : "prescribingInfo", 
  "displayName" : "Prescribing Info", 
  "description" : "Link to prescribing information for the drug.", 
"type":  "string" 
}); 


Drug.property('prescriptionStatus', {
  "name" : "prescriptionStatus", 
  "displayName" : "Prescription Status", 
  "description" : "Indicates whether this drug is available by prescription or over-the-counter.", 
"type":"object","properties" : {"DrugPrescriptionStatus" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('relatedDrug', {
  "name" : "relatedDrug", 
  "displayName" : "Related Drug", 
  "description" : "Any other drug related to this one, for example commonly-prescribed alternatives.", 
"type":"object","properties" : {"Drug" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Drug.property('warning', {
  "name" : "warning", 
  "displayName" : "Warning", 
  "description" : "Any FDA or other warnings about the drug (text or URL).", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


exports.Drug = Drug;
