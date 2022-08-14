var encrypt_button = document.getElementById("encrypt");
var decrypt_button = document.getElementById("decrypt");
var copy_button = document.getElementById("copy");
var valid_chars = /^[a-z\s]*$/;

function onClickEncrypt() {

    //Obtener texto ingresado
    let input_text = getTextArea().value;

    //Verificar que hay algo para encriptar
    if (checkEmpty(input_text)) {
        alert("No hay nada para encriptar!");
        return;
    }

    //Mostrar Div que contiene texto encriptado
    document.getElementById("right-with-text").style.display = 'flex';

    //Ocultar Div que contiene imagen inicial y texto inicial
    document.getElementById("right-without-text").style.display = 'none';

    //Encriptar Texto
    encrpyt(input_text);

    //Limpiar textarea
    clearText(getTextArea());



}

// Obtener objeto textArea (contiene el texto ingreso para encriptar-desencriptar)
function getTextArea() {
    var textarea = document.getElementById("input-text");
    return textarea;
}

//Limpiar textArea
function clearText(textArea) {
    textArea.value = "";
}

//Encriptar mensaje
function encrpyt(text) {
    if (valid_chars.test(text)) {
        let encrypted_text = "";
        for (let i = 0; i < text.length; i++) {
            let letter = text.charAt(i);

            if (letter == 'a') letter = 'ai';
            if (letter == 'e') letter = 'enter';
            if (letter == 'i') letter = 'imes';
            if (letter == 'o') letter = 'ober';
            if (letter == 'u') letter = 'ufat';
            encrypted_text += letter;
        }

        showText(encrypted_text);
    } else {
        alert("Solo se permiten letras minusculas y sin acentos!");
    }

}

//Mostrar texto desencriptado-encriptado
function showText(text) {
    let output_paragraph = document.getElementById("output-text");
    output_paragraph.innerHTML = text;

}

function checkEmpty(text) {
    return text == "";
}

function onClickDecrypt() {
    
    //Obtener texto ingresado
    let input_text = getTextArea().value;

    //Verificar que hay algo para desencriptar
    if (checkEmpty(input_text)) {
        alert("No hay nada para desencriptar!");
        return;
    }
    decrypt(input_text);
    clearText(getTextArea());
}

//Desencripta el texto
function decrypt(text) {
    let decrypted_text = "";
    let i = 0;
    while (i < text.length) {
        let letter = text.charAt(i);
        if (letter == 'a') i += 2;
        else if (letter == 'e') i += 5;
        else if (letter == 'i') i += 4;
        else if (letter == 'o') i += 4;
        else if (letter == 'u') i += 4;
        else i++;

        decrypted_text += letter;
    }
    showText(decrypted_text);
}

function copyToClickboard() {
    let output_paragraph = document.getElementById("output-text");
    navigator.clipboard.writeText(output_paragraph.innerHTML);

}

decrypt_button.onclick = onClickDecrypt;
encrypt_button.onclick = onClickEncrypt;
copy_button.onclick = copyToClickboard;