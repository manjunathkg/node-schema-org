/***Generated Resource **/

var resource = require('resource');
var Motel = resource.define('Motel'); 

Motel.schema.description = "A motel."; 
Motel.persist('fs'); 


Motel.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Motel.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Motel.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Motel.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Motel.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Motel.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Motel = Motel;


Motel.property('address', {
  "name" : "address", 
  "displayName" : "Address", 
  "description" : "Physical address of the item.", 
"type":"object","properties" : {"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('containedIn', {
  "name" : "containedIn", 
  "displayName" : "Contained in", 
  "description" : "The basic containment relation between places.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('event', {
  "name" : "event", 
  "displayName" : "Event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('events', {
  "name" : "events", 
  "displayName" : "Events", 
  "description" : "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
"type":"object","properties" : {"Event" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('faxNumber', {
  "name" : "faxNumber", 
  "displayName" : "Fax Number", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


Motel.property('geo', {
  "name" : "geo", 
  "displayName" : "Geo", 
  "description" : "The geo coordinates of the place.", 
"type":"object","properties" : {"GeoCoordinates" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('globalLocationNumber', {
  "name" : "globalLocationNumber", 
  "displayName" : "Global Locationnumber", 
  "description" : "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
"type":  "string" 
}); 


Motel.property('interactionCount', {
  "name" : "interactionCount", 
  "displayName" : "Interaction Count", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


Motel.property('isicV4', {
  "name" : "isicV4", 
  "displayName" : "Isic v4", 
  "description" : "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
"type":  "string" 
}); 


Motel.property('logo', {
  "name" : "logo", 
  "displayName" : "Logo", 
  "description" : "URL of an image for the logo of the item.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('map', {
  "name" : "map", 
  "displayName" : "Map", 
  "description" : "A URL to a map of the place.", 
"type":  "string" 
}); 


Motel.property('maps', {
  "name" : "maps", 
  "displayName" : "Maps", 
  "description" : "A URL to a map of the place (legacy spelling; see singular form, map).", 
"type":  "string" 
}); 


Motel.property('openingHoursSpecification', {
  "name" : "openingHoursSpecification", 
  "displayName" : "Opening Hoursspecification", 
  "description" : "The opening hours of a certain place.", 
"type":"object","properties" : {"OpeningHoursSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('photo', {
  "name" : "photo", 
  "displayName" : "Photo", 
  "description" : "A photograph of this place.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('photos', {
  "name" : "photos", 
  "displayName" : "Photos", 
  "description" : "Photographs of this place (legacy spelling; see singular form, photo).", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('telephone', {
  "name" : "telephone", 
  "displayName" : "Telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


exports.Motel = Motel;


Motel.property('brand', {
  "name" : "brand", 
  "displayName" : "Brand", 
  "description" : "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
"type":"object","properties" : {"Brand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('contactPoint', {
  "name" : "contactPoint", 
  "displayName" : "Contact Point", 
  "description" : "A contact point for a person or organization.", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('contactPoints', {
  "name" : "contactPoints", 
  "displayName" : "Contact Points", 
  "description" : "A contact point for a person or organization (legacy spelling; see singular form, contactPoint).", 
"type":"object","properties" : {"ContactPoint" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('duns', {
  "name" : "duns", 
  "displayName" : "Duns", 
  "description" : "The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.", 
"type":  "string" 
}); 


Motel.property('email', {
  "name" : "email", 
  "displayName" : "Email", 
  "description" : "Email address.", 
"type":  "string" 
}); 


Motel.property('employee', {
  "name" : "employee", 
  "displayName" : "Employee", 
  "description" : "Someone working for this organization.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('employees', {
  "name" : "employees", 
  "displayName" : "Employees", 
  "description" : "People working for this organization. (legacy spelling; see singular form, employee)", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('founder', {
  "name" : "founder", 
  "displayName" : "Founder", 
  "description" : "A person who founded this organization.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('founders', {
  "name" : "founders", 
  "displayName" : "Founders", 
  "description" : "A person who founded this organization (legacy spelling; see singular form, founder).", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('foundingDate', {
  "name" : "foundingDate", 
  "displayName" : "Founding Date", 
  "description" : "The date that this organization was founded.", 
"type":  "date" 
}); 


Motel.property('hasPOS', {
  "name" : "hasPOS", 
  "displayName" : "Has Pos", 
  "description" : "Points-of-Sales operated by the organization or person.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('legalName', {
  "name" : "legalName", 
  "displayName" : "Legal Name", 
  "description" : "The official name of the organization, e.g. the registered company name.", 
"type":  "string" 
}); 


Motel.property('location', {
  "name" : "location", 
  "displayName" : "Location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('makesOffer', {
  "name" : "makesOffer", 
  "displayName" : "Makes Offer", 
  "description" : "A pointer to products or services offered by the organization or person.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('member', {
  "name" : "member", 
  "displayName" : "Member", 
  "description" : "A member of this organization.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('members', {
  "name" : "members", 
  "displayName" : "Members", 
  "description" : "A member of this organization (legacy spelling; see singular form, member).", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('naics', {
  "name" : "naics", 
  "displayName" : "Naics", 
  "description" : "The North American Industry Classification System (NAICS) code for a particular organization or business person.", 
"type":  "string" 
}); 


Motel.property('owns', {
  "name" : "owns", 
  "displayName" : "Owns", 
  "description" : "Products owned by the organization or person.", 
"type":"object","properties" : {"OwnershipInfo" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('seeks', {
  "name" : "seeks", 
  "displayName" : "Seeks", 
  "description" : "A pointer to products or services sought by the organization or person (demand).", 
"type":"object","properties" : {"Demand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('taxID', {
  "name" : "taxID", 
  "displayName" : "Tax id", 
  "description" : "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", 
"type":  "string" 
}); 


Motel.property('vatID', {
  "name" : "vatID", 
  "displayName" : "Vat id", 
  "description" : "The Value-added Tax ID of the organisation or person.", 
"type":  "string" 
}); 


exports.Motel = Motel;


Motel.property('branchOf', {
  "name" : "branchOf", 
  "displayName" : "Branch of", 
  "description" : "The larger organization that this local business is a branch of, if any.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


Motel.property('currenciesAccepted', {
  "name" : "currenciesAccepted", 
  "displayName" : "Currencies Accepted", 
  "description" : "The currency accepted (in ISO 4217 currency format).", 
"type":  "string" 
}); 


Motel.property('openingHours', {
  "name" : "openingHours", 
  "displayName" : "Opening Hours", 
  "description" : "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas &#x27;,&#x27; separating each day. Day or time ranges are specified using a hyphen &#x27;-&#x27;.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: Tuesdays and Thursdays 4-8pm. - If a business is open 7 days a week, then it can be specified as Monday through Sunday, all day.", 
"type":  "string" 
}); 


Motel.property('paymentAccepted', {
  "name" : "paymentAccepted", 
  "displayName" : "Payment Accepted", 
  "description" : "Cash, credit card, etc.", 
"type":  "string" 
}); 


Motel.property('priceRange', {
  "name" : "priceRange", 
  "displayName" : "Price Range", 
  "description" : "The price range of the business, for example $$$.", 
"type":  "string" 
}); 


exports.Motel = Motel;
