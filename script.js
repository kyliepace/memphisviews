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
var modal = new VanillaModal.default();
