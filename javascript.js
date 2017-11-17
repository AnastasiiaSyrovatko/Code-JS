function message () {
  confirm ("Do you call?");
};

var skill = ['Listening', 'Nonverbal Communication','Clarity','Friendliness'];

function myOpportunity () {
  var element = document.getElementById('content_skills');

	for (var i = 0; i < skill.length; i++) {
		var para = document.createElement('p');
		var node = document.createTextNode (skill[i]);
		para.appendChild(node);
		element.appendChild(para);
		para.setAttribute('class', 'paragraph');
   }
};

document.addEventListener("DOMContentLoaded", renderMyData);

function renderMyData () {
  myOpportunity();
  myEducation();
  myExperience();
};

var education = [{school: 'Gymnasia', year: 1997, city : 'Krasnodon'}, {school: 'University of construction and architecture', year : 2009, city : 'Kiev'}];

function myEducation () {
  var element = document.getElementById('content_ed');
  
  for (var i = 0; i < education.length; i++) {
		for (var key in education[i] ) {
      		var div = document.createElement('div'),
		  		header = document.createElement('h3'),
		  		span = document.createElement('span');
		  		ii = document.createElement('i'),

		  		textDataHeader = 'School: ' +  education[i].school,
		  		textDataCity = 'City: ' +  education[i].city,
		  		textDataYear = 'Year: ' +  education[i].year,
						
		  		nodeHeader = document.createTextNode(textDataHeader),
		  		nodeSpanCity = document.createTextNode(textDataCity),
		  		nodeIYear = document.createTextNode(textDataYear);

		  		header.appendChild(nodeHeader);
		  		span.appendChild(nodeSpanCity);
		 		ii.appendChild(nodeIYear);
					
		  		header.setAttribute('class', 'schoolcolor');
		  		ii.setAttribute('class', 'spanstyle');

	      		div.appendChild(header);
		  		div.appendChild(span);
		  		div.appendChild(ii);
		}
			div.setAttribute('class', 'divstyle')
		  	element.appendChild(div); 
    };
		
};

var experience = [{company:'Intellectus-studio (web-studio)', city: 'Kiev', position: 'Business developer'}];

function myExperience () {
  var elementexp = document.getElementById('content_ex');

  for (var i = 0; i < experience.length; i++ ) {
        for (var key in experience[i]) {
				
		var div = document.createElement('div'),
			header = document.createElement('h3'),
			span = document.createElement('span'),
			p = document.createElement('p'),

			textCompany = 'Company:' +  experience[i].company,
			textCity = 'City:' +  experience[i].city,
			textPosition = 'Position:' +  experience[i].position;

			nodetextCompany = document.createTextNode(textCompany),
			nodetextCity = document.createTextNode(textCity),
			nodetextPosition = document.createTextNode(textPosition);

			header.appendChild(nodetextCompany);
			span.appendChild(nodetextCity);
			p.appendChild(nodetextPosition);

			div.appendChild(header);
			div.appendChild(span);
			div.appendChild(p);		

	    }
			elementexp.appendChild(div);
	};
};

function openContent (evt, oppName) {
  console.log(evt);
  
  var i, tabcontent, tablinks;
    	tabcontent = document.getElementsByClassName("tabcontent");

		for ( i = 0; i < tabcontent.length; i++ ) {
			tabcontent[i].style.display = "none";
    	};

		tablinks = document.getElementsByClassName("tablinks");
	  
	  	for ( i = 0; i < tablinks.length; i++) {
	  		tablinks[i].className = tablinks[i].className.replace(" active", "");
		};

		document.getElementById(oppName).style.display = "block";
   		 evt.currentTarget.className += " active";
};





