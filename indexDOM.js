class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    
  }
}
const productosExistenes = [];

const frutillas = new Producto(1, "Frutillas", 200, "https://img.freepik.com/vector-gratis/mano-dibujada-fresa-fruta_53876-2981.jpg?auto=format&h=200" );
productosExistenes.push(frutillas);
const lechugas = new Producto(2, "Lechugas", 75, "https://static.vecteezy.com/system/resources/thumbnails/007/630/515/small/lettuce-green-leafy-vegetables-for-a-healthy-salad-vector.jpg" );
productosExistenes.push(lechugas);
const tomates = new Producto(3, "Tomates", 85, "https://img.freepik.com/vector-gratis/ilustracion-grafica-tomates-rojos-saludables_53876-8465.jpg?auto=format&h=200");
productosExistenes.push(tomates);
const manzanas = new Producto(4, "Manzanas", 100, "https://static.vecteezy.com/system/resources/thumbnails/005/170/799/small/red-apple-with-apple-slices-and-leaves-vitamins-healthy-food-fruit-on-a-white-background-realistic-3d-illustration-vector.jpg");
productosExistenes.push(manzanas);
const yerba = new Producto(5, "Yerba Mate", 250, "https://elbanquito.com.ar/wp-content/uploads/2020/06/roapipo-yerba-mate-fuerte-organica-banquito-market-200x200.jpg");
productosExistenes.push(yerba);
const te = new Producto(6, "Te", 150, "https://cdn.newgarden.com.ar/media/catalog/product/cache/2c6bb79cdc244165cc50f4324466eb9d/t/e/te-verde-organico.jpg");
productosExistenes.push(te);
const harina = new Producto(7, "Harina", 150, "https://elbanquito.com.ar/wp-content/uploads/2020/09/brotes-harina-integral-organica-x-1-kg-el-banquito-market-200x200.jpg");
productosExistenes.push(harina);
const dulce = new Producto(8, "Dulce de Membrillo", 300, "https://http2.mlstatic.com/D_NQ_NP_810718-MLA52198236694_102022-V.jpg");
productosExistenes.push(dulce);
const jabon = new Producto(9, "Jabon", 300, "https://elbanquito.com.ar/wp-content/uploads/2020/08/bariloche-silvestre-jabon-de-tocador-de-rosa-mosqueta-x-130-grs-el-banquito-market-200x200.jpg");
productosExistenes.push(jabon);
const shampoo = new Producto(10, "Shampoo", 800, "https://cdn.newgarden.com.ar/media/catalog/product/cache/f1e87191ad4fbadc602f34ed83daeecc/c/a/calendula.jpg");
productosExistenes.push(shampoo);
const desodorante = new Producto(11, "Desodorante", 450, "https://cdn.shopify.com/s/files/1/0006/3422/4693/products/LAVENDER_AMBER_b2168f82-43ba-4ed4-9a97-fc7fa32f609a_200x.png?v=1605112643");
productosExistenes.push(desodorante);
const dentifrico = new Producto(12, "Dentifrico", 300, "https://cdn.newgarden.com.ar/media/catalog/product/cache/f1e87191ad4fbadc602f34ed83daeecc/p/a/pasta_dentrifica_de_ratania_weleda_x_75_ml.jpg");
productosExistenes.push(dentifrico);
const vino = new Producto(13, "Vino", 1000, "https://elbanquito.com.ar/wp-content/uploads/2020/06/Medanos-Vino-Bonarda-750Ml-el-banquito-market-200x200.jpg");
productosExistenes.push(vino);
const cerveza = new Producto(14, "Cerveza", 350, "https://birrapedia.com/img/modulos/cerveza/aad/allende-witbier_14957104199635_t.jpg");
productosExistenes.push(cerveza);
const jugo = new Producto(15, "Jugo", 250, "https://images.rappi.com.ar/products/349747382776_vqvgkgfmbzik_412573079238_dcnofqesikkn_29005_1.jpeg?d=200x200&e=webp");
productosExistenes.push(jugo);
const tehelado = new Producto(16, "Te Helado", 150, "https://images-na.ssl-images-amazon.com/images/I/61U2N7ZAbCL._AC_UL200_SR200,200_.jpg");
productosExistenes.push(tehelado);

const divProductos = document.getElementById("divProductos");

productosExistenes.forEach((productosExistenes) => {
  divProductos.innerHTML += `

    <div id=${productosExistenes.id} class="card mb-5" style="width: 18rem;">
    <img src="${productosExistenes.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${productosExistenes.nombre}</h5>
    <p class="card-text"> Precio ${productosExistenes.precio}</p>
    <button id=${productosExistenes.id} class="btn btn-primary botonesadd">Añadir</button>
    </div>
    </div>
    `;
});

const carritoCompra = JSON.parse(localStorage.getItem("carrito"))  ||  [];
const botonesAdd = document.querySelectorAll(".botonesadd");

botonesAdd.forEach((boton) => {
  boton.onclick = () => {
    const productoSeleccionado = productosExistenes.find(
      (p) => p.id === parseInt(boton.id)
    );
    const productoCarrito = { ...productoSeleccionado, cantidad: 1 };

    const indexCarrito = carritoCompra.findIndex(
      (p) => p.id === productoCarrito.id
    );
    if (indexCarrito === -1) {
      carritoCompra.push(productoCarrito);
    } else {
      carritoCompra[indexCarrito].cantidad++;
    }
    localStorage.setItem("Carrito", JSON.stringify(carritoCompra))
    console.log(carritoCompra)
  };
});
const botonFinal = document.getElementById("finalizar")
botonFinal.onclick = () => {
    const precioFinal = carritoCompra.map (p=>p.precio * p.cantidad)
    let totalCompra = 0
    precioFinal.forEach (precio=>{
        totalCompra += precio
    })
    console.log(totalCompra)

}