var bio = {
	'name' : 'Istrate Adrian',
	'role' : 'Infrastructure Specialist AIX Linux',
	'contact info' : {
		'mobile' : '0722520666',
		'email' : 'adrian.istrate@ymail.com',
		'location' : 'Brasov'
	},	
	'bioPic' : 'https://scontent.fotp3-2.fna.fbcdn.net/v/t1.0-9/12063469_1098647620159042_5040254649106363259_n.jpg?oh=25cb5d3e24b09cd85a56d17d9e7341e3&oe=58CC76BF',
	'welcome message' : 'This is a test',
	'skills' : ['Linux', 'Git', 'JS', 'Apache', 'WepSphere jython scripting', "i dont know", "funny", "honey"],
}

var education = {
	"schools" : [
	{
		"name" : "Liceul ...",
		"city" : "Brasov, Romania",
		"degree" : "Diploma",
		"majors" : "Specialitate",
		"dates" : 2003,
	},
	{
		"name" : "Liceul ...",
		"city" : "Brașov, Romasnia",
		"degree" : "Diploma",
		"majors" : "Specialitate",
		"dates" : 2004,
	}
	],
	"Courses" : [
	{
		"title" : "JavaScript Crash Course",
		"provider" : "Udacity",
		"dates" : 2016,
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
		"location" : "Brasov"
	},
	{
		"employer" : "Employer2",
		"title" : "Employee2",
		"dates" : "undefined",
		"description" : "To be filled in",
		"location" : "Cluj Napoca"
	},
	{
		"employer" : "Employer3",
		"title" : "Employee3",
		"dates" : "undefined",
		"description" : "To be filled in",
		"location" : "Bucuresti"
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
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : [
		]
	},
	{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : [
		],
	}	
	]
}

function displayHeader (){
	$('#header').append(HTMLbioPic.replace("%data%", bio.bioPic))
	$('#header').append(HTMLheaderName.replace("%data%", bio.name))
	$('#header').append(HTMLheaderRole.replace("%data%", bio.role))
	$('#header').append()
	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		var skill;
		for (skill in bio.skills) {
			var prettySkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(prettySkill);
		}
	}	
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
projects.display = function () {

}
function inName(){
	
	split_names = bio.name.trim().split(" ");
	last_name = split_names[1].toUpperCase();
	first_name = split_names[0].slice(0,1).toUpperCase() + split_names[0].slice(1).toLowerCase();

	return first_name + " " + last_name 
	console.log(first_name + " " + last_name)
}

console.log(showJobLocations (work))
$("#main").append(internationalizeButton)



inName(bio.name)

