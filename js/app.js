var data = [
    "Nombre 1",
    "Nombre 2",
    "Nombre 3",
    "Nombre 4",
    "Nombre 5",
    "Nombre 6",
];

var a = {
    name: "Nombre",
};

var addCard = function (firstName) {
    var card = '<div class="col s4">' +
        '<div class="card small">' +
        '<div class="card-image">' +
        '<img src="http://www.imagen.com.mx/assets/img/imagen_share.png">' +
        '<span class="card-title">' + firstName + '</span>' +
        '</div>' +
        '<div class="card-content">' +
        '<p>Contenido de la tarjeta</p>' +
        '</div>' +
        '<div class="card-action">' +
        '<a href="#" class="delete">Borrar</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    $('#wrapper').append(card);
};

$(document).ready(function (){
    //$('.modal-trigger').leanModal();
    
    //Contenido de la clase
    $("#show-btn").click( function() {
        for (var i = 0; i < data.length; i++) {
            addCard(data[i]);
        }
        
        $(".delete").click( function () {
            $(this).parent().parent().parent().remove();
        });
        
        $(".card.small").dblclick(function () {
            $(this).parent().remove();
        });
    });
    
    $("#clean-btn").click(function () {
        $("#wrapper").empty();
    });
    
    //Contenido de la clase
    
});
















