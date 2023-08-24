// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "nuevo elemento string de prueba", // Lo cree para mostrar que cambia si se agrega un nuevo elemento String
  "JavaScript",
];

function showList(array) {
  
  // Donde se mostrarán los elementos
  const container = document.getElementById("list"); 
  container.innerHTML = "";

  // Crea nuevo arreglo solo con los datos string
  const newArray = array.filter(function (dato) { 
    return typeof dato === 'string';
  })
  
  // Los ordena como si todos los elementos estuviesen en minúsculas
  newArray.sort(function(a, b) { 
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  // Muestra la nueva lista solo con strings
  newArray.forEach((element) => { 
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {

  showList(strangeArray);

});