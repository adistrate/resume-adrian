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
	'skills' : ['Linux', 'Git', 'JS', 'Apache', 'WepSphere jython scripting'],
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
		"dates" : 2003,
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
		"employer" : "Employer",
		"title" : "Employee",
		"dates" : "undefined",
		"description" : "To be filled in"
	},
	{
		"employer" : "Employer",
		"title" : "Employee",
		"dates" : "undefined",
		"description" : "To be filled in",
	},
	{
		"employer" : "Employer",
		"title" : "Employee",
		"dates" : "undefined",
		"description" : "To be filled in",
	},
	{
		"employer" : "Employer",
		"title" : "Employee",
		"dates" : "undefined",
		"description" : "To be filled in",
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

$('#header').append(HTMLheaderName.replace("%data%", bio.name))
$('#header').append(HTMLheaderRole.replace("%data%", bio.role))
if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	var skill;
	for (skill in bio.skills) {
		var prettySkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$('#skills').append(prettySkill);
	}
}