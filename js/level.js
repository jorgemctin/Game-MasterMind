


let levelBeginner = document.getElementById("beginner");

let levelIntermediate = document.getElementById("intermediate");

let levelAdvanced = document.getElementById("advanced");

let levels = {
    levelBeginner: "",
    levelIntermediate: "",
    levelAdvanced: 'level picker',
};

let datosJSON = JSON.stringify(levels);
localStorage.setItem('levelPicker', datosJSON);

let datos = JSON.parse(localStorage.getItem('levelPicker'));







    const storeLevelBeginner = () => 
        localStorage.setItem("levelBeginner", document.getElementById("beginner").value);
        console.log(localStorage.getItem("levelBeginner"));

    const storeLevelIntermediate = () =>
        localStorage.setItem("levelIntermediate", document.getElementById("intermediate").value);
        console.log(localStorage.getItem("levelIntermediate"));

    const storeLevelAdvanced = () =>
        localStorage.setItem("levelAdvanced", document.getElementById("advanced").value);
        console.log(localStorage.getItem("levelAdvanced"));
