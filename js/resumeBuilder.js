var bio = {
	'name' : 'Istrate Adrian',
	'role' : 'Infrastructure Specialist AIX Linux',
	'contacts' : {
		'mobile' : '0722520666',
		'email' : 'adrian.istrate@ymail.com',
		'location' : 'Brașov'
	},	
	'bioPic' : 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARAAAAAJDU5ZjU1MzNjLTQ0OWQtNDE4MS1iMDc0LTNkYzNhN2QxMzdjYw.jpg',
	'welcome message' : 'This is a test',
	'skills' : ["Linux", "Git", "JavaScript", "Apache", "WepSphere jython scripting", "", "", ""],
}

var education = {
	"schools" : [
	{
		"name" : "Liceul Grup Școlar de Arte si Meserii",
		"location" : "Brașov",
		"degree" : "Tehncian în Activități Financiare și Comerciale",
		"majors" : "Contabilitate",
		"dates" : "2003-2007",
	},
	{
		"name" : "Facultatea .",
		"location" : "Brașov",
		"degree" : "-",
		"majors" : "Contabilitate și Informatică de gestiune",
		"dates" : "2014-",
	}
	],
	"courses" : [
	{
		"title" : "JavaScript Crash Course",
		"provider" : "Udacity",
		"dates" : "2016 ",
		"url" : "https://classroom.udacity.com/courses/ud804",
	},
	{
		"title" : "WebSphere Application Server Administration",
		"provider" : "Arrow",
		"dates" : 2016,
		"url" : "https://classroom.udacity.com/courses/ud804",
	}	
	]
}
var work = {
	"jobs" : [
	{
		"employer" : "Employer1",
		"title" : "Employee1",
		"dates" : "undefined",
		"description" : "Lorem ipsum sin dolor awadafdadfdaf",
		"location" : "Brașov"
	},
	{
		"employer" : "Employer2",
		"title" : "Employee2",
		"dates" : "undefined",
		"description" : "To be filled in",
		"location" : "Cluj-Napoca"
	},
	{
		"employer" : "Employer3",
		"title" : "Employee3",
		"dates" : "undefined",
		"description" : "To be filled in",
		"location" : "București"
	},
	{
		"employer" : "Employer4",
		"title" : "Employee4",
		"dates" : "undefined",
		"description" : "To be filled in",
		"location" : "Strasbourg"
	}			
	]
}
var projects = {
	projects : [
	{
		"title" : "Projects",
		"dates" : "in progress",
		"description" : "My fancy project",
		"images" : [ "https://media2.giphy.com/media/ORWPpKNFAjrAk/200w.gif#6", "https://media4.giphy.com/media/suxgXSEOb3EFq/200w.gif#4" ]
	},
	{
		"title" : "Projects 2",
		"dates" : "2015",
		"description" : "Old project",
		"images" : [ 
		]
	}	
	]
}

function displayHeader (){
	
	if (bio.skills.length > 0) {
		$('#header').prepend(HTMLskillsStart);
		for (skill in bio.skills) {
			var prettySkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(prettySkill);
		}
	}	
	$('#header').prepend(HTMLbioPic.replace("%data%", bio.bioPic))
	$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role))
	$('#header').prepend(HTMLheaderName.replace("%data%", bio.name))
	var customContact = HTMLcontactGeneric.replace("%contact%", "Linkedin")
	var customContact = customContact.replace("%data%", "<a id=linkedin href=https://www.linkedin.com/in/adrian-istrate>https://www.linkedin.com/in/adrian-istrate</a>")
	$('#topContacts').append(customContact)
	$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile))
	$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email))
	$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location))	
}

function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var prettyEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var prettyTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var prettyEmployerTitle = prettyEmployer + prettyTitle;
	
		$('.work-entry:last').append(
			prettyEmployerTitle);
	
		var prettyDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$('.work-entry:last').append(
			prettyDates);
	
		var prettyDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(
			prettyDescription);
	}
}

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var prettyPjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(
			prettyPjTitle);

		var prettyPjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(
			prettyPjDates);

		var prettyPjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(
			prettyPjDescription);

		if ( projects.projects[project].images.length > 0 ) {
			for (image in projects.projects[project].images) {
				var prettyPjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(
				prettyPjImage);
			};
		};
	};	
}


education.display = function () {

	for ( school in education.schools) {
		$("#education").append(HTMLschoolStart)

		var prettySchoolName = HTMLschoolName.replace("%data%", education.schools[school].name );
		var prettySchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree );
		$('.education-entry:last').append(prettySchoolName + prettySchoolDegree);


		var prettySchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates );
		$('.education-entry:last').append(prettySchoolDates);

		var prettySchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location );
		$('.education-entry:last').append(prettySchoolLocation);

		var prettySchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors );
		$('.education-entry:last').append(prettySchoolMajor);

	};

	$("#education").append(HTMLonlineClasses)

	for ( course in education.courses ) {
		$("#education").append(HTMLschoolStart)

		var prettyOnlineProvider = HTMLonlineSchool.replace("%data%", education.courses[course].provider );
		var prettyOnlineTitle = HTMLonlineTitle.replace("%data%", education.courses[course].title );
		$('.education-entry:last').append(prettyOnlineTitle + prettyOnlineProvider);

		var prettyOnlineDates = HTMLonlineDates.replace("%data%", education.courses[course].dates );
		$('.education-entry:last').append(prettyOnlineDates);

		var prettyOnlineURL = HTMLonlineURL.replace("%data%", education.courses[course].url );
		$('.education-entry:last').append(prettyOnlineURL);
		$('.education-entry:last').append("<br><hr>")

	};
}

function showJobLocations (work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation)
	}

	return locationArray
}


displayHeader ()
displayWork ()
education.display ()
projects.display ()


$("#mapDiv").append(googleMap);
