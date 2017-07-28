var createInterview = function(name, neighborhood, array, isTrue){
	var link = createLink(name);
	var image = createImage(name);
	
	createModalContent(name, array, image);


	/*  if fourth argument is true, then the image should be placed randomly
	onto the page */
	
	// if(isTrue){
	// 	//link.insertAdjacentElement('beforeend', image);
	// 	//addToPage(link, true, 'panel');
	// }
	
};