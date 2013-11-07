/***Generated Resource **/

var resource = require('resource');
var AggregateOffer = resource.define('AggregateOffer'); 

AggregateOffer.schema.description = "When a single product that has different offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used."; 
AggregateOffer.persist('fs'); 


AggregateOffer.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AggregateOffer.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AggregateOffer.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AggregateOffer.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AggregateOffer.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AggregateOffer.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AggregateOffer = AggregateOffer;


AggregateOffer.property('acceptedPaymentMethod', {
  "name" : "acceptedPaymentMethod", 
  "displayName" : "Accepted Paymentmethod", 
  "description" : "The payment method(s) accepted by seller for this offer.", 
"type":"object","properties" : {"PaymentMethod" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('addOn', {
  "name" : "addOn", 
  "displayName" : "Add on", 
  "description" : "An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('advanceBookingRequirement', {
  "name" : "advanceBookingRequirement", 
  "displayName" : "Advance Bookingrequirement", 
  "description" : "The amount of time that is required between accepting the offer and the actual usage of the resource or service.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('availability', {
  "name" : "availability", 
  "displayName" : "Availability", 
  "description" : "The availability of this item—for example In stock, Out of stock, Pre-order, etc.", 
"type":"object","properties" : {"ItemAvailability" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('availabilityEnds', {
  "name" : "availabilityEnds", 
  "displayName" : "Availability Ends", 
  "description" : "The end of the availability of the product or service included in the offer.", 
"type":  "date" 
}); 


AggregateOffer.property('availabilityStarts', {
  "name" : "availabilityStarts", 
  "displayName" : "Availability Starts", 
  "description" : "The beginning of the availability of the product or service included in the offer.", 
"type":  "date" 
}); 


AggregateOffer.property('availableAtOrFrom', {
  "name" : "availableAtOrFrom", 
  "displayName" : "Available Atorfrom", 
  "description" : "The place(s) from which the offer can be obtained (e.g. store locations).", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('availableDeliveryMethod', {
  "name" : "availableDeliveryMethod", 
  "displayName" : "Available Deliverymethod", 
  "description" : "The delivery method(s) available for this offer.", 
"type":"object","properties" : {"DeliveryMethod" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('businessFunction', {
  "name" : "businessFunction", 
  "displayName" : "Business Function", 
  "description" : "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.", 
"type":"object","properties" : {"BusinessFunction" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('category', {
  "name" : "category", 
  "displayName" : "Category", 
  "description" : "A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.", 
"type":"object","properties" : {"PhysicalActivityCategory" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('deliveryLeadTime', {
  "name" : "deliveryLeadTime", 
  "displayName" : "Delivery Leadtime", 
  "description" : "The typical delay between the receipt of the order and the goods leaving the warehouse.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('eligibleCustomerType', {
  "name" : "eligibleCustomerType", 
  "displayName" : "Eligible Customertype", 
  "description" : "The type(s) of customers for which the given offer is valid.", 
"type":"object","properties" : {"BusinessEntityType" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('eligibleDuration', {
  "name" : "eligibleDuration", 
  "displayName" : "Eligible Duration", 
  "description" : "The duration for which the given offer is valid.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('eligibleQuantity', {
  "name" : "eligibleQuantity", 
  "displayName" : "Eligible Quantity", 
  "description" : "The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('eligibleRegion', {
  "name" : "eligibleRegion", 
  "displayName" : "Eligible Region", 
  "description" : "The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.", 
"type":"object","properties" : {"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('eligibleTransactionVolume', {
  "name" : "eligibleTransactionVolume", 
  "displayName" : "Eligible Transactionvolume", 
  "description" : "The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.", 
"type":"object","properties" : {"PriceSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('gtin13', {
  "name" : "gtin13", 
  "displayName" : "Gtin13", 
  "description" : "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero.", 
"type":  "string" 
}); 


AggregateOffer.property('gtin14', {
  "name" : "gtin14", 
  "displayName" : "Gtin14", 
  "description" : "The GTIN-14 code of the product, or the product to which the offer refers.", 
"type":  "string" 
}); 


AggregateOffer.property('gtin8', {
  "name" : "gtin8", 
  "displayName" : "Gtin8", 
  "description" : "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN.", 
"type":  "string" 
}); 


AggregateOffer.property('includesObject', {
  "name" : "includesObject", 
  "displayName" : "Includes Object", 
  "description" : "This links to a node or nodes indicating the exact quantity of the products included in the offer.", 
"type":"object","properties" : {"TypeAndQuantityNode" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('inventoryLevel', {
  "name" : "inventoryLevel", 
  "displayName" : "Inventory Level", 
  "description" : "The current approximate inventory level for the item or items.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('itemCondition', {
  "name" : "itemCondition", 
  "displayName" : "Item Condition", 
  "description" : "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.", 
"type":"object","properties" : {"OfferItemCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('itemOffered', {
  "name" : "itemOffered", 
  "displayName" : "Item Offered", 
  "description" : "The item being sold.", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('mpn', {
  "name" : "mpn", 
  "displayName" : "Mpn", 
  "description" : "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", 
"type":  "string" 
}); 


AggregateOffer.property('price', {
  "name" : "price", 
  "displayName" : "Price", 
  "description" : "The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


AggregateOffer.property('priceCurrency', {
  "name" : "priceCurrency", 
  "displayName" : "Price Currency", 
  "description" : "The currency (in 3-letter ISO 4217 format) of the offer price or a price component, when attached to PriceSpecification and its subtypes.", 
"type":  "string" 
}); 


AggregateOffer.property('priceSpecification', {
  "name" : "priceSpecification", 
  "displayName" : "Price Specification", 
  "description" : "One or more detailed price specifications, indicating the unit price and delivery or payment charges.", 
"type":"object","properties" : {"PriceSpecification" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('priceValidUntil', {
  "name" : "priceValidUntil", 
  "displayName" : "Price Validuntil", 
  "description" : "The date after which the price is no longer available.", 
"type":  "date" 
}); 


AggregateOffer.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('seller', {
  "name" : "seller", 
  "displayName" : "Seller", 
  "description" : "The seller.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AggregateOffer.property('serialNumber', {
  "name" : "serialNumber", 
  "displayName" : "Serial Number", 
  "description" : "The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.", 
"type":  "string" 
}); 


AggregateOffer.property('sku', {
  "name" : "sku", 
  "displayName" : "Sku", 
  "description" : "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", 
"type":  "string" 
}); 


AggregateOffer.property('validFrom', {
  "name" : "validFrom", 
  "displayName" : "Valid From", 
  "description" : "The beginning of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


AggregateOffer.property('validThrough', {
  "name" : "validThrough", 
  "displayName" : "Valid Through", 
  "description" : "The end of the validity of offer, price specification, or opening hours data.", 
"type":  "date" 
}); 


AggregateOffer.property('warranty', {
  "name" : "warranty", 
  "displayName" : "Warranty", 
  "description" : "The warranty promise(s) included in the offer.", 
"type":"object","properties" : {"WarrantyPromise" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.AggregateOffer = AggregateOffer;


AggregateOffer.property('highPrice', {
  "name" : "highPrice", 
  "displayName" : "High Price", 
  "description" : "The highest price of all offers available.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


AggregateOffer.property('lowPrice', {
  "name" : "lowPrice", 
  "displayName" : "Low Price", 
  "description" : "The lowest price of all offers available.", 
 "type":"object", "properties" : { "id":{"type" : "array"}} 
}); 


AggregateOffer.property('offerCount', {
  "name" : "offerCount", 
  "displayName" : "Offer Count", 
  "description" : "The number of offers for the product.", 
"type":  "number" 
}); 


exports.AggregateOffer = AggregateOffer;
