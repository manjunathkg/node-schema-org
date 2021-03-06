/***Generated Resource **/

var resource = require('resource');
var PaymentChargeSpecification = resource.define('PaymentChargeSpecification'); 

PaymentChargeSpecification.schema.description = "The costs of settling the payment using a particular payment method."; 
PaymentChargeSpecification.persist('fs'); 


PaymentChargeSpecification.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.PaymentChargeSpecification = PaymentChargeSpecification;


PaymentChargeSpecification.property('eligibleQuantity', {
  "name" : "eligibleQuantity", 
  "displayName" : "Eligible Quantity", 
  "description" : "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PaymentChargeSpecification.property('eligibleTransactionVolume', {
  "name" : "eligibleTransactionVolume", 
  "displayName" : "Eligible Transactionvolume", 
  "description" : "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", 
"type":"object","properties" : {"PriceSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PaymentChargeSpecification.property('maxPrice', {
  "name" : "maxPrice", 
  "displayName" : "Max Price", 
  "description" : "The highest price if the price is a range.", 
"type":  "number" 
}); 


PaymentChargeSpecification.property('minPrice', {
  "name" : "minPrice", 
  "displayName" : "Min Price", 
  "description" : "The lowest price if the price is a range.", 
"type":  "number" 
}); 


PaymentChargeSpecification.property('price', {
  "name" : "price", 
  "displayName" : "Price", 
  "description" : "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


PaymentChargeSpecification.property('priceCurrency', {
  "name" : "priceCurrency", 
  "displayName" : "Price Currency", 
  "description" : "The currency (in 3-letter ISO 4217 format) of the offer price or a price component, when attached to PriceSpecification and its subtypes.", 
"type":  "string" 
}); 


PaymentChargeSpecification.property('validFrom', {
  "name" : "validFrom", 
  "displayName" : "Valid From", 
  "description" : "The beginning of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


PaymentChargeSpecification.property('validThrough', {
  "name" : "validThrough", 
  "displayName" : "Valid Through", 
  "description" : "The end of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


PaymentChargeSpecification.property('valueAddedTaxIncluded', {
  "name" : "valueAddedTaxIncluded", 
  "displayName" : "Value Addedtaxincluded", 
  "description" : "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", 
"type":  "boolean" 
}); 


exports.PaymentChargeSpecification = PaymentChargeSpecification;


PaymentChargeSpecification.property('appliesToDeliveryMethod', {
  "name" : "appliesToDeliveryMethod", 
  "displayName" : "Applies Todeliverymethod", 
  "description" : "The delivery method(s) to which the delivery charge or payment charge specification applies.", 
"type":"object","properties" : {"DeliveryMethod" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


PaymentChargeSpecification.property('appliesToPaymentMethod', {
  "name" : "appliesToPaymentMethod", 
  "displayName" : "Applies Topaymentmethod", 
  "description" : "The payment method(s) to which the payment charge specification applies.", 
"type":"object","properties" : {"PaymentMethod" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.PaymentChargeSpecification = PaymentChargeSpecification;
