


class diario{
    constructor(dia,precio,producto){
        this.dia = dia 
        this.precio = precio
        this.producto = producto 
    }
}

let dia1= new diario ('Lunes', 700, 'Pechuga grille con vegetales salteados')
let dia2= new diario ('Martes', 700, 'Lomo al horno con batatas dulces')
let dia3= new diario ('Miercoles', 700, 'Milanesa de soja con pure de zanahoria')
let dia4= new diario ('Jueves', 700, 'Tarta de zapallito con ensalada a eleccion')
let dia5= new diario ('Viernes', 700, 'Escalope con pure')
let dia6=new diario  ('Sabado', 900, 'Asado con fritas o Vegetales al vapor')
let dia7=new diario  ('Domingo', 700, 'Pastas del dia con salsa bolognesa o mixta') 

const semanal = []
semanal.push(dia1,dia2,dia3,dia4,dia5,dia6,dia7)

console.log(semanal)