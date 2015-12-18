// Elevator script included on the page, already.
// fonction qui permet de gerer le retour en haut via l'elevation
window.onload = function() {
    var elevator = new Elevator({
        element: document.querySelector('.elevator-button'),
        duration: 1000 // milliseconds
    });
}

//fonction qui permet de faire la petite annimation lorsque la navebar est déroulée 
$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});