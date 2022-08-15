

console.log("Bienvenidos a Comidas para oficina (CPO)! ")
alert("Bienvenidos a Comida para oficina (CPO)!")

class diario{
    constructor(dia,precio,producto,disponibilidad){
        this.dia = dia 
        this.precio = precio
        this.producto = producto 
        this.disponibilidad = disponibilidad
    }
}
let dia1= new diario ('Lunes', 700, 'Pechuga grille con vegetales salteados',true)
let dia2= new diario ('Martes', 700, 'Lomo al horno con batatas dulces',false)
let dia3= new diario ('Miercoles', 700, 'Milanesa de soja con pure de zanahoria',false)
let dia4= new diario ('Jueves', 700, 'Tarta de zapallito con ensalada a eleccion',true)
let dia5= new diario ('Viernes', 700, 'Escalope con pure',true)
let dia6= new diario ('Sabado', 900, 'Asado con fritas o Vegetales al vapor',true)
let dia7= new diario ('Domingo', 700, 'Pastas del dia con salsa bolognesa o mixta',true) 

const semanal = []
semanal.push(dia1,dia2,dia3,dia4,dia5,dia6,dia7)
console.log(semanal)

let ingreso = prompt("Ingresa que dia deseas comprar: \n Lunes \n Martes \n Miercoles \n Jueves \n Viernes \n Sabado \n Domingo \n")
let dia = semanal.filter(diario => diario.dia == ingreso)
console.log("Dia a comprar:" +" " + ingreso)
alert("Dia a comprar:" +" " + ingreso)

function agregarDiaEspecial(){
    let diaespecial = prompt("Ingresa que dia deseas agregar")
    let precioespecial = Number("Ingresa un precio de ese dia")
    let productoespecial = prompt("Ingresa que deseas comer ese dia")
    let disponibilidadespecial = confirm("Ingrese si esta disponible")
    let especialdia = new diario(diaespecial,precioespecial,productoespecial,disponibilidadespecial)
    semanal.push(especialdia)
    console.log(semanal)
}

let cargarDiaEspecial = prompt("Deseas agregar/o modificar un dia especial?").toLocaleLowerCase()

while(cargarDiaEspecial == "si"){
    agregarDiaEspecial()
    cargarDiaEspecial = prompt("Deseas agregar/o modificar un dia especial?").toLocaleLowerCase()

}

alert("Tu compra es: ", " " + ingreso + cargarDiaEspecial)
alert("Muchas Gracias!! ")



