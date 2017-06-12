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
	'skills' : ["Linux", "Git", "JavaScript", "Apache", "WepSphere jython scripting"],
}
moment.locale('ro');

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
		"employer" : "IBM România",
		"title" : "IBM Infrastructure Specialist AIX Linux",
		"dates" : [ "Aprilie 2016", moment().format('MMMM YYYY')],
		"description" : "<b>WebSphere Application Servers </b><br> \
	- instalare <br> \
		&emsp; instalare binare <br> \
	- configurare <br> \
		&emsp; creare profile <br> \
		&emsp; creare resurse jms <br> \
		&emsp; creare bus de mesaje <br> \
		&emsp; creare webservere <br> \
		&emsp; creare resurse jdbc <br> \
		&emsp; configurații de performanță <br> \
	- administrare <br> \
<b>WepSphere Enterprise Applications </b> <br> \
	- instalare <br> \
	- configurare <br> \
	- administrare <br> \
<b>HTTP Servers</b> <br> \
	- instalare <br> \
	- configurare <br> \
	- administrare <br> ",
		"location" : "Brașov"
	},
	{
		"employer" : "Steelcase",
		"title" : "Technical support Specialist",
		"dates" : ["Octombrie 2015", "Aprilie 2016"],
		"description" : "<b> Suport tehnic pentru produsele tehnologice : </b> <br> \
		<b>Media:Scape </b><br> \
	- instalare <br> \
	- configurare <br> \
	- administrare <br> \
		<b>RoomWizard</b> <br> \
	- instalare <br> \
	- configurare <br> \
	- administrare <br> \
		<b>Eno witeboard interactiv</b> <br> \
	- instalare <br> \
	- configurare <br> \
	- administrare <br>",
		"location" : "Cluj-Napoca"
	},
	{
		"employer" : "Pentalog România",
		"title" : "System Administrator",
		"dates" : ["Mai 2012", "Octombrie 2015"],
		"description" : "<b>Administrarea parcului IT a companiei </b><br> \
<b>Recepție de echipamente noi și pregătirea pentru exploatare</b> <br> \
- Instalare de sistem de operare, integrare Active Directory, drepturi de utilizator. <br> \
 <br> \
<b>Distribuirea cererile primite prin aplicarea de ticketing</b> <br> \
<b>Pregătirea mediilor producție și de testare</b> <br> \
 -Instalarea si configurarea serverelor de web (Tomcat Nginx Apache) <br> \
- Baze de date instalare și configurare (MySQL, PostgreSQL mogodb) <br> \
- instalare si configurare de aplicati tip cPanel <br> \
- proxy configurare în servere web <br> \
- adaugare editare intrări de DNS <br> \
 <br> \
<b>Deployment automat si manual</b><br> \
- Configurarea Jenkins folosind scripturi bash în raport cu codul sursă gestionat prin GIT <br> \
   inclus script de backup (fișiere și baze de date) <br> \
- opțiuni de declanșare (manual, automat atunci când codul primeste actualizări in git, programat la timp specifice) <br> \
- Deployment manual pachete <br> \
 <br> \
<b>Configurarea și monitorizarea serverelor telefonie </b><br> \
- Instalatie si configurare de servere asterisk <br> \
- Configurarea telefoane IP si aplicatii <br> \
 <br> \
<b>Active Directory Management</b> <br> \
- Adăugarea utilizatori și grupuri, configurarea premisiunilor <br> \
 <br> \
<b>DHCP </b><br> \
- Adăugare rezervări si actualizare <br> \
 <br> \
<b>E-mail</b> <br> \
- Instalare si configurare de servere postfix <br> \
- Configurarea diversi clienti de e-mail",
		"location" : "București"
	},
	{
		"employer" : "Employer4",
		"title" : "Employee4",
		"dates" : ["Decembrie 2012","Aprilie 2016"],
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
		"description" : "My fancy project tada",
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
	if (bio.skills.length > 0){
		$('#header').prepend(HTMLskillsStart);
		for (skill in bio.skills){
			var prettySkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$('#skills').append(prettySkill);
		}
	}	
	$('#header').prepend(HTMLbioPic.replace("%data%", bio.bioPic));
	$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
	$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
	var customContact = HTMLcontactGeneric.replace("%contact%", "Linkedin");
	var customContact = customContact.replace("%data%", "<a id=linkedin href=https://www.linkedin.com/in/adrian-istrate>https://www.linkedin.com/in/adrian-istrate</a>");
	$('#topContacts').append(customContact);
	$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
	$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
};

function displayWork () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var prettyEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var prettyTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var prettyEmployerTitle = prettyEmployer + prettyTitle;
	
		$('.work-entry:last').append(
			prettyEmployerTitle);
		var prettyDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(
			prettyDescription);
//		var duration = calcDuration(work.jobs[job].dates[0], work.jobs[job].dates[1]);
		var duration = moment(work.jobs[job].dates[1], "MMMM YYYY").diff(moment(work.jobs[job].dates[0],"MMMM YYYY"));
		var duration = moment.duration(duration).add(1, 'month');


		var prettyDates = HTMLworkDates.replace("%data%", work.jobs[job].dates.join(" - "));
		$('.work-entry:last').append(
			prettyDates);
		var correction = (moment.duration(duration, "months").format( "Y [ani] M [luni]")).split(" ")
		if (correction[2] == 1){
			correction[3] = "luna"
		}
		if (correction[0] == 1){
			correction[1] = "an"

		}

		var prettyDuration = HTMLworkDuration.replace("%data%", correction.join (" "))
		console.log(correction)
		$('.work-entry:last').append(
			prettyDuration);
	}
}

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var prettyPjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(
			prettyPjTitle);


		$(".project-entry:last").append(HTMLprojectPanel);
		var prettyPjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".panel:last").append(
			prettyPjDescription);

		if ( projects.projects[project].images.length > 0 ) {
			for (image in projects.projects[project].images) {
				var prettyPjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".panel:last").append(
				prettyPjImage);
			};
		};
		
		var prettyPjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(
			prettyPjDates);
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

function workTop () {
	var p = document.getElementById("workExperience"),
   		header = document.getElementById("header"),
  		h = header.clientHeight;
	p.style.marginTop=h+"px";
}



displayHeader ()

// Set the margin top size according to the header size and update on resize
setTimeout(workTop, 500); // set timeout to fix incorrect value for header size

workTop ();

$(window).on('resize', function() {
	workTop();
}).trigger('resize');

displayWork ()


education.display ()
projects.display ()

$("#mapDiv").append(googleMap);


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}