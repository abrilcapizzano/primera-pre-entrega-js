class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
}
let valorTotal;
const productos = [];
productos.push( new Producto("Remera", 300, 1))
productos.push( new Producto("Pantalon", 500, 2))
productos.push(  new Producto("Camisa", 400, 3))
productos.push(new Producto("Campera", 600, 4))
const carrito = [];
let seguirComprando;
const agregarProdutos = () => {
    const nombre = prompt('Ingrese el nombre del producto')
    const precio = Number(prompt('Ingrese el precio del nuevo producto'))
    const id = Number(prompt('Ingrese el ID del nuevo producto'))
    productos.push(new Producto(nombre, precio, id))
}
let typeUser = confirm('Eres admin?')
if (typeUser) {
    agregarProdutos()
    alert('Listo, el producto fue agregado!')
} else {
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
}
if (seguirComprando === false) {
    valorTotal = carrito.reduce((valorAcc, item) => { return valorAcc + item.precio; }, 0);
    alert('Gracias por tu compra! El valor total es: ' + valorTotal)
}