var btnEncriptar = document.querySelector(".btn_Encriptar");
var btnDesencriptar = document.querySelector(".btn_Desencriptar");
var mono = document.querySelector(".contenedor_Img");
var contenedor = document.querySelector(".contenedor_Parrafo");
var resultado = document.querySelector(".texto_Resultado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    mono.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    

    let encriptado = texto.replace(/e/img, "enter")
    .replace(/o/img, "ober")
    .replace(/i/img, "imes")
    .replace(/a/img, "ai")
    .replace(/u/img, "ufat");
    
    return encriptado;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    let desencripta = texto.replace(/enter/img, "e")
    .replace(/ober/img, "o")
    .replace(/imes/img, "i")
    .replace(/ai/img, "a")
    .replace(/ufat/img, "u");
    return desencripta;
}

const btnCopiar = document.querySelector(".btn_Copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_Resultado").textContent;
    navigator.clipboard.writeText(contenido);
    

})