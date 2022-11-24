//SELECTORES QUE INDICA A QUE ELEMNTO DEL HTML ESTAMOS HACIENDO REFERENCIA
let h1=document.querySelector("h1");
const formu=document.querySelector("#formulario");
let numero1=document.querySelector("#num1");
let numero2=document.querySelector("#num2");
let boton=document.querySelector("#calcular");
let semuestra=document.querySelector("#resultadoo");

formu.addEventListener("submit",suma);
//buton.addEventListener("click",suma);

function suma(event){
    event.preventDefault();
    let resultado=parseInt(numero1.value)+parseInt(numero2.value);
    semuestra.innerHTML="El resultado es: "+resultado;
    h1.style.color="blue";
}

