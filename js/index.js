var createInterview = function(name, neighborhood, isTrue, array){
	// create the interview modal and insert into the page wrapper div
	createModalContent(name, array);

	/*  if fourth argument is true, then the image should be placed randomly
	onto the page */

	if(isTrue){

	 	// create a link to open the interview modal when the image is clicked
		var link = createLink(name);
		link.insertAdjacentElement('beforeend', createImage(name));

		// add the link to the page
		addToPage(link, true, 'panel');
	 } 
	
};