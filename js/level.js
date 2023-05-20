

document.addEventListener("DOMContentLoaded", function(){

    let levelSelected = document.getElementById("levelSelector");


    const storeLevel = () => {
        selectedValue = document.getElementById("levelSelector").value;
        localStorage.setItem("selectedValue", selectedValue);
        alert("levelSelected: " + selectedValue)
        console.log(selectedValue)
    }

    console.log(levelSelected)

});


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
