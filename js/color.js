const colors = ['#41EC74', '#351FE0', '#E6A3A3', '#8ADFF4', '#E81717', '#EE53D2'];



const setCantidadColores = () => {
  const container = document.querySelector('.bordercolor1');
  container.innerHTML = ''; // Elimina todos los elementos actuales dentro del contenedor

  const nivel = localStorage.getItem("selectLevel");

  let cantidadColores;
  if (nivel === 'beginner') {
    cantidadColores = 4;
  } else if (nivel === 'intermediate') {
    cantidadColores = 5;
  } else if (nivel === 'advanced') {
    cantidadColores = 6;
  } else {
    cantidadColores = 0; // Valor predeterminado si el nivel no es válido
  }

  for (let i = 0; i < cantidadColores; i++) {
    const colorpickerDiv = document.createElement('div');
    colorpickerDiv.classList.add('colorpicker');

    const input = document.createElement('input');
    input.type = 'color';
    input.id = i;

    colorpickerDiv.appendChild(input);
    container.appendChild(colorpickerDiv);
  }
};

// Ejemplo de uso
setCantidadColores();

const storeColors = () => {
  const selectedColors = [];
  colorInputs.forEach(input => {
    selectedColors.push(input.value);
  });
  localStorage.setItem("selectedColors", JSON.stringify(selectedColors));
};

const colorInputs = document.querySelectorAll("input[type='color']");



colorInputs.forEach(input => {
  input.addEventListener("change", (event) => {
    console.log("input", event.target.value, event.target.id);
    storeColors();
  });
});










// const storedColors = JSON.parse(localStorage.getItem("selectedColors"));



// if (storedColors && storedColors.length === arrayColor.length) {
//     colorSelected.forEach((colorElement, i) => {
//     colorElement.style.backgroundColor = storedColors[i];
//     });
// } else {
//     console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
// }






// const arrayColor1 = document.querySelectorAll(".colorSelected");

// Array.from(document.getElementsByClassName("colorpicker")).forEach((elementoDentroDelArray, i) => {
//   const { value: colorSelector } = 
//   elementoDentroDelArray.querySelector("input[type='color']");
//   elementoDentroDelArray.addEventListener("click", () => 
//   elementoDentroDelArray.querySelector("input[type='color']").click());
//   elementoDentroDelArray.addEventListener("input", () => {
//     arrayColor1[i].style.backgroundColor = colorSelector;
//     localStorage.setItem(`color-${i}`, colorSelector);
//   });
// });

// if (document.getElementsByClassName("colorpicker").length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// }





// const arrayColor1 = document.querySelectorAll(".colorSelected");
// const arrayColorpickers = document.getElementsByClassName("colorpicker");

// if (arrayColorpickers.length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// } else {
//   Array.from(arrayColorpickers).forEach((elementoDentroDelArray, i) => {
//     const { value: colorSelector } = elementoDentroDelArray.querySelector("input[type='color']");
//     elementoDentroDelArray.addEventListener("click", () => elementoDentroDelArray.querySelector("input[type='color']").click());
//     elementoDentroDelArray.addEventListener("input", () => {
//       arrayColor1[i].style.backgroundColor = colorSelector;
//       localStorage.setItem(`color-${i}`, colorSelector);
//     });
//   });
// }

// let colorpickers = document.getElementsByClassName("colorpicker");
// // let colorsSelected = document.getElementsByClassName("colorSelected");

// const arrayColor1 = document.querySelectorAll(".colorSelected");
// const arrayColorpickers = document.getElementsByClassName("colorpicker");

// let arrayColor = Array.from(colorpickers);

// if (arrayColor.length === arrayColor1.length) {
//         arrayColor.map((elementoDentroDelArray, i) => {
//             elementoDentroDelArray.addEventListener("click", () => {
//             elementoDentroDelArray.querySelector("input[type='color']").click();
//     });
//         elementoDentroDelArray.addEventListener("input", (event) => {
//             const colorSelector = event.target.value;
//             arrayColor1[i].style.backgroundColor = colorSelector;

//             localStorage.setItem(`color-${i}`, colorSelector);
//         });
//     });
// } else {
//     console.log("La cantidad de colores seleccionados no coincide.");
// }


// const storedColors = JSON.parse(localStorage.getItem("color-"));



// if (storedColors && storedColors.length === arrayColor.length) {
//     arrayColor1.forEach((colorElement, i) => {
//     colorElement.style.backgroundColor = storedColors[i];
//     });
// } else {
//     console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
// }
















// const arrayColor1 = document.querySelectorAll(".colorSelected");
// const arrayColorpickers = document.getElementsByClassName("colorpicker");

// if (arrayColorpickers.length !== arrayColor1.length) {
//   console.log("La cantidad de colores seleccionados no coincide.");
// } else {
//   Array.from(arrayColorpickers).forEach((elementoDentroDelArray, i) => {
//     const { value: colorSelector } = elementoDentroDelArray.querySelector("input[type='color']");
//     elementoDentroDelArray.addEventListener("click", () => elementoDentroDelArray.querySelector("input[type='color']").click());
//     elementoDentroDelArray.addEventListener("input", () => {
//       arrayColor1[i].style.backgroundColor = colorSelector;
//       localStorage.setItem(`color-${i}`, colorSelector);
//     });
//   });
// }


// const storedColors = JSON.parse(localStorage.getItem("color"));


// if (storedColors && storedColors.length === arrayColor1.length) {
//   arrayColor1.forEach((colorElement, i) => {
//     colorElement.style.backgroundColor = storedColors[i];
//   });
// } else {
//   console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
// }

