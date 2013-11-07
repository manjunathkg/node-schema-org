/***Generated Resource **/

var resource = require('resource');
var JobPosting = resource.define('JobPosting'); 

JobPosting.schema.description = "A listing that describes a job opening in a certain organization."; 
JobPosting.persist('fs'); 


JobPosting.property('additionalType', {
  "name" : "additionalType", 
  "displayName" : "Additional Type", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


JobPosting.property('description', {
  "name" : "description", 
  "displayName" : "Description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


JobPosting.property('image', {
  "name" : "image", 
  "displayName" : "Image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


JobPosting.property('name', {
  "name" : "name", 
  "displayName" : "Name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


JobPosting.property('sameAs', {
  "name" : "sameAs", 
  "displayName" : "Same as", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


JobPosting.property('url', {
  "name" : "url", 
  "displayName" : "Url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.JobPosting = JobPosting;


JobPosting.property('baseSalary', {
  "name" : "baseSalary", 
  "displayName" : "Base Salary", 
  "description" : "The base salary of the job.", 
"type":  "number" 
}); 


JobPosting.property('benefits', {
  "name" : "benefits", 
  "displayName" : "Benefits", 
  "description" : "Description of benefits associated with the job.", 
"type":  "string" 
}); 


JobPosting.property('datePosted', {
  "name" : "datePosted", 
  "displayName" : "Date Posted", 
  "description" : "Publication date for the job posting.", 
"type":  "date" 
}); 


JobPosting.property('educationRequirements', {
  "name" : "educationRequirements", 
  "displayName" : "Education Requirements", 
  "description" : "Educational background needed for the position.", 
"type":  "string" 
}); 


JobPosting.property('employmentType', {
  "name" : "employmentType", 
  "displayName" : "Employment Type", 
  "description" : "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).", 
"type":  "string" 
}); 


JobPosting.property('experienceRequirements', {
  "name" : "experienceRequirements", 
  "displayName" : "Experience Requirements", 
  "description" : "Description of skills and experience needed for the position.", 
"type":  "string" 
}); 


JobPosting.property('hiringOrganization', {
  "name" : "hiringOrganization", 
  "displayName" : "Hiring Organization", 
  "description" : "Organization offering the job position.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


JobPosting.property('incentives', {
  "name" : "incentives", 
  "displayName" : "Incentives", 
  "description" : "Description of bonus and commission compensation aspects of the job.", 
"type":  "string" 
}); 


JobPosting.property('industry', {
  "name" : "industry", 
  "displayName" : "Industry", 
  "description" : "The industry associated with the job position.", 
"type":  "string" 
}); 


JobPosting.property('jobLocation', {
  "name" : "jobLocation", 
  "displayName" : "Job Location", 
  "description" : "A (typically single) geographic location associated with the job position.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" }}}} 
}); 


JobPosting.property('occupationalCategory', {
  "name" : "occupationalCategory", 
  "displayName" : "Occupational Category", 
  "description" : "Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.", 
"type":  "string" 
}); 


JobPosting.property('qualifications', {
  "name" : "qualifications", 
  "displayName" : "Qualifications", 
  "description" : "Specific qualifications required for this role.", 
"type":  "string" 
}); 


JobPosting.property('responsibilities', {
  "name" : "responsibilities", 
  "displayName" : "Responsibilities", 
  "description" : "Responsibilities associated with this role.", 
"type":  "string" 
}); 


JobPosting.property('salaryCurrency', {
  "name" : "salaryCurrency", 
  "displayName" : "Salary Currency", 
  "description" : "The currency (coded using ISO 4217, http://en.wikipedia.org/wiki/ISO_4217 used for the main salary information in this job posting.", 
"type":  "string" 
}); 


JobPosting.property('skills', {
  "name" : "skills", 
  "displayName" : "Skills", 
  "description" : "Skills required to fulfill this role.", 
"type":  "string" 
}); 


JobPosting.property('specialCommitments', {
  "name" : "specialCommitments", 
  "displayName" : "Special Commitments", 
  "description" : "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.", 
"type":  "string" 
}); 


JobPosting.property('title', {
  "name" : "title", 
  "displayName" : "Title", 
  "description" : "The title of the job.", 
"type":  "string" 
}); 


JobPosting.property('workHours', {
  "name" : "workHours", 
  "displayName" : "Work Hours", 
  "description" : "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).", 
"type":  "string" 
}); 


exports.JobPosting = JobPosting;
