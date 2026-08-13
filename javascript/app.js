const API_KEY = 'ci_ae8b022f9ae1195e8d0ddfa2499dd337ee44bb70bd8a3dbfd50266c1';
const API_SECRET = 'e70149ae16d1731ae1a81da5b807162b17c6c42fe537fb8fdf7f6e9b7ea34094';

async function traerMotos(marcas, porMarca = 15) {
  const motos = [];

   for (const marca of marcas) {
     const url = `https://carimagesapi.com/api/v1/motos/makes/${marca}/models?api_key=${API_KEY}&limit=${porMarca}`;
     const res = await fetch(url, { headers: { 'X-Api-Secret': API_SECRET } });

     if (!res.ok) {
       console.warn(`${marca}: HTTP ${res.status}`);
       continue;
     }

     const json = await res.json();

     for (const modelo of json.data) {
       if (!modelo.thumbnail) continue;
       motos.push({
         marca: json.make.name,
         modelo: modelo.name,
         categoria: modelo.category,
         cilindraje: modelo.displacement,
         imagen: modelo.thumbnail
       });
     }
   }

   return motos;
 }

 traerMotos(['ducati', 'yamaha', 'honda', 'bmw', 'ktm'])
   .then(motos => {
     console.log('Total motos:', motos.length);
     console.log('Primera moto:', motos[0]);
     console.table(motos);
   });



//Diego
//CONTADOR
//Definir variables
let cantidad = 0;
const precio = 10; /*Precio del producto*/
//DOM
const botonEliminarDelCarrito = document.getElementById(`eliminarDelCarrito`);
// console.log(botonEliminarDelCarrito);
const botonAgregarAlCarrito = document.getElementById(`agregarAlCarrito`);
const cantidadSpn = document.getElementById("cantidad");
const total = document.getElementById("total");
//Función
function actualizarContador() { //Para actualizar
  cantidadSpn.textContent = cantidad;
  const totalOperacion = cantidad * precio;
  total.textContent = `Total $${totalOperacion.toFixed(2)}`;
}
//Disminuir
botonEliminarDelCarrito.addEventListener("click", () => {
  if (cantidad > 0) {
    cantidad--;
    actualizarContador();
  }
});
//Incrementar
botonAgregarAlCarrito.addEventListener("click", () => {
  (cantidad > 1); {
    cantidad++;
    actualizarContador();
  }
});

//Diego