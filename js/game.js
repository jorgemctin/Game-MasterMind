
let colorpickers = document.getElementsByClassName("colorpicker");
let colorsSelected = document.getElementsByClassName("colorSelected");

let arrayColor = Array.from(colorpickers);
let arrayColor1 = Array.from(colorsSelected);


let game1 = document.getElementsByClassName("gameline1");

let arrayContenedores = Array.from(game1);

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