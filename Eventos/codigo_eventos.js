let h1=document.querySelector("h1");
let numero1=document.querySelector("#num1");
let numero2=document.querySelector("#num2");
let boton=document.querySelector("#calcular");
let semuestra=document.querySelector(".resultado");


function sumar(){
    let resultado=parseInt(numero1.value)+parseInt(numero2.value);
    console.log(resultado);
    semuestra.innerHTML=resultado;
}

