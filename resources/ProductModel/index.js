/***Generated Resource **/

var resource = require('resource');
var ProductModel = resource.define('ProductModel'); 

ProductModel.schema.description = "A datasheet or vendor specification of a product (in the sense of a prototypical description)."; 
ProductModel.persist('fs'); 


ProductModel.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


ProductModel.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


ProductModel.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


ProductModel.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


ProductModel.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


ProductModel.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.ProductModel = ProductModel;


ProductModel.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('audience', {
  "name" : "audience", 
  "displayName" : "Audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
"type":"object","properties" : {"Audience" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('brand', {
  "name" : "brand", 
  "displayName" : "Brand", 
  "description" : "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
"type":"object","properties" : {"Brand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('color', {
  "name" : "color", 
  "displayName" : "Color", 
  "description" : "The color of the product.", 
"type":  "string" 
}); 


ProductModel.property('depth', {
  "name" : "depth", 
  "displayName" : "Depth", 
  "description" : "The depth of the product.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('gtin13', {
  "name" : "gtin13", 
  "displayName" : "Gtin13", 
  "description" : "The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero.", 
"type":  "string" 
}); 


ProductModel.property('gtin14', {
  "name" : "gtin14", 
  "displayName" : "Gtin14", 
  "description" : "The GTIN-14 code of the product, or the product to which the offer refers.", 
"type":  "string" 
}); 


ProductModel.property('gtin8', {
  "name" : "gtin8", 
  "displayName" : "Gtin8", 
  "description" : "The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN.", 
"type":  "string" 
}); 


ProductModel.property('height', {
  "name" : "height", 
  "displayName" : "Height", 
  "description" : "The height of the item.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('isAccessoryOrSparePartFor', {
  "name" : "isAccessoryOrSparePartFor", 
  "displayName" : "Is Accessoryorsparepartfor", 
  "description" : "A pointer to another product (or multiple products) for which this product is an accessory or spare part.", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('isConsumableFor', {
  "name" : "isConsumableFor", 
  "displayName" : "Is Consumablefor", 
  "description" : "A pointer to another product (or multiple products) for which this product is a consumable.", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('isRelatedTo', {
  "name" : "isRelatedTo", 
  "displayName" : "Is Relatedto", 
  "description" : "A pointer to another, somehow related product (or multiple products).", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('isSimilarTo', {
  "name" : "isSimilarTo", 
  "displayName" : "Is Similarto", 
  "description" : "A pointer to another, functionally similar product (or multiple products).", 
"type":"object","properties" : {"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('itemCondition', {
  "name" : "itemCondition", 
  "displayName" : "Item Condition", 
  "description" : "A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.", 
"type":"object","properties" : {"OfferItemCondition" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('logo', {
  "name" : "logo", 
  "displayName" : "Logo", 
  "description" : "URL of an image for the logo of the item.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('manufacturer', {
  "name" : "manufacturer", 
  "displayName" : "Manufacturer", 
  "description" : "The manufacturer of the product.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('model', {
  "name" : "model", 
  "displayName" : "Model", 
  "description" : "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.", 
"type":"object","properties" : {"ProductModel" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('mpn', {
  "name" : "mpn", 
  "displayName" : "Mpn", 
  "description" : "The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.", 
"type":  "string" 
}); 


ProductModel.property('offers', {
  "name" : "offers", 
  "displayName" : "Offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('productID', {
  "name" : "productID", 
  "displayName" : "Product id", 
  "description" : "The product identifier, such as ISBN. For example: .", 
"type":  "string" 
}); 


ProductModel.property('releaseDate', {
  "name" : "releaseDate", 
  "displayName" : "Release Date", 
  "description" : "The release date of a product or product model. This can be used to distinguish the exact variant of a product.", 
"type":  "date" 
}); 


ProductModel.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('sku', {
  "name" : "sku", 
  "displayName" : "Sku", 
  "description" : "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", 
"type":  "string" 
}); 


ProductModel.property('weight', {
  "name" : "weight", 
  "displayName" : "Weight", 
  "description" : "The weight of the product.", 
"type":"object","properties" : {"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('width', {
  "name" : "width", 
  "displayName" : "Width", 
  "description" : "The width of the item.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ProductModel = ProductModel;


ProductModel.property('isVariantOf', {
  "name" : "isVariantOf", 
  "displayName" : "Is Variantof", 
  "description" : "A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.", 
"type":"object","properties" : {"ProductModel" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('predecessorOf', {
  "name" : "predecessorOf", 
  "displayName" : "Predecessor of", 
  "description" : "A pointer from a previous, often discontinued variant of the product to its newer variant.", 
"type":"object","properties" : {"ProductModel" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ProductModel.property('successorOf', {
  "name" : "successorOf", 
  "displayName" : "Successor of", 
  "description" : "A pointer from a newer variant of a product  to its previous, often discontinued predecessor.", 
"type":"object","properties" : {"ProductModel" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ProductModel = ProductModel;
