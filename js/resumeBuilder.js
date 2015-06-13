
//
// Header
//

var bio = {
  "name" : "Nathan Hadinata",
  "role" : "UX Designer",
  "contacts" : {
    "mobile": "714-729-3989",
    "email": "nathanhadinata@gmail.com",
    "github" : "github.com/nhadinat",
    "twitter" : "@NathanHadinata",
    "location" : "Lake Forest, California"
  },
  "msg" : "Boom boom boom, a lemme hear you say wayo",
  "skills" : ["UX Design","Google Adwords","Adobe Creative Suite"],
  "bioPic" : "images/Nathan-Profile-150x150.jpg"
};
header.display = function () {
  var formattedRole =
    HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
  var formattedName =
    HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
  //Contacts
  var formattedMobile =
    HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
  var formattedEmail =
    HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
  var formattedGithub =
    HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
  var formattedTwitter =
    HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
  var formattedLocation =
    HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
  //Picture and Message
  var formattedPic =
    HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);
  var formattedMsg =
    HTMLwelcomeMsg.replace("%data%", bio.msg);
    $("#header").append(formattedMsg);
  //Skills
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var skill in bio.skills) {
      var formattedSkills =
      HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills:last").append(formattedSkills);
    }
  }
};
header.display();

//
// Work Experience
//

var work = {
  "jobs" : [
    {
      "title" : "Marketing Specialist",
      "employer" : "Landscape Communications, Inc.",
      "dates" : "March 2015 - Current",
      "location" : "Tustin, California",
      "description" : "I am a Marketing Specialist.",
      "url" : "#link1"
    },
    {
      "title" : "Digital Marketer",
      "employer" : "Bee Social, LLC",
      "dates" : "June 2014 - February 2015",
      "location" : "Orange, California",
      "description" : "I am a Digital Marketer.",
      "url" : "#link2"
    },
    {
      "title" : "Digital Marketing Intern",
      "employer" : "PurposeMatch.com",
      "dates" : "August 2013 - October 2014",
      "location" : "Austin, Texas",
      "description" : "I am a Digital Marketing Intern.",
      "url" : "#link3"
    },
    {
      "title" : "Employment Coach",
      "employer" : "Integrated Resources Institute",
      "dates" : "December 2012 - August 2014",
      "location" : "Irvine, California",
      "description" : "I am an Employment Coach.",
      "url" : "#link4"
    },
    {
      "title" : "Marketing Intern",
      "employer" : "Saddleback Church",
      "dates" : "December 2011 - November 2012",
      "location" : "Lake Forest, California",
      "description" : "I am a Marketing Intern.",
      "url" : "#link5"
    }
  ]
};
work.display = function () {
  if (work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    for (var job in work.jobs) {
      var formattedworkEmployer =
        HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedworkTitle =
        HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedworkURL =
        formattedworkEmployer.replace("#", work.jobs[job].url);
      var formattedworkEmployerTitle = formattedworkURL + formattedworkTitle;
        $(".work-entry:last").append(formattedworkEmployerTitle);

      var formattedworkDates =
        HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedworkDates);
      var formattedworkLocation =
        HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedworkLocation);
      var formattedworkDescription =
        HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedworkDescription);
    }
  }
};
work.display();

//
// Projects
//

var portfolio = {
  "projects" : [
    {
      "title" : "Responsive Portfolio",
      "dates" : "2015",
      "description" : "This is a Responsive Portfolio",
      "images" : ["https://placekitten.com/g/300/150", "https://placekitten.com/g/150/150"],
      "url" : "#link1"
    },
    {
      "title" : "Interactive Resume",
      "dates" : "2015",
      "description" : "This is an Interactive Resume",
      "images" : ["https://placekitten.com/g/400/250"],
      "url" : "#link2"
    }
  ]
};
portfolio.display = function () {
  for (var project in portfolio.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedprojectTitle =
      HTMLprojectTitle.replace
      ("%data%", portfolio.projects[project].title);
    var formattedprojectURL =
      formattedprojectTitle.replace("#", portfolio.projects[project].url);
      $(".project-entry:last").append(formattedprojectURL);
    var formattedprojectDates =
      HTMLprojectDates.replace
      ("%data%", portfolio.projects[project].dates);
      $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectDescription =
      HTMLprojectDescription.replace
      ("%data%", portfolio.projects[project].description);
      $(".project-entry:last").append(formattedprojectDescription);
    if (portfolio.projects[project].images.length > 0) {
      for (var image in portfolio.projects[project].images) {
        var formattedprojectImage =
          HTMLprojectImage.replace
          ("%data%", portfolio.projects[project].images[image]);
          $(".project-entry:last").append(formattedprojectImage);
      }
    }
  }
};
portfolio.display();

//
// Education
//

var education = {
  "schools" : [
    {
      "name" : "UC Irvine",
      "degree" : "Bachelor of Arts",
      "dates" : "2010",
      "location" : "Irvine, California",
      "major" : "Psychology and Social Behavior",
      "url" : "http://uci.edu/"
    }
  ],
  "onlineEducation" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "onlineSchool" : "Udacity",
      "dates" : "2015",
      "url" : "https://www.udacity.com",
      "website" : "www.udacity.com"
    }
  ]
};
education.display = function () {
  if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
      var formattedschoolName =
        HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedschoolDegree =
        HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedschoolURL =
        formattedschoolName.replace("#", education.schools[school].url);
      var formattedSchool = formattedschoolURL + formattedschoolDegree;
        $(".education-entry:last").append(formattedSchool);

      var formattedschoolDates =
        HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
      var formattedschoolLocation =
        HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
      var formattedschoolMajor =
        HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
    }
  }
  if (education.onlineEducation.length > 0) {
    $("#education").append(HTMLonlineClasses);
    $('#education').find('h3').after('<div class="online-entry"></div>');
    for (var eSchool in education.onlineEducation) {
      var formattedonlineTitle =
        HTMLonlineTitle.replace("%data%", education.onlineEducation[eSchool].title);
      var formattedonlineSchool =
        HTMLonlineSchool.replace("%data%", education.onlineEducation[eSchool].onlineSchool);
      var formattedonlineSchoolURL =
        formattedonlineTitle.replace("#", education.onlineEducation[eSchool].url);
      var formattedonlineEducation = formattedonlineSchoolURL + formattedonlineSchool;
        $(".online-entry:last").append(formattedonlineEducation);

      var formattedonlineDates =
        HTMLonlineDates.replace("%data%", education.onlineEducation[eSchool].dates);
        $(".online-entry:last").append(formattedonlineDates);
      var formattedonlineWebsite =
        HTMLonlineURL.replace("%data%", education.onlineEducation[eSchool].website);
      var formattedonlineWebsiteURL =
        formattedonlineWebsite.replace("#", education.onlineEducation[eSchool].url);
        $(".online-entry:last").append(formattedonlineWebsiteURL);
    }
  }
};
education.display();

//
// Google Map
//

function displayMap() {
  $('#mapDiv').append(googleMap);
}
displayMap();