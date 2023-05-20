

// Intento 1:
// document.addEventListener("DOMContentLoaded", function() {
//     // Array de niveles
//     const levels = [
//         { value: "beginner", label: "Principiante" },
//         { value: "intermediate", label: "Intermedio" },
//         { value: "advanced", label: "Avanzado" }
//     ];

//     let levelSelector = document.getElementById("levelSelector");

//   // Generar los elementos del selector utilizando map
//   levelSelector.innerHTML = levels.map(level => {
//     return `<option value="${level.value}">${level.label}</option>`;
//   }).join("");

//   // Evento de cambio del selector
//   levelSelector.addEventListener("change", function(event) {
//     let selectedValue = event.target.value;
//     localStorage.setItem("selectedValue", selectedValue);
//     alert("levelSelected: " + selectedValue);
//     console.log(selectedValue);
//   });
// });

// Intento 2:
document.addEventListener("DOMContentLoaded", function() {
    let levelSelected = document.getElementById("beginner");
    
    const storeLevelBeginner = () => {
        let selectedValue = levelSelected.value;
        localStorage.setItem("selectedValue", selectedValue);
        alert("beginner: " + selectedValue);
        console.log(selectedValue);
    };

    levelSelected.addEventListener("change", storeLevelBeginner);
});


// let levelSelected = document.getElementById("beginner");



// Intento 3:
// document.addEventListener("DOMContentLoaded", function(){

//     let levelSelected1 = document.getElementById("beginner");


//     const storeLevelBeginner = () => {
//         selectedValue1 = document.getElementById("beginner").value;
//         localStorage.setItem("selectedValue", selectedValue1);
//         alert("beginner: " + selectedValue1)
//         console.log(selectedValue1)
//     }

//     levelSelected.addEventListener("change", storeLevelBeginner);

// });


// document.addEventListener("DOMContentLoaded", function() {
//     let levels = {
//         beginner: "Principiante",
//         intermediate: "Intermedio",
//         advanced: "Avanzado",
//     };

//     let datosJSON = JSON.stringify(levels);
//     localStorage.setItem("levelPicker", datosJSON);

//     let datos = JSON.parse(localStorage.getItem("levelPicker"));

//     console.log(datos);
// });




// if (datos.levelBeginner == "Principiante") {};

// document.addEventListener("click", function() {

//     let storedUserName = localStorage.getItem("levels");
//     console.log(storedUserName);

//     let levelPicker1 = document.getElementById("levelPicker");
//     levelPicker1.innerHTML = storedUserName;
// });





    // const storeLevelBeginner = () => 
    //     localStorage.setItem("levelBeginner", document.getElementById("beginner").value);
    //     console.log(localStorage.getItem("levelBeginner"));

    // const storeLevelIntermediate = () =>
    //     localStorage.setItem("levelIntermediate", document.getElementById("intermediate").value);
    //     console.log(localStorage.getItem("levelIntermediate"));

    // const storeLevelAdvanced = () =>
    //     localStorage.setItem("levelAdvanced", document.getElementById("advanced").value);
    //     console.log(localStorage.getItem("levelAdvanced"));
