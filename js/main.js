

let colorpickers = document.getElementsByClassName("colorpicker");
let colorsSelected = document.getElementsByClassName("colorSelected");

let arrayColor = Array.from(colorpickers);
let arrayColor1 = Array.from(colorsSelected);


if (arrayColor.length === arrayColor1.length) {
        arrayColor.map((elementoDentroDelArray, i) => {
            elementoDentroDelArray.addEventListener("click", () => {
            elementoDentroDelArray.querySelector("input[type='color']").click();
    });
        elementoDentroDelArray.addEventListener("input", (event) => {
            const colorSelector = event.target.value;
            arrayColor1[i].style.backgroundColor = colorSelector;
        });
    });
} else {
    console.log("La cantidad de colores seleccionados no coincide.");
}








