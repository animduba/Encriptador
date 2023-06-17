
var botonEncriptar = document.getElementById('botonEncriptar');
var botonDesencriptar = document.getElementById('botonDesencriptar');

function desaparecer() {
    document.getElementById("desaparecerImg").style.display = "none";
    document.getElementById("desaparecerT1").style.display = "none";
    document.getElementById("desaparecerT2").style.display = "none";
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


function btnEncriptar() {
    var textarea = document.getElementById('textoEncriptar');
    var textoIngresado = textarea.value;
    var textoMostrado = document.getElementById('textoMostrado');

    // trim() elimina los espacios en blanco al inicio y al final del texto
    if (textoIngresado.trim() === '') {
        alert('El textarea está vacío. Por favor, ingrese un texto.');
    } else {
        desaparecer();
        textoEncriptado = encriptar(textoIngresado);
        console.log(textoIngresado);
        textoMostrado.textContent = textoEncriptado;
        console.log(textoIngresado);
    }
    
}

function btnDesencriptar() {
    var textarea = document.getElementById('textoEncriptar');
    var textoIngresado = textarea.value;
    var textoMostrado = document.getElementById('textoMostrado');

    // trim() elimina los espacios en blanco al inicio y al final del texto
    if (textoIngresado.trim() === '') {
        alert('El textarea está vacío. Por favor, ingrese un texto.');
    } else {
        desaparecer();
        textoEncriptado = desencriptar(textoIngresado);
        console.log(textoIngresado);
        textoMostrado.textContent = textoEncriptado;
        console.log(textoIngresado);
    }

}

botonEncriptar.addEventListener('click', btnEncriptar);
botonDesencriptar.addEventListener('click', btnDesencriptar);

