// Tenemos un li de productos

//lista de productos, arreglo de objetos tipo json
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

//llamada de el elemento div en el HTML y el input($i)
const li = document.getElementById("lista-de-productos")//error aquí se uso un método no útil, es por Id no por name
const $i = document.querySelector('input');//se solicita una class pero en su lugar debería ser un tag name

//función displayProductos
function displayProductos(productos) {
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}
}//displayProductos


//función de filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

//llamada de la función para desplegar los productos
displayProductos(productos)

//llamada del botón de filtrado
const botonDeFiltro = document.querySelector("button");

//evento click en el botón
botonDeFiltro.onclick = function() {

  //limpieza de pantalla
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  //Filtrar elementos por su nombre
  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  //Generar los elementos resultados del filtro
  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}//botón de filtrado 
