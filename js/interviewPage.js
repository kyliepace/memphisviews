var createInterview = function(name, neighborhood, isTrue, array){
	var link = createLink(name);
	var image = createImage(name);
	link.insertAdjacentHTML('beforeend', name + ', ' + neighborhood);
	createModalContent(name, array, image);
	addToPage(link, false);
};