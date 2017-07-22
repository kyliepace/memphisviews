var createInterview = function(name, neighborhood, array){
	var link = createLink(name);
	var image = createImage(name);
	
	createModalContent(name, array, image);

	//link.insertAdjacentElement('beforeend', image);
	//addToPage(link, true, 'panel');
};