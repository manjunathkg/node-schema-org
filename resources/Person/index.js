/***Generated Resource **/

var resource = require('resource');
var Person = resource.define('Person'); 

Person.schema.description = "A person (alive, dead, undead, or fictional)."; 
Person.persist('fs'); 


Person.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Person.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Person.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Person.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Person.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Person.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Person = Person;


Person.property('additionalName', {
  "name" : "additionalName", 
  "displayName" : "Additional Name", 
  "description" : "An additional name for a Person, can be used for a middle name.", 
"type":  "string" 
}); 


Person.property('address', {
  "name" : "address", 
  "displayName" : "Address", 
  "description" : "Physical address of the item.", 
"type":"object","properties" : {"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('affiliation', {
  "name" : "affiliation", 
  "displayName" : "Affiliation", 
  "description" : "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('alumniOf', {
  "name" : "alumniOf", 
  "displayName" : "Alumni of", 
  "description" : "An educational organizations that the person is an alumni of.", 
"type":"object","properties" : {"EducationalOrganization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('award', {
  "name" : "award", 
  "displayName" : "Award", 
  "description" : "An award won by this person or for this creative work.", 
"type":  "string" 
}); 


Person.property('awards', {
  "name" : "awards", 
  "displayName" : "Awards", 
  "description" : "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
"type":  "string" 
}); 


Person.property('birthDate', {
  "name" : "birthDate", 
  "displayName" : "Birth Date", 
  "description" : "Date of birth.", 
"type":  "date" 
}); 


Person.property('brand', {
  "name" : "brand", 
  "displayName" : "Brand", 
  "description" : "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
"type":"object","properties" : {"Brand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('children', {
  "name" : "children", 
  "displayName" : "Children", 
  "description" : "A child of the person.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('colleague', {
  "name" : "colleague", 
  "displayName" : "Colleague", 
  "description" : "A colleague of the person.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('colleagues', {
  "name" : "colleagues", 
  "displayName" : "Colleagues", 
  "description" : "A colleague of the person (legacy spelling; see singular form, colleague).", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('contactPoint', {
  "name" : "contactPoint", 
  "displayName" : "Contact Point", 
  "description" : "A contact point for a person or organization.", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('contactPoints', {
  "name" : "contactPoints", 
  "displayName" : "Contact Points", 
  "description" : "A contact point for a person or organization (legacy spelling; see singular form, contactPoint).", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('deathDate', {
  "name" : "deathDate", 
  "displayName" : "Death Date", 
  "description" : "Date of death.", 
"type":  "date" 
}); 


Person.property('duns', {
  "name" : "duns", 
  "displayName" : "Duns", 
  "description" : "The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.", 
"type":  "string" 
}); 


Person.property('email', {
  "name" : "email", 
  "displayName" : "Email", 
  "description" : "Email address.", 
"type":  "string" 
}); 


Person.property('familyName', {
  "name" : "familyName", 
  "displayName" : "Family Name", 
  "description" : "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the Name property.", 
"type":  "string" 
}); 


Person.property('faxNumber', {
  "name" : "faxNumber", 
  "displayName" : "Fax Number", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


Person.property('follows', {
  "name" : "follows", 
  "displayName" : "Follows", 
  "description" : "The most generic uni-directional social relation.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('gender', {
  "name" : "gender", 
  "displayName" : "Gender", 
  "description" : "Gender of the person.", 
"type":  "string" 
}); 


Person.property('givenName', {
  "name" : "givenName", 
  "displayName" : "Given Name", 
  "description" : "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property.", 
"type":  "string" 
}); 


Person.property('globalLocationNumber', {
  "name" : "globalLocationNumber", 
  "displayName" : "Global Locationnumber", 
  "description" : "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
"type":  "string" 
}); 


Person.property('hasPOS', {
  "name" : "hasPOS", 
  "displayName" : "Has Pos", 
  "description" : "Points-of-Sales operated by the organization or person.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('homeLocation', {
  "name" : "homeLocation", 
  "displayName" : "Home Location", 
  "description" : "A contact location for a person&#x27;s residence.", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('honorificPrefix', {
  "name" : "honorificPrefix", 
  "displayName" : "Honorific Prefix", 
  "description" : "An honorific prefix preceding a Person&#x27;s name such as Dr/Mrs/Mr.", 
"type":  "string" 
}); 


Person.property('honorificSuffix', {
  "name" : "honorificSuffix", 
  "displayName" : "Honorific Suffix", 
  "description" : "An honorific suffix preceding a Person&#x27;s name such as M.D. /PhD/MSCSW.", 
"type":  "string" 
}); 


Person.property('interactionCount', {
  "name" : "interactionCount", 
  "displayName" : "Interaction Count", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


Person.property('isicV4', {
  "name" : "isicV4", 
  "displayName" : "Isic v4", 
  "description" : "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
"type":  "string" 
}); 


Person.property('jobTitle', {
  "name" : "jobTitle", 
  "displayName" : "Job Title", 
  "description" : "The job title of the person (for example, Financial Manager).", 
"type":  "string" 
}); 


Person.property('knows', {
  "name" : "knows", 
  "displayName" : "Knows", 
  "description" : "The most generic bi-directional social/work relation.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('makesOffer', {
  "name" : "makesOffer", 
  "displayName" : "Makes Offer", 
  "description" : "A pointer to products or services offered by the organization or person.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('memberOf', {
  "name" : "memberOf", 
  "displayName" : "Member of", 
  "description" : "An organization to which the person belongs.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('naics', {
  "name" : "naics", 
  "displayName" : "Naics", 
  "description" : "The North American Industry Classification System (NAICS) code for a particular organization or business person.", 
"type":  "string" 
}); 


Person.property('nationality', {
  "name" : "nationality", 
  "displayName" : "Nationality", 
  "description" : "Nationality of the person.", 
"type":"object","properties" : {"Country" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('owns', {
  "name" : "owns", 
  "displayName" : "Owns", 
  "description" : "Products owned by the organization or person.", 
"type":"object","properties" : {"OwnershipInfo" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('parent', {
  "name" : "parent", 
  "displayName" : "Parent", 
  "description" : "A parent of this person.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('parents', {
  "name" : "parents", 
  "displayName" : "Parents", 
  "description" : "A parents of the person (legacy spelling; see singular form, parent).", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('performerIn', {
  "name" : "performerIn", 
  "displayName" : "Performer in", 
  "description" : "Event that this person is a performer or participant in.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('relatedTo', {
  "name" : "relatedTo", 
  "displayName" : "Related to", 
  "description" : "The most generic familial relation.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('seeks', {
  "name" : "seeks", 
  "displayName" : "Seeks", 
  "description" : "A pointer to products or services sought by the organization or person (demand).", 
"type":"object","properties" : {"Demand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('sibling', {
  "name" : "sibling", 
  "displayName" : "Sibling", 
  "description" : "A sibling of the person.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('siblings', {
  "name" : "siblings", 
  "displayName" : "Siblings", 
  "description" : "A sibling of the person (legacy spelling; see singular form, sibling).", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('spouse', {
  "name" : "spouse", 
  "displayName" : "Spouse", 
  "description" : "The person&#x27;s spouse.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('taxID', {
  "name" : "taxID", 
  "displayName" : "Tax id", 
  "description" : "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", 
"type":  "string" 
}); 


Person.property('telephone', {
  "name" : "telephone", 
  "displayName" : "Telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


Person.property('vatID', {
  "name" : "vatID", 
  "displayName" : "Vat id", 
  "description" : "The Value-added Tax ID of the organisation or person.", 
"type":  "string" 
}); 


Person.property('workLocation', {
  "name" : "workLocation", 
  "displayName" : "Work Location", 
  "description" : "A contact location for a person&#x27;s place of work.", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Person.property('worksFor', {
  "name" : "worksFor", 
  "displayName" : "Works For", 
  "description" : "Organizations that the person works for.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.Person = Person;
