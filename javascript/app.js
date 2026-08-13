function TraerMotos(done){
    const results = fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2020?format=json")

    results
    .then(response =>response.json())
    .then(data =>{
      console.log(data);
      done(data)
    });
}

const imagenesMotos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFy3hlDSYVQTAOFj7x7GjeJBjjzjMil7t7KsW3W08cQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUaMeYQcCfp0O5bOWPyHgdQFMFw9rxh9VPYxLlhqeeQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHenh4NQ0-yqxbOahavN4AA80soOzFkQA1RROZ0MttCg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbessHH6TYWQ1gPsosB6WbMZ6AthrrmKgLm2webZNJw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq-Mb0QEVZE3qx0cXfEUcEseZVxNQ3ikQ9afMHqQ8Fhg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpR8jZAcmnWxkNJT-WPKcV3TfhORx3febNsUfSE8x_fEbpeIowBsT0A-k&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_CHAqZTEmSq41ay37jATbQ6MU2PXDLZ5LtusEhqEtUfthfLsoNgOcf4&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP0L0_uXgqDH_RS35_mqSusMTio_QPskhHRdZFP_t3qy8-RoWqjFVjoni&s=10",
    "https://yamahadisyamotos.com.co/wp-content/uploads/2023/05/XTZ-2.jpg",
    "https://motor1.com.co/wp-content/uploads/2020/06/XTZ250-Arena.png",
    "https://img.asmedia.epimg.net/resizer/v2/JUXBYRUJIFCQLKXIC6MPEXKHJU.jpeg?auth=7828cd39116ca428159230b52733fc5d487b99080fe619839ce40ec87fb2c1b3&width=1472&height=1104&focal=426%2C446",
    "https://zetter.com.mx/wp-content/uploads/2022/04/bat-carabela-motocicleta-de-trabajo.jpeg",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2022/04/t7Rally26.jpg",
    "https://kayencorp.com/wp-content/uploads/2025/09/moto-scooter-milano-con-diseno-vintage-scaled.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcf3gHj4AHzHWU7ZWnT1sn1G67yoX3d1AfwNYXKAGVDQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPz1Lc8uXER_uVQ_-S4Wt-K32cVBJH-sUJBSb7SKTaA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSba5ESRy0Ec-Jpuk9xkmn8EFcVoim1pqbOd8Brjga-_A&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqIeOBz4-8Axm58RI60Pl7-taEHqFPyG0rz2gEHtT6A&s=10",
    "https://www.carroya.com/noticias/sites/default/files/motos_nuevas_bogota_carroya_.webp",
    "https://ciudadmovilcolombia.com/wp-content/uploads/2025/09/PIXEL-PORTADA.png",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2024/08/XMAXREDDISH_carrusel.png",
    "https://iprorwxhnpjrlj5q.ldycdn.com/cloud/piBpiKkolnSRolknkpoikp/01.jpg",
    "https://images.ctfassets.net/8zlbnewncp6f/5745ztSmkSrYjMvip2rnQQ/d72ad39b8c9db8550a35ed5e68024337/mt15_aguamarina.jpg?w=600&fm=webp&q=90",
    "https://s.alicdn.com/@sc04/kf/H71c4f92fdeba4d169459383a527a55baI/High-Cost-Performance-Mini-Dirt-Bike-Electric-Kids-Cross-Bike-for-11-Years-Boy.jpg",
    "https://potenza.com.co/wp-content/uploads/2024/03/558991-my24-ktm-990-duke-orange-eu-global-front-right-studio-global-europe-studio-risultato-jpg.webp",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/sz_gris_verde-1.jpg",
    "https://www.incolmotos-yamaha.com.co/wp-content/themes/yamaha/img/lineaTiempo/motocentro4.png",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2024/02/fz15ve_azul.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSqaqEJQ87EeLeb3DlIoTKYVqTzfZuJR68z0JujPqJuOTIlYnfNYpY5w&s=10",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/Azul-5-1.jpg",
    "https://www.motofichas.com/images/cache/10-yamaha-mt-09-2024-estudio-gris-cyan-01-398-a-mobile.jpg",
    "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2025/02/Mt09_2024_gris_carrusel-1.png",
    "https://autocdn.co.uk/cdn-cgi/imagedelivery/JC4X6oe6GKVO4ZI4xd1Czg/2d8d8cbf-ac1d-4c01-5b6c-b84b04731500/raw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivBOudhr-m7h-j-G1ERF92TJhpAlzYqfKATfQz0kuCV0e60jpf93DzYki&s=10",
    "https://www.colcamer.com/wp-content/uploads/2024/07/Pulsar-ns-200-ngra-02.webp"
    // ... hasta 15
];

function obtenerImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * imagenesMotos.length);
    return imagenesMotos[indiceAleatorio];
}

TraerMotos(data => {
  const primerasDiez = data.Results.slice(0, 15);
    primerasDiez.forEach(moto => {
        //const imagenPersonaje = personaje.image || "https://cdn-icons-png.flaticon.com/256/2817/2817375.png";
        const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src=${obtenerImagenAleatoria()}>
            </div>
            <hr></hr>
            <h3>${moto.Model_Name} ${moto.Make_Name}</h3>
            <button id="eliminarDelCarrito">Eliminar del carrito</button>
            <button id="agregarAlCarrito">Agregar al carrito</button>
        </article>
        `);

        const contenedor = document.querySelector(".product-grid");;

        contenedor.append(article);
    });
});