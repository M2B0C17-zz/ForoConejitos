$(document).ready(function(){
  $("button").click(function(e){
    e.preventDefault();
    var name = $('#nombre').val();
    var message = $('#mensaje').val();
    if(name == "" && message == ""){
      alert("Debes escribir tu nombre y el mensaje");
    }else {
      $('#comentarios').append('<div><span class="center-align"> ' + name + ' </span<p class="center-align"> ' + message + '</p></div>');
    }
  });
});


/*
Qué hace nuestra función?
Una pequeña validación. Comenzamos diciendo que al hacer click en nuestro botón, se genere una función que:
    - Tenga un preventDefault para que detenga la acción por defecto.
    - Guardará los valores ingresados en las variables name y message.
    - Y luego, hará una validación sencilla, para que nuestros campos no estén vacíos. Esto lo realizará una
    sentencia if/else que:
        - Si los campos nombre y mensaje están vacíos, debe generar una alerta para que el usuario los ingrese.
        - Si no, mostrará en pantalla el nombre y mensaje ingresados por el usuario.
*/
