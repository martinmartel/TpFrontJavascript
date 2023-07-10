function calcular() {
    var select = document.getElementById("categoria");
    var categoriaSeleccionada = select.value;
    var porcentaje;

    var cantidadComprada = document.getElementById("cantidad");
    var cantidadEntradas = parseInt(cantidadComprada.value);

    var h4 = document.getElementById("resultado");
    var resultado = 0;
    var porcentaje = 1.0;
    
    console.log(categoriaSeleccionada);

    switch (categoriaSeleccionada) {
        case "es":
            porcentaje = 0.20;
            break;
        case "tr":
            porcentaje = 0.50;
            break;
        case "ju":
            porcentaje = 0.85;
            break;
    }

    var resultado = cantidadEntradas * 200 * porcentaje;
    console.log(porcentaje);
    h4.textContent = h4.textContent + resultado;
}

function borrar() {
    var h4 = document.getElementById("resultado");
    h4.textContent ="Total a Pagar: $"

    var cantidadComprada = document.getElementById("cantidad");
    cantidadComprada.value = "";
    var select = document.getElementById("categoria");
    select.value = "es";
}

function validarLetras(input) {
    var regex = /[^a-zA-Z\s]/g;
    input.value = input.value.replace(regex, '');
}

function validarEmail(input) {
    var regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    var esValido = regex.test(input.value);
    var arrobas = input.value.split("@").length - 1;
    
    if (!esValido || arrobas > 1) {
        input.setCustomValidity("Ingresa una dirección de correo electrónico válida");
    } else {
        input.setCustomValidity("");
    }
}
