const inputTexto = document.querySelector ("#ingresa-texto");
const mensaje = document.querySelector ("#msg");
inputTexto.focus()

function btnEncriptar () {

    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar (stringParaEncriptar) {

    let matrizCodigo = [["e", "entrer"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
   
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
            
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringParaEncriptar;  
}

function btnDesencriptar () {

    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function desencriptar (stringParaDesencriptar) {

    let matrizCodigo = [["entrer", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]]
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
   
    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if (stringParaDesencriptar.includes(matrizCodigo[i][0])) {
            
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringParaDesencriptar;  
}

function copiarTexto () {
    
    mensaje.select()
    document.execCommand("cut")
    inputTexto.value = ""
    alert("¡Mensaje copiado!")
}

document.write("© Desarrollado por Fede, Gonza y Yan - 2022")










/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/