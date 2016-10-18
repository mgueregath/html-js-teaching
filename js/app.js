var basePath= "http://146.83.216.162:8080/";

var data = [
    "Nombre 1",
    "Nombre 2",
    "Nombre 3",
    "Nombre 4",
    "Nombre 5",
    "Nombre 6",
];

var addCard = function (firstName) {
    var card = '<div  class="col s4">' +
        '<div class="card small">' +
        '<div class="card-image">' +
        '<img src="http://www.imagen.com.mx/assets/img/imagen_share.png">' +
        '<span class="card-title">' + firstName + '</span>' +
        '</div>' +
        '<div class="card-content">' +
        '<p>Contenido de la tarjeta</p>' +
        '</div>' +
        '<div class="card-action">' +
        '<a href="#">Borrar</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#wrapper').append(card);
};

$(document).ready(function (){
    
    $('.modal-trigger').leanModal();
});