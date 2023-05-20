
let contenedores = document.getElementsByClassName("contenedor");

let arrayContenedores = Array.from(contenedores);

arrayContenedores.map(
    (elementoDentroDelArray, i) => {

        elementoDentroDelArray.addEventListener("mouseover", ()=> {
            elementoDentroDelArray.classList.add("cercle");
        })        

        elementoDentroDelArray.addEventListener("mouseout", ()=> {
            elementoDentroDelArray.classList.remove("cercle");
        })        
    } 
);


const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

const colorElements = colors.map((color, index) => {
    return <div style={{ backgroundColor: color }}>{color}</div>;
});
