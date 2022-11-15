alert(`Bienvenido a Mendoza Organic`);

let totalCarro = 0;
let seguirComprando = true;
let decision;
let pago;
let metodoDePago;
function cuotas() {
  metodoDePago = parseInt(
    prompt(
      `Su Total es ${totalCarro}, Elija su metodo de pago: 1. Efectivo(15% descuento) 2.MercadoPago 3.Tarjeta de Credito (3 cuotas sin interes)`
    )
  );
  if (metodoDePago === 1) {
    pago = "efectivo pagando solamente $ " + totalCarro * 0.85;
  } else if (metodoDePago === 2) {
    pago = "mercadopago, pagando el total sin descuento de $ " + totalCarro;
  } else if (metodoDePago === 3) {
    pago =
      "con tarjeta de credito en 3 cuotas sin interes de " +
      (totalCarro / 3).toFixed(2);
  } else {
    metodoDePago = alert("Ingrese un metodo de pago correcto");
    return cuotas();
  }
  alert(`El total de su compra es ${totalCarro} y su forma de pago es ${pago}`);
}

const productosExistenes = [];

class Producto {
  constructor(numero, nombre, precio) {
    this.numero = numero;
    this.nombre = nombre;
    this.precio = precio;
  }
}
const frutillas = new Producto(1, "Frutillas", 200);
productosExistenes.push(frutillas);
const lechugas = new Producto(2, "Lechugas", 100);
productosExistenes.push(lechugas);
const tomates = new Producto(3, "Tomates", 150);
productosExistenes.push(tomates);
const manzanas = new Producto(4, "Manzanas", 50);
productosExistenes.push(manzanas);
const yerba = new Producto(5, "Yerba Mate", 200);
productosExistenes.push(yerba);
const te = new Producto(6, "Te", 100);
productosExistenes.push(te);
const harina = new Producto(7, "Harina", 150);
productosExistenes.push(harina);
const dulce = new Producto(8, "Dulce de Membrillo", 50);
productosExistenes.push(dulce);
const jabon = new Producto(9, "Jabon", 200);
productosExistenes.push(jabon);
const shampoo = new Producto(10, "Shampoo", 100);
productosExistenes.push(shampoo);
const desodorante = new Producto(11, "Desodorante", 150);
productosExistenes.push(desodorante);
const dentifrico = new Producto(12, "Dentifrico", 50);
productosExistenes.push(dentifrico);
const vino = new Producto(13, "Vino", 200);
productosExistenes.push(vino);
const cerveza = new Producto(14, "Cerveza", 100);
productosExistenes.push(cerveza);
const jugo = new Producto(15, "Jugo", 150);
productosExistenes.push(jugo);
const tehelado = new Producto(16, "Te Helado", 50);
productosExistenes.push(tehelado);
console.log(productosExistenes);

const articulos = productosExistenes.filter((frutas) => frutas === frutillas );
console.log(articulos)




let rubro = parseInt(
  prompt(
    "Selecione el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
  )
);

while (seguirComprando === true) {
  if (rubro === 1) {
    let producto1 = parseInt(
      prompt("Seleccione 1.Frutillas 2. Lechugas 3.Tomates 4.Manzanas")
    );
    const productoEscogido1 = productosExistenes.find(
      (producto) => producto.numero === producto1
    );
    if (productoEscogido1) {
      totalCarro = totalCarro + productoEscogido1.precio;
    } else {
      rubro = parseInt(
        prompt(
          "Selecione correctamente el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
        )
      );
      continue;
    }
  } else if (rubro === 2) {
    let producto2 = parseInt(
      prompt("Seleccione 5.Yerba Mate 6.Te 7.Harina 8.Dulce de Membrillo")
    );
    const productoEscogido2 = productosExistenes.find(
      (producto) => producto.numero === producto2
    );
    if (productoEscogido2) {
      totalCarro = totalCarro + productoEscogido2.precio;
    } else {
      rubro = parseInt(
        prompt(
          "Selecione correctamente el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
        )
      );
      continue;
    }
  } else if (rubro === 3) {
    let producto3 = parseInt(
      prompt("Seleccione 9.Jabon 10.Shampoo 11.Desodorante 12.Dentifrico")
    );
    const productoEscogido3 = productosExistenes.find(
      (producto) => producto.numero === producto3
    );
    if (productoEscogido3) {
      totalCarro = totalCarro + productoEscogido3.precio;
    } else {
      rubro = parseInt(
        prompt(
          "Selecione correctamente el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
        )
      );
      continue;
    }
  } else if (rubro === 4) {
    let producto4 = parseInt(
      prompt("Seleccione 13.Vino 14.Cerveza 15.Jugos 16.Te Helado")
    );
    const productoEscogido4 = productosExistenes.find(
      (producto) => producto.numero === producto4
    );
    if (productoEscogido4) {
      totalCarro = totalCarro + productoEscogido4.precio;
    } else {
      producto4 = parseInt(
        prompt(
          "Selecione correctamente el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
        )
      );
      continue;
    }
  }
  decision = parseInt(prompt("Quieres seguir comprando? 1.Si 2.No"));
  if (decision === 1) {
    rubro = parseInt(
      prompt(
        "Selecione el rubro que desea comprar: 1.Frutas/Verduras 2.Almacen 3.Aseo personal 4.Bebidas"
      )
    );
  } else {
    seguirComprando = false;
  }
}
cuotas();
alert("Gracias por elegirnos, vuelva pronto!");
