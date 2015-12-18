// Elevator script included on the page, already.
// fonction qui permet de gerer le retour en haut via l'elevation
window.onload = function() {
    var elevator = new Elevator({
        element: document.querySelector('.elevator-button'),
        duration: 1000 // milliseconds
    });
}
