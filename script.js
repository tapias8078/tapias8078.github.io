const txtMensaje = document.getElementById("txtMensaje");
const txtResultado = document.getElementById("txtResultado");

const encriptarDesencriptar = (accion) => {
const frase = txtMensaje.value.toLowerCase();
let resultado = document.getElementById("resultado");
let sinMsj = document.getElementById("sin-msj");


let fraseModificada = frase;
if (accion === "encriptar") {
  
  if(txtMensaje.value != 0){  
    resultado.style.display = "flex";
    sinMsj.style.display = "none";
    fraseModificada = frase.replace(/e/g, "enter");
    fraseModificada = fraseModificada.replace(/o/g, "ober");
    fraseModificada = fraseModificada.replace(/i/g, "imes");
    fraseModificada = fraseModificada.replace(/a/g, "ai");
    fraseModificada = fraseModificada.replace(/u/g, "ufat");
    
  }else{
    
    resultado.style.display = "none";
    sinMsj.style.display = "flex";
    alert("Ingrese un mensaje");
  }
} else if (accion === "desencriptar") {  
  if(txtMensaje.value != 0){
    resultado.style.display = "flex";
    sinMsj.style.display = "none";
    fraseModificada = frase.replace(/enter/g, "e");
    fraseModificada = fraseModificada.replace(/ober/g, "o");
    fraseModificada = fraseModificada.replace(/imes/g, "i");
    fraseModificada = fraseModificada.replace(/ai/g, "a");
    fraseModificada = fraseModificada.replace(/ufat/g, "u");    
  }else{
    
    resultado.style.display = "none";
    sinMsj.style.display = "flex";
    alert("Ingrese un mensaje");
  }

}

txtResultado.innerHTML = fraseModificada;
};

const copiarTexto = () => {
    let mensaje = document.querySelector("#txtResultado");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch((error) => {
        alert('Error al copiar el texto: ', error);
      });
  };

document.querySelector("#btnEncriptar").addEventListener("click", () => {
encriptarDesencriptar("encriptar");
  
});

document.querySelector("#btnDesencriptar").addEventListener("click", () => {
encriptarDesencriptar("desencriptar");
});

document.querySelector("#btnCopiar").addEventListener("click",()=>{
copiarTexto();
})