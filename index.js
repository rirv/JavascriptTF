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
    if (producto1 === 1) {
      totalCarro = totalCarro + 200;
    } else if (producto1 === 2) {
      totalCarro = totalCarro + 100;
    } else if (producto1 === 3) {
      totalCarro = totalCarro + 150;
    } else if (producto1 === 4) {
      totalCarro = totalCarro + 50;
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
      prompt("Seleccione 1.Yerba Mate 2.Te 3.Harina 4.Dulce de Membrillo")
    );
    if (producto2 === 1) {
      totalCarro = totalCarro + 200;
    } else if (producto2 === 2) {
      totalCarro = totalCarro + 100;
    } else if (producto2 === 3) {
      totalCarro = totalCarro + 150;
    } else if (producto2 === 4) {
      totalCarro = totalCarro + 50;
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
      prompt("Seleccione 1.Jabon 2.Shampoo 3.Desodorante 4.Dentifrico")
    );
    if (producto3 === 1) {
      totalCarro = totalCarro + 200;
    } else if (producto3 === 2) {
      totalCarro = totalCarro + 100;
    } else if (producto3 === 3) {
      totalCarro = totalCarro + 150;
    } else if (producto3 === 4) {
      totalCarro = totalCarro + 50;
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
      prompt("Seleccione 1.Vino 2.Cerveza 3.Jugos 4.Te Helado")
    );
    if (producto4 === 1) {
      totalCarro = totalCarro + 200;
    } else if (producto4 === 2) {
      totalCarro = totalCarro + 100;
    } else if (producto4 === 3) {
      totalCarro = totalCarro + 150;
    } else if (producto4 === 4) {
      totalCarro = totalCarro + 50;
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
