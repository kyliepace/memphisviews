// smooth scroll when anchor link clicked
var link = document.getElementsByClassName("navLink");

for(var i = 0; i < link.length; i ++){
	link[i].addEventListener('click', function(e){
		return handleClick(e);
	})
}

var handleClick = function(e){

	if(e.path[1].hash){

		e.preventDefault();

		var hash = document.getElementById(e.path[1].hash.slice(1));

		hash.focus();

		hash.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
}


// create modal for contact
var modal = new VanillaModal.default({
	clickOutside: true,
});

var insertTo = document.getElementById('content');

var createInterview = function(name, array){
	var content = document.createElement('div');
	var interview = document.createElement('div');
	interview.classList.add('interview');
	
	var image = document.createElement('img');
	image.setAttribute('src', './assets/images/'+name+'.jpg');

	for(var i = 0; i < array.length; i++){
		(i % 2) == 0 ? makeQuestion(array[i], interview) : makeAnswer(array[i], interview)
	}

	content.insertAdjacentElement('beforeend', interview);
	content.insertAdjacentElement('beforeend', image);

	content.setAttribute('id', name);
	content.classList.add('vanilla-modal', 'modal-hider');

	insertTo.insertBefore(content, insertTo.firstChild);
};

var makeQuestion = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="question">'+string+'</p>');
};

var makeAnswer = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="answer">'+string+'</p>');
};


/*  --------------------------------------------
------  Ronnie ---------------------- */
createInterview('Ronnie', [
	'What is your hometown?',
	'Memphis, TN',
	'If you could move to another city, would you?',
	'Nope.',
	'What neighborhood do you live in?',
	'Frayser',
	'How long have you lived in Memphis? ',
	'All my life. I really enjoy this. Nice city.',
	'How would you describe the City of Memphis in three words? ',
	'Peaceful, diverse, and beautiful',
	'What was your childhood in Memphis like? ',
	'I growed up in the neighborhood. It was nice. 8 kids, 2 parents. Growed up in a single-family home. Came out pretty good.',
	'What is your current impression of Memphis? ',
	'Memphis is a lovely city. A lot going on. Pro basketball now for the city. Football team doing pretty good. So for a city it is really nice. It is a good city.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Oh yes, it has improved a whole lot since my childhood. Folks have come together now. There are more nicer folks now. More peaceful now. Folks talk to each other now. It is good.',
	'What is your funniest story about living in Memphis? ',
	'Hmm, just seeing the peoples face. Seeing the smiles on peoples faces everyday. How folks talk, how folks speak. The atmosphere. That is what it is all about, smiling.',
	'If you could change something about Memphis, what would it be? ',
	'Crime.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'That I am a good person. I respect everybody. I treated everybody right.  And hopefully I did a good thing while I was here.',
	'What is your favorite thing about Memphis? ',
	'The peoples.  That’s the thing. That’s what makes Memphis great. The peoples.'
]);

