// create modal for contact
var modal = new VanillaModal.default({
	clickOutside: true,
});

// define where to insert these elements on the index.html page
var content = document.getElementById('wrapper');


/*************************************
define functions used by createIntervew()
*****************************/
var createImage = function(name){
	var image = document.createElement('img');
	image.setAttribute('src', './assets/images/'+name+'.jpg');
	return image;
};

var createModalContent = function(name, array, image){
	var modal = document.createElement('div');
	var interview = document.createElement('div');
	interview.classList.add('interview');
	
	for(var i = 0; i < array.length; i++){
		(i % 2) == 0 ? makeQuestion(array[i], interview) : makeAnswer(array[i], interview)
	}

	modal.insertAdjacentElement('beforeend', interview);
	modal.insertAdjacentElement('beforeend', image);

	modal.setAttribute('id', name);
	modal.classList.add('vanilla-modal', 'modal-hider');

	// insert modal content at the bottom of the content div
	content.insertBefore(modal, content.lastChild);
};


// e.g. <a href='#Truth' data-modal-open></a>
var createLink = function(name){
	var link = document.createElement('a');
	link.setAttribute('href', '#'+name);
	link.setAttribute('data-modal-open', '');
	return link;
};

var addToPage = function(link, element, className){
	// if index.html and additional panels past the set first ones, add to the #wrapper
	if(element == true){
		var newElement = document.createElement('div');
		newElement.classList.add('panel');
		newElement.insertAdjacentElement('beforeend', link);
		content.insertBefore(newElement, content.firstChild);
	} else {
		// add link that opens modal
		content.insertAdjacentElement('beforeend', link);
	}
};

var randomInsert = function(){
	var rand = Math.random();
	console.log(rand);
	if(rand <= 0.5) {
		return 'beforeend'
	} else {
		return 'afterbegin'
	}
};

var makeQuestion = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="question">'+string+'</p>');
};

var makeAnswer = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="answer">'+string+'</p>');
};




