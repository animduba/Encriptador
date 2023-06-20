
var botonEncriptar = document.getElementById('botonEncriptar');
var botonDesencriptar = document.getElementById('botonDesencriptar');
var botonCopiar = document.getElementById('botonCopiar');
var botonError = document.getElementById('botonError');

function encriptar(texto) {
    var nuevoTexto = texto  
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return nuevoTexto;
}

function desencriptar(texto) {
    var nuevoTexto = texto  
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    console.log(nuevoTexto);  
    return nuevoTexto;
}

function msjError(mensaje) {
    var Error = document.getElementById("error");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = mensaje;
    Error.style.display = "block";
}

function btnError() {
    var Error = document.getElementById("error");
    Error.style.display = "none";
}

function msjCopiado() {
    var copiado = document.getElementById("copiado");
    var aparecer = document.getElementById("aparecer");
    var opacidadCopiado = 1;
    var opacidadAparecer = 0.5;
    var paso = 0.1;
    var intervalo = 160; // Intervalo de tiempo en milisegundos

    copiado.style.display = "flex";
    
    var temporizador = setInterval(function() {
        
        if (opacidadCopiado <= 0.5) {
            clearInterval(temporizador);
            copiado.style.display = "none";
            aparecer.style.opacity = 1;
            aparecer.style.opacity = "alpha(opacity=100)";
        }
        
        copiado.style.opacity = opacidadCopiado;
        copiado.style.filter = "alpha(opacity=" + (opacidadCopiado * 100) + ")";
        opacidadCopiado = opacidadCopiado - paso;

        if (opacidadAparecer >= 1) {
            opacidadAparecer = 1;
          } else {
            opacidadAparecer = opacidadAparecer + paso;
        }

        aparecer.style.opacity = opacidadAparecer;
        aparecer.style.filter = "alpha(opacity=" + (opacidadAparecer * 100) + ")";

    }, intervalo);



}

function btncopiar() {
    var texto = document.getElementById("textoEncriptado").innerText;
    //navigator.clipboard escribe el texto obtenido en el portapapeles
    //writeText(texto) es una función asíncrona que devuelve una promesa.
    navigator.clipboard.writeText(texto)

    //Si seresuelve correctamente, se ejecuta la función then sino la funcion catch
    .then(function() {
      msjCopiado("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      msjError("No se pudo copiar el texto: ", error);
    });

}

function comprobar(texto) {
    if (texto.trim() == '') {
        // trim() elimina los espacios en blanco al inicio y al final del texto
        msjError('El textarea está vacío. Por favor, ingrese un texto.');
        return true;
    }

    if (/[A-Z]/.test(texto)) {
        // Verificar si hay mayúsculas
        msjError("El texto contiene mayúsculas.");
        return true;
    }

    
    if (/[^a-zA-Z0-9\s]/.test(texto)) {
        // Verificar si hay caracteres especiales
        msjError("El texto contiene caracteres especiales.");
        return true;
    }

}

function btnEncriptar() {
    var textarea = document.getElementById('textoEncriptar');
    var textoIngresado = textarea.value;
    var textoMostrado = document.getElementById('textoEncriptado');
    
    if (comprobar(textoIngresado)) {
        return;
    };

    document.getElementById("desaparecer").style.display = "none";
    document.getElementById("aparecer").style.display = "flex";

    textoEncriptado = encriptar(textoIngresado);
    textoMostrado.textContent = textoEncriptado;
    
}

function btnDesencriptar() {
    var textarea = document.getElementById('textoEncriptar');
    var textoIngresado = textarea.value;
    var textoMostrado = document.getElementById('textoEncriptado');

    // trim() elimina los espacios en blanco al inicio y al final del texto
    if (comprobar(textoIngresado)) {
        return;
    };

    document.getElementById("desaparecer").style.display = "none";
    document.getElementById("aparecer").style.display = "flex";
    
    textoEncriptado = desencriptar(textoIngresado);
    textoMostrado.textContent = textoEncriptado;

}




botonEncriptar.addEventListener('click', btnEncriptar);
botonDesencriptar.addEventListener('click', btnDesencriptar);
botonCopiar.addEventListener('click', btncopiar);
botonError.addEventListener('click', btnError);
