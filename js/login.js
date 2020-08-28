//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("button").addEventListener("click", function(e) {


        let email = document.getElementById('email');
        let pass = document.getElementById('pass');

        //guardamos datos de email y contrasena en localstorage
        localStorage.setItem('Usuario', email.value);



        //Validacipon de que los campos de "email" y "contrasena" no esten vacios

        if (email.value.length != 0 && pass.value.length != 0) {
            console.log(email.value)
            console.log(pass.value)
            return location.href = "index.html";

        } else {
            let error = document.getElementById("error");
            error.textContent = "Usuario o contraseña incorrecta";
        }


    })


    /* 
        if (storageAvailable('localStorage')) {
            //Si esxite aca va el codigo que debemos ejecutar
            console.log("hay local storage")
                // Yippee! We can use localStorage awesomeness
        } else {
            // Si no tenemos accesso o no existe nos va a devover esto
            console.log("no se encontro nada")

        } */







});



//Tenemos que obtener usuario y contraseña




//guardarlas en sessionstorage
//y despues en cada html preguntar esa info y colocar el nombre





















//Funciones de animacion del login y sus label
$(window, document, undefined).ready(function() {

    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });

});