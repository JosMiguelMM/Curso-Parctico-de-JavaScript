let h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoid = document.querySelector('#parrafoId');
const parrafo = document.querySelector('.parrafo');
const input = document.querySelector('input');

console.log(h1);
console.log(p);
console.log(parrafoid);
console.log(parrafo);
console.log(input);
console.log(' ');

console.log({
    h1,
    p,
    parrafoid,
    parrafo,
    input
});

//se manipula el DOM desde JAVA SCRIPT
h1.innerHTML = 'Hola Mundo';
console.log(h1.getAttribute('pantalla'));

//se modifica id y clases desde el javascript
parrafoid.setAttribute('id', 'estilo');
parrafo.setAttribute('class', 'amarillo');

//añadir o quitar clases
h1.classList.add('Titulo1');
//h1.claasList.remove('Titulo1');

console.log(parrafo.getAttribute('class'));


//crear una imagen
let imagen=document.createElement('img');
imagen.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tornado_ECR_JaBoG_32_1997.JPEG/300px-Tornado_ECR_JaBoG_32_1997.JPEG');
console.log(imagen);

//añadir imagen al html
p.innerHTML=" ";
p.append(imagen);