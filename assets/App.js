// Datos de los batidos
const titulos = [
    "¡Descubre el Arcoíris de Sabores con Nuestros Batidos Exclusivos!",
    "Descubre el Fascinante Batido de Freijoa: Una Experiencia Única de Sabores",
"Sumérgete en la Frescura con Nuestro Irresistible Batido de Fresa",
"Explora el Mundo de Colores y Sabores con el Exclusivo Batido Rainbow",
];

const descripciones = [
    "Ennuestra búsqueda constante por deleitar tu paladar, te presentamos una tríada de deliciosos batidos que te transportarán a un mundo de sabores inigualables.\n Embárcate en un viaje de sabores extraordinarios con nuestros tres irresistibles batidos.Sumérgete en la frescura de las fresas con nuestro Batido de Fresa, explora la innovación con el sorprendente Batido de Freijoa y déjate llevar por el estallido de colores y sabores del exclusivo Batido Rainbow.Cada sorbo es una experiencia única que despierta tus sentidos. ¡Disfruta del arcoíris de sabores que hemos preparado para ti!",
    "Explora la asombrosa combinación de sabores en nuestro innovador Batido de Freijoa. Esta mezcla única te cautivará con cada sorbo, ofreciéndote una experiencia sensorial inigualable. Deleita tu paladar con la frescura y la exquisita fusión de sabores que solo nuestro Batido de Freijoa puede ofrecer. Sumérgete en este viaje sorprendente y descubre un mundo de sensaciones frescas y deliciosas. ¡No te pierdas la oportunidad de disfrutar de esta innovadora creación que despierta tus sentidos y redefine el placer de beber batidos!",
    "Sumérgete en la frescura y la dulzura irresistibles de nuestro delicioso Batido de Fresa. Explora la experiencia única de cada sorbo, donde la frescura de las fresas se mezcla armoniosamente con la suavidad y la cremosidad de nuestra receta especial. Déjate seducir por la intensidad de los sabores y disfruta de la exquisita sensación que solo nuestro Batido de Fresa puede ofrecer. Cada sorbo es un deleite para tus sentidos, una invitación a explorar un mundo de placer refrescante y auténtico. ¡Descubre el lado más delicioso de las fresas con nuestro batido único y delicioso!",
    "Déjate llevar por la magnífica explosión de colores y sabores que ofrece nuestro exclusivo Batido Rainbow. Sumérgete en un arcoíris de experiencias deliciosas, donde cada matiz y tono representan una nota de sabor única. Descubre la armonía perfecta entre ingredientes cuidadosamente seleccionados que dan vida a esta creación extraordinaria. Nuestro Batido Rainbow es mucho más que una bebida; es una celebración de la diversidad de sabores en cada sorbo. Prepárate para una experiencia sensorial vibrante y llena de alegría. ¡Disfruta de este festín de colores y sabores que despiertan tus sentidos en cada sorbo!"
];

// Función para cambiar el contenido
function cambiarContenido(index) {
    const tituloElemento = document.getElementById("batido-info").querySelector("h1");
    const descripcionElemento = document.getElementById("descripcion-batido");

    // Cambiar el título y la descripción
    tituloElemento.textContent = titulos[index];
    descripcionElemento.innerHTML = descripciones[index];
}

// Cargar contenido predeterminado al cargar la página
cambiarContenido(0);

document.getElementById("menu-btn").addEventListener("click", function () {
    cambiarContenido(0);
});

// Agregar eventos de clic a los botones
document.getElementById("feijoa-btn").addEventListener("click", function () {
    cambiarContenido(1);
});

document.getElementById("strawberry-btn").addEventListener("click", function () {
    cambiarContenido(2);
});

document.getElementById("rainbow-btn").addEventListener("click", function () {
    cambiarContenido(3);
});

// Obtener todos los elementos con la clase home-triggers
const homeTriggers = document.querySelectorAll(".home-triggers");

// Agregar eventos de clic a todos los elementos con la clase home-triggers
homeTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
        cambiarContenido(0); // Cambiar a 0 al hacer clic en cualquier elemento con la clase home-triggers
    });
});