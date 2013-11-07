/***Generated Resource **/

var resource = require('resource');
var DeliveryChargeSpecification = resource.define('DeliveryChargeSpecification'); 

DeliveryChargeSpecification.schema.description = "The price for the delivery of an offer using a particular delivery method."; 
DeliveryChargeSpecification.persist('fs'); 


DeliveryChargeSpecification.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.DeliveryChargeSpecification = DeliveryChargeSpecification;


DeliveryChargeSpecification.property('eligibleQuantity', {
  "name" : "eligibleQuantity", 
  "displayName" : "Eligible Quantity", 
  "description" : "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DeliveryChargeSpecification.property('eligibleTransactionVolume', {
  "name" : "eligibleTransactionVolume", 
  "displayName" : "Eligible Transactionvolume", 
  "description" : "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", 
"type":"object","properties" : {"PriceSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DeliveryChargeSpecification.property('maxPrice', {
  "name" : "maxPrice", 
  "displayName" : "Max Price", 
  "description" : "The highest price if the price is a range.", 
"type":  "number" 
}); 


DeliveryChargeSpecification.property('minPrice', {
  "name" : "minPrice", 
  "displayName" : "Min Price", 
  "description" : "The lowest price if the price is a range.", 
"type":  "number" 
}); 


DeliveryChargeSpecification.property('price', {
  "name" : "price", 
  "displayName" : "Price", 
  "description" : "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


DeliveryChargeSpecification.property('priceCurrency', {
  "name" : "priceCurrency", 
  "displayName" : "Price Currency", 
  "description" : "The currency (in 3-letter ISO 4217 format) of the offer price or a price component, when attached to PriceSpecification and its subtypes.", 
"type":  "string" 
}); 


DeliveryChargeSpecification.property('validFrom', {
  "name" : "validFrom", 
  "displayName" : "Valid From", 
  "description" : "The beginning of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


DeliveryChargeSpecification.property('validThrough', {
  "name" : "validThrough", 
  "displayName" : "Valid Through", 
  "description" : "The end of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


DeliveryChargeSpecification.property('valueAddedTaxIncluded', {
  "name" : "valueAddedTaxIncluded", 
  "displayName" : "Value Addedtaxincluded", 
  "description" : "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", 
"type":  "boolean" 
}); 


exports.DeliveryChargeSpecification = DeliveryChargeSpecification;


DeliveryChargeSpecification.property('appliesToDeliveryMethod', {
  "name" : "appliesToDeliveryMethod", 
  "displayName" : "Applies Todeliverymethod", 
  "description" : "The delivery method(s) to which the delivery charge or payment charge specification applies.", 
"type":"object","properties" : {"DeliveryMethod" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


DeliveryChargeSpecification.property('eligibleRegion', {
  "name" : "eligibleRegion", 
  "displayName" : "Eligible Region", 
  "description" : "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.", 
"type":"object","properties" : {"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.DeliveryChargeSpecification = DeliveryChargeSpecification;
