/***Generated Resource **/

var resource = require('resource');
var ItemPage = resource.define('ItemPage'); 

ItemPage.schema.description = "A page devoted to a single item, such as a particular product or hotel."; 
ItemPage.persist('fs'); 


ItemPage.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


ItemPage.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


ItemPage.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


ItemPage.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


ItemPage.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


ItemPage.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.ItemPage = ItemPage;


ItemPage.property('about', {
  "name" : "about", 
  "displayName" : "About", 
  "description" : "The subject matter of the content.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('accountablePerson', {
  "name" : "accountablePerson", 
  "displayName" : "Accountable Person", 
  "description" : "Specifies the Person that is legally accountable for the CreativeWork.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('alternativeHeadline', {
  "name" : "alternativeHeadline", 
  "displayName" : "Alternative Headline", 
  "description" : "A secondary title of the CreativeWork.", 
"type":  "string" 
}); 


ItemPage.property('associatedMedia', {
  "name" : "associatedMedia", 
  "displayName" : "Associated Media", 
  "description" : "The media objects that encode this creative work. This property is a synonym for encodings.", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('audience', {
  "name" : "audience", 
  "displayName" : "Audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
"type":"object","properties" : {"Audience" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('audio', {
  "name" : "audio", 
  "displayName" : "Audio", 
  "description" : "An embedded audio object.", 
"type":"object","properties" : {"AudioObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('author', {
  "name" : "author", 
  "displayName" : "Author", 
  "description" : "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('award', {
  "name" : "award", 
  "displayName" : "Award", 
  "description" : "An award won by this person or for this creative work.", 
"type":  "string" 
}); 


ItemPage.property('awards', {
  "name" : "awards", 
  "displayName" : "Awards", 
  "description" : "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
"type":  "string" 
}); 


ItemPage.property('citation', {
  "name" : "citation", 
  "displayName" : "Citation", 
  "description" : "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. NOTE: Candidate for promotion to ScholarlyArticle.", 
"type":"object","properties" : {"CreativeWork" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('comment', {
  "name" : "comment", 
  "displayName" : "Comment", 
  "description" : "Comments, typically from users, on this CreativeWork.", 
"type":"object","properties" : {"UserComments" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('contentLocation', {
  "name" : "contentLocation", 
  "displayName" : "Content Location", 
  "description" : "The location of the content.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('contentRating', {
  "name" : "contentRating", 
  "displayName" : "Content Rating", 
  "description" : "Official rating of a piece of content—for example,&#x27;MPAA PG-13&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('contributor', {
  "name" : "contributor", 
  "displayName" : "Contributor", 
  "description" : "A secondary contributor to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('copyrightHolder', {
  "name" : "copyrightHolder", 
  "displayName" : "Copyright Holder", 
  "description" : "The party holding the legal copyright to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('copyrightYear', {
  "name" : "copyrightYear", 
  "displayName" : "Copyright Year", 
  "description" : "The year during which the claimed copyright for the CreativeWork was first asserted.", 
"type":  "number" 
}); 


ItemPage.property('creator', {
  "name" : "creator", 
  "displayName" : "Creator", 
  "description" : "The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('dateCreated', {
  "name" : "dateCreated", 
  "displayName" : "Date Created", 
  "description" : "The date on which the CreativeWork was created.", 
"type":  "date" 
}); 


ItemPage.property('dateModified', {
  "name" : "dateModified", 
  "displayName" : "Date Modified", 
  "description" : "The date on which the CreativeWork was most recently modified.", 
"type":  "date" 
}); 


ItemPage.property('datePublished', {
  "name" : "datePublished", 
  "displayName" : "Date Published", 
  "description" : "Date of first broadcast/publication.", 
"type":  "date" 
}); 


ItemPage.property('discussionUrl', {
  "name" : "discussionUrl", 
  "displayName" : "Discussion Url", 
  "description" : "A link to the page containing the comments of the CreativeWork.", 
"type":  "string" 
}); 


ItemPage.property('editor', {
  "name" : "editor", 
  "displayName" : "Editor", 
  "description" : "Specifies the Person who edited the CreativeWork.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('educationalAlignment', {
  "name" : "educationalAlignment", 
  "displayName" : "Educational Alignment", 
  "description" : "An alignment to an established educational framework.", 
"type":"object","properties" : {"AlignmentObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('educationalUse', {
  "name" : "educationalUse", 
  "displayName" : "Educational Use", 
  "description" : "The purpose of a work in the context of education; for example, &#x27;assignment&#x27;, &#x27;group work&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('encoding', {
  "name" : "encoding", 
  "displayName" : "Encoding", 
  "description" : "A media object that encode this CreativeWork.", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('encodings', {
  "name" : "encodings", 
  "displayName" : "Encodings", 
  "description" : "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('genre', {
  "name" : "genre", 
  "displayName" : "Genre", 
  "description" : "Genre of the creative work", 
"type":  "string" 
}); 


ItemPage.property('headline', {
  "name" : "headline", 
  "displayName" : "Headline", 
  "description" : "Headline of the article", 
"type":  "string" 
}); 


ItemPage.property('inLanguage', {
  "name" : "inLanguage", 
  "displayName" : "In Language", 
  "description" : "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
"type":  "string" 
}); 


ItemPage.property('interactionCount', {
  "name" : "interactionCount", 
  "displayName" : "Interaction Count", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


ItemPage.property('interactivityType', {
  "name" : "interactivityType", 
  "displayName" : "Interactivity Type", 
  "description" : "The predominant mode of learning supported by the learning resource. Acceptable values are &#x27;active&#x27;, &#x27;expositive&#x27;, or &#x27;mixed&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('isBasedOnUrl', {
  "name" : "isBasedOnUrl", 
  "displayName" : "Is Basedonurl", 
  "description" : "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html", 
"type":  "string" 
}); 


ItemPage.property('isFamilyFriendly', {
  "name" : "isFamilyFriendly", 
  "displayName" : "Is Familyfriendly", 
  "description" : "Indicates whether this content is family friendly.", 
"type":  "boolean" 
}); 


ItemPage.property('keywords', {
  "name" : "keywords", 
  "displayName" : "Keywords", 
  "description" : "The keywords/tags used to describe this content.", 
"type":  "string" 
}); 


ItemPage.property('learningResourceType', {
  "name" : "learningResourceType", 
  "displayName" : "Learning Resourcetype", 
  "description" : "The predominant type or kind characterizing the learning resource. For example, &#x27;presentation&#x27;, &#x27;handout&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('mentions', {
  "name" : "mentions", 
  "displayName" : "Mentions", 
  "description" : "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('offers', {
  "name" : "offers", 
  "displayName" : "Offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('provider', {
  "name" : "provider", 
  "displayName" : "Provider", 
  "description" : "Specifies the Person or Organization that distributed the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('publisher', {
  "name" : "publisher", 
  "displayName" : "Publisher", 
  "description" : "The publisher of the creative work.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('publishingPrinciples', {
  "name" : "publishingPrinciples", 
  "displayName" : "Publishing Principles", 
  "description" : "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
"type":  "string" 
}); 


ItemPage.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('sourceOrganization', {
  "name" : "sourceOrganization", 
  "displayName" : "Source Organization", 
  "description" : "The Organization on whose behalf the creator was working.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('text', {
  "name" : "text", 
  "displayName" : "Text", 
  "description" : "The textual content of this CreativeWork.", 
"type":  "string" 
}); 


ItemPage.property('thumbnailUrl', {
  "name" : "thumbnailUrl", 
  "displayName" : "Thumbnail Url", 
  "description" : "A thumbnail image relevant to the Thing.", 
"type":  "string" 
}); 


ItemPage.property('timeRequired', {
  "name" : "timeRequired", 
  "displayName" : "Time Required", 
  "description" : "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. &#x27;P30M&#x27;, &#x27;P1H25M&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('typicalAgeRange', {
  "name" : "typicalAgeRange", 
  "displayName" : "Typical Agerange", 
  "description" : "The typical range of ages the content&#x27;s intendedEndUser, for example &#x27;7-9&#x27;, &#x27;11-&#x27;.", 
"type":  "string" 
}); 


ItemPage.property('version', {
  "name" : "version", 
  "displayName" : "Version", 
  "description" : "The version of the CreativeWork embodied by a specified resource.", 
"type":  "number" 
}); 


ItemPage.property('video', {
  "name" : "video", 
  "displayName" : "Video", 
  "description" : "An embedded video object.", 
"type":"object","properties" : {"VideoObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ItemPage = ItemPage;


ItemPage.property('breadcrumb', {
  "name" : "breadcrumb", 
  "displayName" : "Breadcrumb", 
  "description" : "A set of links that can help a user understand and navigate a website hierarchy.", 
"type":  "string" 
}); 


ItemPage.property('isPartOf', {
  "name" : "isPartOf", 
  "displayName" : "Is Partof", 
  "description" : "Indicates the collection or gallery to which the item belongs.", 
"type":"object","properties" : {"CollectionPage" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('lastReviewed', {
  "name" : "lastReviewed", 
  "displayName" : "Last Reviewed", 
  "description" : "Date on which the content on this web page was last reviewed for accuracy and/or completeness.", 
"type":  "date" 
}); 


ItemPage.property('mainContentOfPage', {
  "name" : "mainContentOfPage", 
  "displayName" : "Main Contentofpage", 
  "description" : "Indicates if this web page element is the main subject of the page.", 
"type":"object","properties" : {"WebPageElement" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('primaryImageOfPage', {
  "name" : "primaryImageOfPage", 
  "displayName" : "Primary Imageofpage", 
  "description" : "Indicates the main image on the page", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('relatedLink', {
  "name" : "relatedLink", 
  "displayName" : "Related Link", 
  "description" : "A link related to this web page, for example to other related web pages.", 
"type":  "string" 
}); 


ItemPage.property('reviewedBy', {
  "name" : "reviewedBy", 
  "displayName" : "Reviewed by", 
  "description" : "People or organizations that have reviewed the content on this web page for accuracy and/or completeness.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


ItemPage.property('significantLink', {
  "name" : "significantLink", 
  "displayName" : "Significant Link", 
  "description" : "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", 
"type":  "string" 
}); 


ItemPage.property('significantLinks', {
  "name" : "significantLinks", 
  "displayName" : "Significant Links", 
  "description" : "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most (legacy spelling; see singular form, significantLink).", 
"type":  "string" 
}); 


ItemPage.property('specialty', {
  "name" : "specialty", 
  "displayName" : "Specialty", 
  "description" : "One of the domain specialities to which this web page&#x27;s content applies.", 
"type":"object","properties" : {"Specialty" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.ItemPage = ItemPage;