const movies = [
  
    {
      "titulo": "El Exorcista",
      "genero": "Terror",
      "imagenURL": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffoto-gratis%2Fsurtido-elementos-cine-sobre-fondo-rojo-espacio-copia_23-2148457848.jpg&tbnid=3Ru8_38PrGuzgM&vet=12ahUKEwjPp-n-342CAxW4HGIAHTDDB4cQMygCegQIARBz..i&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Ffondo-pelicula&docid=0ML7icNikNV5_M&w=626&h=352&q=fondos%20peliculas%20image&client=opera&ved=2ahUKEwjPp-n-342CAxW4HGIAHTDDB4cQMygCegQIARBz",
      "descripcion": "Una película icónica de terror que sigue la posesión demoníaca de una niña y los esfuerzos de los exorcistas para salvarla."
    },
    {
      "titulo": "Pesadilla en Elm Street",
      "genero": "Terror",
      "imagenURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQn-5WcmToAR0GwLYg0fWk0Yszx55TL8msg&usqp=CAU",
      "descripcion": "Un asesino sobrenatural persigue a los adolescentes en sus sueños, causando pesadillas mortales."
    },
    {
      "titulo": "Scary Movie",
      "genero": "Comedia",
      "imagenURL": "https://example.com/scary-movie.jpg",
      "descripcion": "Una parodia de películas de terror que utiliza el humor para burlarse de los clichés del género."
    },
    {
      "titulo": "Supercool",
      "genero": "Comedia",
      "imagenURL": "https://example.com/supercool.jpg",
      "descripcion": "Dos adolescentes intentan hacerse pasar por adultos para comprar alcohol y tener una noche inolvidable."
    },
    {
      "titulo": "Blade Runner",
      "genero": "Ciencia Ficción",
      "imagenURL": "https://example.com/blade-runner.jpg",
      "descripcion": "Un thriller de ciencia ficción ambientado en un futuro distópico donde cazadores de replicantes buscan androides rebeldes."
    },
    {
      "titulo": "Matrix",
      "genero": "Ciencia Ficción",
      "imagenURL": "https://example.com/matrix.jpg",
      "descripcion": "Un hacker descubre que la realidad que conoce es una simulación y se une a una resistencia para luchar contra las máquinas."
    },
    {
      "titulo": "El Conjuro",
      "genero": "Terror",
      "imagenURL": "https://example.com/el-conjuro.jpg",
      "descripcion": "Basada en eventos reales, sigue a dos investigadores de lo paranormal mientras luchan contra fuerzas sobrenaturales."
    },
    {
      "titulo": "Mi Pobre Angelito",
      "genero": "Comedia",
      "imagenURL": "https://example.com/mi-pobre-angelito.jpg",
      "descripcion": "Un niño es olvidado por su familia durante las vacaciones y se defiende contra ladrones caseros."
    },
    {
      "titulo": "Interestelar",
      "genero": "Ciencia Ficción",
      "imagenURL": "https://example.com/interestelar.jpg",
      "descripcion": "Un grupo de astronautas viaja a través de agujeros de gusano en busca de un nuevo hogar para la humanidad en un universo moribundo."
    },
    {
      "titulo": "The Shining",
      "genero": "Terror",
      "imagenURL": "https://example.com/the-shining.jpg",
      "descripcion": "Una familia se queda en un hotel aislado durante el invierno, donde eventos paranormales y la locura acechan."
    }
  
];

const users = [
  {
    id: 1,
    name: "Cory House",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
  {
    id: 2,
    name: "Scott Allen",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
  {
    id: 3,
    name: "Dan Wahlin",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
];

const debitCards = [
  {
    id: 1,
    authorId: 1,
    cardHolderName: "Rebecca Soto :",
    cardNumber: "9999 8888 9999 0909",
    expDate: "02/2022",
    cvc: "123",
  },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

const pourchase = [];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  movies,
  users,
  debitCards,
  pourchase,
};
