class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}
let valorTotal;
const remera = new Producto("Remera",300,1);
const pantalon = new Producto("Pantalon",500,2);
const camisa = new Producto("Camisa",400,3);
const campera = new Producto("campera",600,4);
const productos = [remera, pantalon, camisa, campera];
const carrito = [];
let seguirComprando;
do {
    let inputUser = prompt('Que productos queres comprar? 1-Remera, 2-Pantalon, 3-Camisa, 4-Campera ')
    let productoSeleccionado = productos.find((item) => item.id === Number(inputUser))
    if (productoSeleccionado) {
        carrito.push(productoSeleccionado)
    } else {
        alert('Producto no encontrado')
    }
    seguirComprando = confirm('Queres seguir comprando?')
} while (seguirComprando);
if (seguirComprando === false){
    valorTotal = carrito.reduce(( valorAcc, item) => {return valorAcc + item.precio;}, 0);
    alert('Gracias por tu compra! El valor total es: ' + valorTotal )
}

