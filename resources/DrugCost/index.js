/***Generated Resource **/

var resource = require('resource');
var DrugCost = resource.define('DrugCost'); 

DrugCost.schema.description = "The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema&#x27;s markup."; 
DrugCost.persist('fs'); 


DrugCost.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


DrugCost.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


DrugCost.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


DrugCost.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


DrugCost.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


DrugCost.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.DrugCost = DrugCost;


DrugCost.property('alternateName', {
  "name" : "alternateName", 
  "displayName" : "Alternate Name", 
  "description" : "Any alternate name for this medical entity.", 
"type":  "string" 
}); 


DrugCost.property('code', {
  "name" : "code", 
  "displayName" : "Code", 
  "description" : "A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.", 
"type":"object","properties" : {"MedicalCode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('guideline', {
  "name" : "guideline", 
  "displayName" : "Guideline", 
  "description" : "A medical guideline related to this entity.", 
"type":"object","properties" : {"MedicalGuideline" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('medicineSystem', {
  "name" : "medicineSystem", 
  "displayName" : "Medicine System", 
  "description" : "The system of medicine that includes this MedicalEntity, for example &#x27;evidence-based&#x27;, &#x27;homeopathic&#x27;, &#x27;chiropractic&#x27;, etc.", 
"type":"object","properties" : {"MedicineSystem" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('recognizingAuthority', {
  "name" : "recognizingAuthority", 
  "displayName" : "Recognizing Authority", 
  "description" : "If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('relevantSpecialty', {
  "name" : "relevantSpecialty", 
  "displayName" : "Relevant Specialty", 
  "description" : "If applicable, a medical specialty in which this entity is relevant.", 
"type":"object","properties" : {"MedicalSpecialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('study', {
  "name" : "study", 
  "displayName" : "Study", 
  "description" : "A medical study or trial related to this entity.", 
"type":"object","properties" : {"MedicalStudy" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.DrugCost = DrugCost;


DrugCost.property('applicableLocation', {
  "name" : "applicableLocation", 
  "displayName" : "Applicable Location", 
  "description" : "The location in which the status applies.", 
"type":"object","properties" : {"AdministrativeArea" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('costCategory', {
  "name" : "costCategory", 
  "displayName" : "Cost Category", 
  "description" : "The category of cost, such as wholesale, retail, reimbursement cap, etc.", 
"type":"object","properties" : {"DrugCostCategory" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DrugCost.property('costCurrency', {
  "name" : "costCurrency", 
  "displayName" : "Cost Currency", 
  "description" : "The currency (in 3-letter ISO 4217 format) of the drug cost.", 
"type":  "string" 
}); 


DrugCost.property('costOrigin', {
  "name" : "costOrigin", 
  "displayName" : "Cost Origin", 
  "description" : "Additional details to capture the origin of the cost data. For example, &#x27;Medicare Part B&#x27;.", 
"type":  "string" 
}); 


DrugCost.property('costPerUnit', {
  "name" : "costPerUnit", 
  "displayName" : "Cost Perunit", 
  "description" : "The cost per unit of the drug.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


DrugCost.property('drugUnit', {
  "name" : "drugUnit", 
  "displayName" : "Drug Unit", 
  "description" : "The unit in which the drug is measured, e.g. &#x27;5 mg tablet&#x27;.", 
"type":  "string" 
}); 


exports.DrugCost = DrugCost;
