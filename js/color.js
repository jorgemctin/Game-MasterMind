
// let arrayColor1 = Array.from(colorsSelected);

// // Verifica que haya la misma cantidad de colorpickers y colorSelected
// if (arrayColor.length === arrayColor1.length) {
//   // Itera sobre los elementos colorpicker
//         arrayColor.map((elementoDentroDelArray, i) => {
//         elementoDentroDelArray.addEventListener("click", () => {
//       // Acción que se realiza cuando se hace clic en el colorpicker
//         elementoDentroDelArray.querySelector("input[type='color']").click();
//     });

//         elementoDentroDelArray.addEventListener("input", (event) => {
//       // Obtener el color seleccionado del color picker
//             const colorSelector = event.target.value;

//       // Aplicar el color seleccionado al elemento correspondiente
//             arrayColor1[i].style.backgroundColor = colorSelector;
//         });
//     });
// } else {
//     console.log("La cantidad de colores seleccionados no coincide.");
// }