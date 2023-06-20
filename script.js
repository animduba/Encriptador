
var botonEncriptar = document.getElementById('botonEncriptar');
var botonDesencriptar = document.getElementById('botonDesencriptar');
var botonCopiar = document.getElementById('botonCopiar');
var botonError = document.getElementById('botonError');

function desaparecer() {
    document.getElementById("desaparecer").style.display = "none";
}

function aparecer() {
    document.getElementById("aparecer").style.display = "flex";
}

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

function msjCopiado(mensaje) {

    setTimeout(function() {
        Error.style.display = "none";
      }, 2000); // 1000 milisegundos = 1 segundo
}

function btncopiar() {
    var texto = document.getElementById("textoEncriptado").innerText;
    //navigator.clipboard escribe el texto obtenido en el portapapeles
    //writeText(texto) es una función asíncrona que devuelve una promesa.
    navigator.clipboard.writeText(texto)

    //Si seresuelve correctamente, se ejecuta la función then sino la funcion catch
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: ", error);
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

    desaparecer();
    aparecer();
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

    desaparecer();
    aparecer();
    textoEncriptado = desencriptar(textoIngresado);
    textoMostrado.textContent = textoEncriptado;

}




botonEncriptar.addEventListener('click', btnEncriptar);
botonDesencriptar.addEventListener('click', btnDesencriptar);
botonCopiar.addEventListener('click', btncopiar);
botonError.addEventListener('click', btnError);
