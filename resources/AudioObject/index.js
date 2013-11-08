/***Generated Resource **/

var resource = require('resource');
var AudioObject = resource.define('AudioObject'); 

AudioObject.schema.description = "An audio file."; 
AudioObject.persist('fs'); 


AudioObject.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AudioObject.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AudioObject.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AudioObject.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AudioObject.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AudioObject.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AudioObject = AudioObject;


AudioObject.property('about', {
  "name" : "about", 
  "displayName" : "About", 
  "description" : "The subject matter of the content.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('accountablePerson', {
  "name" : "accountablePerson", 
  "displayName" : "Accountable Person", 
  "description" : "Specifies the Person that is legally accountable for the CreativeWork.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('aggregateRating', {
  "name" : "aggregateRating", 
  "displayName" : "Aggregate Rating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
"type":"object","properties" : {"AggregateRating" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('alternativeHeadline', {
  "name" : "alternativeHeadline", 
  "displayName" : "Alternative Headline", 
  "description" : "A secondary title of the CreativeWork.", 
"type":  "string" 
}); 


AudioObject.property('associatedMedia', {
  "name" : "associatedMedia", 
  "displayName" : "Associated Media", 
  "description" : "The media objects that encode this creative work. This property is a synonym for encodings.", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('audience', {
  "name" : "audience", 
  "displayName" : "Audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
"type":"object","properties" : {"Audience" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('audio', {
  "name" : "audio", 
  "displayName" : "Audio", 
  "description" : "An embedded audio object.", 
"type":"object","properties" : {"AudioObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('author', {
  "name" : "author", 
  "displayName" : "Author", 
  "description" : "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('award', {
  "name" : "award", 
  "displayName" : "Award", 
  "description" : "An award won by this person or for this creative work.", 
"type":  "string" 
}); 


AudioObject.property('awards', {
  "name" : "awards", 
  "displayName" : "Awards", 
  "description" : "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
"type":  "string" 
}); 


AudioObject.property('citation', {
  "name" : "citation", 
  "displayName" : "Citation", 
  "description" : "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. NOTE: Candidate for promotion to ScholarlyArticle.", 
"type":"object","properties" : {"CreativeWork" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('comment', {
  "name" : "comment", 
  "displayName" : "Comment", 
  "description" : "Comments, typically from users, on this CreativeWork.", 
"type":"object","properties" : {"UserComments" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('contentLocation', {
  "name" : "contentLocation", 
  "displayName" : "Content Location", 
  "description" : "The location of the content.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('contentRating', {
  "name" : "contentRating", 
  "displayName" : "Content Rating", 
  "description" : "Official rating of a piece of content—for example,&#x27;MPAA PG-13&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('contributor', {
  "name" : "contributor", 
  "displayName" : "Contributor", 
  "description" : "A secondary contributor to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('copyrightHolder', {
  "name" : "copyrightHolder", 
  "displayName" : "Copyright Holder", 
  "description" : "The party holding the legal copyright to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('copyrightYear', {
  "name" : "copyrightYear", 
  "displayName" : "Copyright Year", 
  "description" : "The year during which the claimed copyright for the CreativeWork was first asserted.", 
"type":  "number" 
}); 


AudioObject.property('creator', {
  "name" : "creator", 
  "displayName" : "Creator", 
  "description" : "The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('dateCreated', {
  "name" : "dateCreated", 
  "displayName" : "Date Created", 
  "description" : "The date on which the CreativeWork was created.", 
"type":  "date" 
}); 


AudioObject.property('dateModified', {
  "name" : "dateModified", 
  "displayName" : "Date Modified", 
  "description" : "The date on which the CreativeWork was most recently modified.", 
"type":  "date" 
}); 


AudioObject.property('datePublished', {
  "name" : "datePublished", 
  "displayName" : "Date Published", 
  "description" : "Date of first broadcast/publication.", 
"type":  "date" 
}); 


AudioObject.property('discussionUrl', {
  "name" : "discussionUrl", 
  "displayName" : "Discussion Url", 
  "description" : "A link to the page containing the comments of the CreativeWork.", 
"type":  "string" 
}); 


AudioObject.property('editor', {
  "name" : "editor", 
  "displayName" : "Editor", 
  "description" : "Specifies the Person who edited the CreativeWork.", 
"type":"object","properties" : {"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('educationalAlignment', {
  "name" : "educationalAlignment", 
  "displayName" : "Educational Alignment", 
  "description" : "An alignment to an established educational framework.", 
"type":"object","properties" : {"AlignmentObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('educationalUse', {
  "name" : "educationalUse", 
  "displayName" : "Educational Use", 
  "description" : "The purpose of a work in the context of education; for example, &#x27;assignment&#x27;, &#x27;group work&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('encoding', {
  "name" : "encoding", 
  "displayName" : "Encoding", 
  "description" : "A media object that encode this CreativeWork.", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('encodings', {
  "name" : "encodings", 
  "displayName" : "Encodings", 
  "description" : "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
"type":"object","properties" : {"MediaObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('genre', {
  "name" : "genre", 
  "displayName" : "Genre", 
  "description" : "Genre of the creative work", 
"type":  "string" 
}); 


AudioObject.property('headline', {
  "name" : "headline", 
  "displayName" : "Headline", 
  "description" : "Headline of the article", 
"type":  "string" 
}); 


AudioObject.property('inLanguage', {
  "name" : "inLanguage", 
  "displayName" : "In Language", 
  "description" : "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
"type":  "string" 
}); 


AudioObject.property('interactionCount', {
  "name" : "interactionCount", 
  "displayName" : "Interaction Count", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


AudioObject.property('interactivityType', {
  "name" : "interactivityType", 
  "displayName" : "Interactivity Type", 
  "description" : "The predominant mode of learning supported by the learning resource. Acceptable values are &#x27;active&#x27;, &#x27;expositive&#x27;, or &#x27;mixed&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('isBasedOnUrl', {
  "name" : "isBasedOnUrl", 
  "displayName" : "Is Basedonurl", 
  "description" : "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html", 
"type":  "string" 
}); 


AudioObject.property('isFamilyFriendly', {
  "name" : "isFamilyFriendly", 
  "displayName" : "Is Familyfriendly", 
  "description" : "Indicates whether this content is family friendly.", 
"type":  "boolean" 
}); 


AudioObject.property('keywords', {
  "name" : "keywords", 
  "displayName" : "Keywords", 
  "description" : "The keywords/tags used to describe this content.", 
"type":  "string" 
}); 


AudioObject.property('learningResourceType', {
  "name" : "learningResourceType", 
  "displayName" : "Learning Resourcetype", 
  "description" : "The predominant type or kind characterizing the learning resource. For example, &#x27;presentation&#x27;, &#x27;handout&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('mentions', {
  "name" : "mentions", 
  "displayName" : "Mentions", 
  "description" : "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
"type":"object","properties" : {"Thing" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('offers', {
  "name" : "offers", 
  "displayName" : "Offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
"type":"object","properties" : {"Offer" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('provider', {
  "name" : "provider", 
  "displayName" : "Provider", 
  "description" : "Specifies the Person or Organization that distributed the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('publisher', {
  "name" : "publisher", 
  "displayName" : "Publisher", 
  "description" : "The publisher of the creative work.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('publishingPrinciples', {
  "name" : "publishingPrinciples", 
  "displayName" : "Publishing Principles", 
  "description" : "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
"type":  "string" 
}); 


AudioObject.property('review', {
  "name" : "review", 
  "displayName" : "Review", 
  "description" : "A review of the item.", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('reviews', {
  "name" : "reviews", 
  "displayName" : "Reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
"type":"object","properties" : {"Review" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('sourceOrganization', {
  "name" : "sourceOrganization", 
  "displayName" : "Source Organization", 
  "description" : "The Organization on whose behalf the creator was working.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('text', {
  "name" : "text", 
  "displayName" : "Text", 
  "description" : "The textual content of this CreativeWork.", 
"type":  "string" 
}); 


AudioObject.property('thumbnailUrl', {
  "name" : "thumbnailUrl", 
  "displayName" : "Thumbnail Url", 
  "description" : "A thumbnail image relevant to the Thing.", 
"type":  "string" 
}); 


AudioObject.property('timeRequired', {
  "name" : "timeRequired", 
  "displayName" : "Time Required", 
  "description" : "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. &#x27;P30M&#x27;, &#x27;P1H25M&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('typicalAgeRange', {
  "name" : "typicalAgeRange", 
  "displayName" : "Typical Agerange", 
  "description" : "The typical range of ages the content&#x27;s intendedEndUser, for example &#x27;7-9&#x27;, &#x27;11-&#x27;.", 
"type":  "string" 
}); 


AudioObject.property('version', {
  "name" : "version", 
  "displayName" : "Version", 
  "description" : "The version of the CreativeWork embodied by a specified resource.", 
"type":  "number" 
}); 


AudioObject.property('video', {
  "name" : "video", 
  "displayName" : "Video", 
  "description" : "An embedded video object.", 
"type":"object","properties" : {"VideoObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.AudioObject = AudioObject;


AudioObject.property('associatedArticle', {
  "name" : "associatedArticle", 
  "displayName" : "Associated Article", 
  "description" : "A NewsArticle associated with the Media Object.", 
"type":"object","properties" : {"NewsArticle" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('bitrate', {
  "name" : "bitrate", 
  "displayName" : "Bitrate", 
  "description" : "The bitrate of the media object.", 
"type":  "string" 
}); 


AudioObject.property('contentSize', {
  "name" : "contentSize", 
  "displayName" : "Content Size", 
  "description" : "File size in (mega/kilo) bytes.", 
"type":  "string" 
}); 


AudioObject.property('contentUrl', {
  "name" : "contentUrl", 
  "displayName" : "Content Url", 
  "description" : "Actual bytes of the media object, for example the image file or video file. (previous spelling: contentURL)", 
"type":  "string" 
}); 


AudioObject.property('duration', {
  "name" : "duration", 
  "displayName" : "Duration", 
  "description" : "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.", 
"type":  "string" 
}); 


AudioObject.property('embedUrl', {
  "name" : "embedUrl", 
  "displayName" : "Embed Url", 
  "description" : "A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag. (previous spelling: embedURL)", 
"type":  "string" 
}); 


AudioObject.property('encodesCreativeWork', {
  "name" : "encodesCreativeWork", 
  "displayName" : "Encodes Creativework", 
  "description" : "The creative work encoded by this media object", 
"type":"object","properties" : {"CreativeWork" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('encodingFormat', {
  "name" : "encodingFormat", 
  "displayName" : "Encoding Format", 
  "description" : "mp3, mpeg4, etc.", 
"type":  "string" 
}); 


AudioObject.property('expires', {
  "name" : "expires", 
  "displayName" : "Expires", 
  "description" : "Date the content expires and is no longer useful or available. Useful for videos.", 
"type":  "date" 
}); 


AudioObject.property('height', {
  "name" : "height", 
  "displayName" : "Height", 
  "description" : "The height of the item.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('playerType', {
  "name" : "playerType", 
  "displayName" : "Player Type", 
  "description" : "Player type required—for example, Flash or Silverlight.", 
"type":  "string" 
}); 


AudioObject.property('regionsAllowed', {
  "name" : "regionsAllowed", 
  "displayName" : "Regions Allowed", 
  "description" : "The regions where the media is allowed. If not specified, then it&#x27;s assumed to be allowed everywhere. Specify the countries in ISO 3166 format.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


AudioObject.property('requiresSubscription', {
  "name" : "requiresSubscription", 
  "displayName" : "Requires Subscription", 
  "description" : "Indicates if use of the media require a subscription  (either paid or free). Allowed values are true or false (note that an earlier version had &#x27;yes&#x27;, &#x27;no&#x27;).", 
"type":  "boolean" 
}); 


AudioObject.property('uploadDate', {
  "name" : "uploadDate", 
  "displayName" : "Upload Date", 
  "description" : "Date when this media object was uploaded to this site.", 
"type":  "date" 
}); 


AudioObject.property('width', {
  "name" : "width", 
  "displayName" : "Width", 
  "description" : "The width of the item.", 
"type":"object","properties" : {"Distance" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}},"QuantitativeValue" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


exports.AudioObject = AudioObject;


AudioObject.property('transcript', {
  "name" : "transcript", 
  "displayName" : "Transcript", 
  "description" : "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", 
"type":  "string" 
}); 


exports.AudioObject = AudioObject;