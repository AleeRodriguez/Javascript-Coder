//retorna una funcion o recibe una funcion por parametro 

/*
function rara(x){
    return x +2
}
let resultado = rara(4);
console.log(resultado);

version flecha 

const rara = (x) => {
    return x*x
;}
*/
 
/* funcion anidada 
function porCadaUno(arr, fn){
    for (const el of arr){
        fn(el){
            console.log(el);
        }
    }
}
porCadaUno([1,2,3,4], alert);
es lo mismo decir 

function porCadaUno(arr){
    for (let i=0; i < arr.length; i++){
        alert(arr[i]);
        console.log(arr[i]);
    }
}


ejemplo

function tripleConsoleLog(x){
    console.log(x);
    console.log(x);
    console.log(x);
}
tripleConsoleLog(48);
resultado 
48
48
48

*/

/* FOR EACH = Por cada uno

let myArray = [1,2,3,4,5]

myArray.forEach( (item) => {
    console.log(item);
});

daria 
1
2
3
4
5

*/

/* FIND = Busca en base a una comparacion

let numeros= ["monica", "raul", "guille"];
const alumnoParaEncontrar = "facundo"
const encontrado = numeros.find(item=>item == alumnoParaEncontrar);
console.log(encontrado);
*/


/*FILTER = filtrado 

let alumnos = [
    { nombre: "monica", edad: 20},
    { nombre: "guille", edad: 40},
    { nombre: "esteban", edad: 10},
    { nombre: "raul", edad: 30},

];
const filtrados = alumnos.filter((alumno)=> alumno.nombre =="raul");
console.log(filtrados);
Resultado me tira por consola todos los raul */

/* SOME = si encuentra algun elemento que cumpla alguna condicion

let alumnos = [
    { nombre: "monica", edad: 20},
    { nombre: "guille", edad: 40},
    { nombre: "esteban", edad: 10},
    { nombre: "raul", edad: 30},

const hayAlguno = alumnos.some ((alumno)=> alumno.nombre =="monica")
console.log(hayAlguno)
Resultado: True o false depende la busqueda
*/


/* MAP cmabia el array por otro contenido (Se usa para sacar lo que
    no quiero ) 

const cursos = [
{nombre: 'Javascript', precio: 15000},
{nombre: 'ReactJS', precio: 22000},
{nombre: 'AngularJS', precio: 22000},
{nombre: 'Desarrollo Web', precio: 16000},
]
const nombres = cursos.map((el) => el.nombre)
console.log(nombres)*/

/* REDUCE el array a un solo numero 
const miCompra = [
    {nombre: "Desarrollo Web", precio: 20000},
    {nombre: "Javascript", precio: 15000},
    {nombre: "ReactJS", precio: 23000},
]

const total = miCompra.reduce((total, el) => total + el.precio, 0);
console.log(total);

total = 0;
total= 0 + 20000
total = 0 + 20000 + 15000; 
total = 0 + 20000 + 15000 + 23000; 
total = 58000
*/

/* SORT destruye y cambia el array. 
