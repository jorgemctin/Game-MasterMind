
let topSecret = document.getElementById('topSecret');

topSecret.innerHTML = "";

const secretBalls = [
    '<div class="secretCombination"></div>',
    '<div class="secretCombination"></div>',
    '<div class="secretCombination"></div>',
    '<div class="secretCombination"></div>',
];

const topSecretBalls = secretBalls.map(secretBalls => `<div>${secretBalls}</div>`);

topSecret.innerHTML = topSecretBalls.join('');

let topBalls = document.getElementById('topBalls');

topBalls.innerHTML = "";

const BallsSelected = [
    '<div class="colorSelected"></div>',
    '<div class="colorSelected"></div>',
    '<div class="colorSelected"></div>',
    '<div class="colorSelected"></div>',
    '<div class="colorSelected"></div>',
    '<div class="colorSelected"></div>',
];

const topBallsSelected = BallsSelected.map(BallsSelected => `<div>${BallsSelected}</div>`);

topBalls.innerHTML = topBallsSelected.join('');


const gameLine = document.getElementById('gameline');
gameLine.innerHTML = "";

const lineGame = [
    '<div class="gameball1"></div>',
    '<div class="gameball2"></div>',
    '<div class="gameball3"></div>',
    '<div class="gameball4"></div>',
];
const gameCheck = [
    '<div class="gamecheck"></div>',
    '<div class="gamecheck"></div>',
    '<div class="gamecheck"></div>',
    '<div class="gamecheck"></div>',
];
const gameLineBalls = [...lineGame, ...gameCheck];

gameLine.innerHTML = gameLineBalls.join('');


const getStoredColors = () => {
    const storedColors = localStorage.getItem("selectedColors");
if (storedColors) {
    return JSON.parse(storedColors);
} else {
    return [];
}
};





let tablero = document.getElementById('tablero');

        let dificultad = 6;
        let contador = 1;
        
        
        const compruebaGanadora = () =>{
        
        }
        
    
        let currentIndex = 0;
//Al HACER CLICK CAMBIAR EL COLOR POR LOS SELECCIONADOS

const mapStoredColors = () => {
    const gameLineElements = document.querySelectorAll('.gameball1, .gameball2, .gameball3, .gameball4');
    const storedColors = getStoredColors();
    let currentIndex = 0;

gameLineElements.forEach((element) => {
    element.addEventListener('click', () => {
    const color = storedColors[currentIndex] || 'default-color'; // Reemplaza 'default-color' con el color predeterminado si no hay uno almacenado
    element.style.backgroundColor = color;
    currentIndex = (currentIndex + 1) % storedColors.length;
    });
});
};
mapStoredColors();

        

        const pintaBola = (filaIndex) => {
            const filas = document.querySelectorAll(`#fila${filaIndex}`);
            const storedColors = getStoredColors();
          
            filas.forEach((fila) => {
              const gameLineElements = fila.querySelectorAll('.gameball1, .gameball2, .gameball3, .gameball4');
              let currentIndex = 0;
          
              gameLineElements.forEach((element) => {
                element.addEventListener('click', () => {
                  const color = storedColors[currentIndex] || 'default-color';
                  element.style.backgroundColor = color;
                  currentIndex = (currentIndex + 1) % storedColors.length;
                });
              });
            });
          };
          
          pintaBola();

        
            const pintaTablero = () => {
            compruebaGanadora();
        
            if (dificultad > 1) {
      
            
        
            contador++;
            
            const gameLineBalls  = [...lineGame, ...gameCheck];
        
            tablero.innerHTML += `<div id='fila${contador}' class='fila'><div class='d-inline-flex flex-wrap'>
      <div id='gameline${contador}' class='d-inline-flex flex-wrap'>${gameLineBalls.join('')}
      <div class='gamecheck${contador}'></div></div></div></div>`;
      assignColorsToElements();

      pintaBola(contador);

   
        
            dificultad -= 1;
            } else {
            console.log("you died!");
            }
        };
        
        //COLORES SELECCIONADOS PÁGINA ANTERIOR
        
        const assignColorsToElements = () => {
        const colorSelectedElements = document.getElementsByClassName("colorSelected");
        const storedColors = getStoredColors();
        
        // Asignar los colores a los elementos
        Array.from(colorSelectedElements).forEach((element, index) => {
            if (storedColors[index]) {
                element.style.backgroundColor = storedColors[index];
                console.log(`Color asignado a elemento ${index}: ${storedColors[index]}`);
            }
        });
        };
        // Llamar a la función para asignar los colores al cargar la página
        assignColorsToElements();




            


// const colorBalls = Array.from(gameLine);

// colorBalls.map(
//     (elementBalls, i) =>{
//         elementBalls.addEventListener("click")
//     }
// )







//FORMA PARA CREAR LAS BOLAS DEL JUEGO:

// const gameLine = document.getElementById('gameline');
// gameLine.innerHTML = '';

// gameLine.innerHTML = `
//     <div class="gameline1"></div>
//     <div class="gameline2"></div>
//     <div class="gameline3"></div>
//     <div class="gameline4"></div>
//     <div class="gamecheck"></div>
//     <div class="gamecheck"></div>
//     <div class="gamecheck"></div>
//     <div class="gamecheck"></div>
// `;



// ---------------------






// let gameLine = document.getElementById('gameline');

// gameLine.innerHTML = "";

// const lineGame = [
//     '<div class="gameline1"></div>',
//     '<div class="gameline2"></div>',
//     '<div class="gameline3"></div>',
//     '<div class="gameline4"></div>',
//     '<div class="gamecheck"></div>',
//     '<div class="gamecheck"></div>',
//     '<div class="gamecheck"></div>',
//     '<div class="gamecheck"></div>',
// ];

// const gameLineBalls = lineGame.map(lineGame => `<div>${lineGame}</div>`);

// gameLine.innerHTML = gameLineBalls.join('');





// let gameCheck = document.getElementById('gamecheck');

// gameCheck.innerHTML = "";

// const gameCheckBalls = [
//     '<div class="gamecheck"></div>',
//     '<div class="gamecheck"></div>',
// ];

// const topGameCheckBalls = gameCheckBalls.map(gameCheckBalls => `<div>${gameCheckBalls}</div>`);

// gameCheck.innerHTML = topGameCheckBalls.join('');




















    





// const mapStoredColors = () => {
//     const gameLineElements = document.querySelectorAll('.gameline1, .gameline2, .gameline3, .gameline4');
//     const storedColors = getStoredColors();
  
//     gameLineElements.forEach((element, index) => {
//       element.addEventListener('click', () => {
//         const mappedColors = storedColors.map((color, i) => {
//           return i === index ? color : 'default-color'; // Reemplaza 'default-color' con el color predeterminado si no hay uno almacenado
//         });
//         element.style.backgroundColor = mappedColors[index];
//         localStorage.setItem("selectedColors", JSON.stringify(mappedColors));
//       });
//     });
//   };
  
//   mapStoredColors();




//GIVING THE BALLS COLORS SELECTED BEFORE BY CLICKING

    







//MAKE THE SECRET COMBINATION:

let secretCombination = [];

const makeSecretCombination = () => {

    const storedColors = getStoredColors();

    let posibleColors = storedColors;

    for (i = 0;i < 4; i++) {

        let positionRandom = Math.floor(Math.random() * posibleColors.length);
        secretCombination.push(posibleColors[positionRandom]);
    }
};

makeSecretCombination();

//SAVE THE COLORS IN THE RIGHT PLACE:


let secretCombinationElements = document.querySelectorAll('.secretCombination');    
let secretCombinationElementsArray = Array.from(secretCombinationElements);

secretCombinationElementsArray.map((secretColor, index) => {
    secretColor.style.backgroundColor = secretCombination[index]
})











// const nombres = ["Juan", "María", "Pedro", "Ana"];



// //Crear variable combinaciónUsuario

// let comprobar = document.getElementById('');


// //COMPROBAR GANADOR:

// if (secretCombination.join("") === combinacionUsuario.join("")){
// // pasar al HTML ganador

// }


// if (i=0, i<4, i++){
//     if (secretCombination[i] === combinaciónUsuario[i]) {
//         puntitoComprobación[i].style.backgroundColor = '#000fg'; red

//     }if (secretCombination.includes(combinacionUsuario[i])) {
//         puntitoComprobación.style.backgroundColor = '#000fg';white
//     }

// }







// let colorSelected1 = document.getElementById("colorSelected");

// for(let i = 0; i < 6; i++) {
//     let bolaElement = document.createElement('div')
//     bolaElement.classList.add("colorSelected");
//     bolaElement.id = `bola-${i}`
//     colorSelected1.appendChild(bolaElement)
//     }






// let game1 = document.getElementById("gameline1");

// for(let i = 0; i < 6; i++) {
//     let bolaElement = document.createElement('div')
//     bolaElement.classList.add("gameline1");
//     bolaElement.id = `bola-${i}`
//     game1.appendChild(bolaElement)
//     }

// let game2 = document.getElementById("gameline2");

//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div')
//         bolaElement.classList.add("gameline2");
//         bolaElement.id = `bola-${i}`
//         game2.appendChild(bolaElement)
//     }

// let linegame = document.getElementById("linegame");

//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("linegame");
//         bolaElement.id = `bola-${i}`;
//         linegame.appendChild(bolaElement);
//     }








    
// let game4 = document.getElementById("gameline4");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline4");
//         bolaElement.id = `bola-${i}`;
//         game4.appendChild(bolaElement);
//     }

// let game5 = document.getElementById("gameline5");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline5");
//         bolaElement.id = `bola-${i}`;
//         game5.appendChild(bolaElement);
//     }

// let game6 = document.getElementById("gameline6");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline6");
//         bolaElement.id = `bola-${i}`;
//         game6.appendChild(bolaElement);
//     }

// let game7 = document.getElementById("gameline7");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline7");
//         bolaElement.id = `bola-${i}`;
//         game7.appendChild(bolaElement);
//     }

// let game8 = document.getElementById("gameline8");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline8");
//         bolaElement.id = `bola-${i}`;
//         game8.appendChild(bolaElement);
//     }

// let game9 = document.getElementById("gameline9");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline9");
//         bolaElement.id = `bola-${i}`;
//         game9.appendChild(bolaElement);
//     }

// let game10 = document.getElementById("gameline10");
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("gameline10");
//         bolaElement.id = `bola-${i}`;
//         game10.appendChild(bolaElement);
//     };


//BRINGING COLORS SELECTED:
    // let colorSelected = document.getElementById("colorSelected");
    // for(let i = 0; i < 6; i++) {
    //     let bolaElement = document.createElement('div');
    //     bolaElement.classList.add("colorSelected");
    //     bolaElement.id = `bola-${i}`;
    //     colorSelected.appendChild(bolaElement);
    // };

    // const storedColors = JSON.parse(localStorage.getItem("selectedColors"));



    // if (storedColors && storedColors.length === arrayColor.length) {
    //     arrayColor1.forEach((colorElement, i) => {
    //     colorElement.style.backgroundColor = storedColors[i];
    //     });
    // } else {
    //     console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
    // }


    // const storedColors = JSON.parse(localStorage.getItem("selectedColors"));
    // let arrayColor = document.getElementsByClassName("colorpicker");
    // let arrayColor1 = document.getElementsByClassName("colorSelected");



    // document.addEventListener("DOMContentLoaded", function() {
    //     if (storedColors && storedColors.length === colors.length) {
    //         colorInputs.forEach((colorElement, i) => {
    //             colorElement.style.backgroundColor = storedColors[i];
    //         });
    //     } else {
    //         console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
    //     }

    
    // });





//BRINGING COLORS SELECTED:


// let colorElement = document.getElementById ('colorPicked');
//     for(let i = 0; i < 6; i++) {
//         let bolaElement = document.createElement('div');
//         bolaElement.classList.add("colorPicked");
//         bolaElement.id = `bola-${i}`;
//         game10.appendChild(bolaElement);
//     }

//     const storedColors = JSON.parse(localStorage.getItem("color"));


//     if (storedColors && storedColors.length === arrayColor1.length) {
//         arrayColor1.forEach((colorElement, i) => {
//         colorElement.style.backgroundColor = storedColors[i];
//         });
//     } else {
//         console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
//     }



//BRINGING COLORS SELECTED:

// let colorSelected = document.getElementById('colorSelected');
// for (let i = 0; i < 7; i++) {
//     let bolaElement = document.createElement('div');
//     bolaElement.classList.add("colorSelected");
//     bolaElement.id = `bola-${i}`;
//     colorPicked.appendChild(bolaElement);
// }

// const storedColors = JSON.parse(localStorage.getItem("color"));

// if (storedColors && storedColors.length === 6) { // Reemplaza "6" con la longitud adecuada de arrayColor1
//     let arrayColor1 = document.getElementsByClassName('colorPicked'); // Obtiene los elementos con la clase "colorPicked"
//     Array.from(arrayColor1).forEach((element, i) => {
//     element.style.backgroundColor = storedColors[i];
//     });
// } else {
//     console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
// }





// function cargarColoresDesdeLocalStorage() {
//     const storedColors = JSON.parse(localStorage.getItem("color"));
//     if (storedColors && storedColors.length === 6) { // Reemplaza "7" con la longitud adecuada de los colores
//       const colorSelectedElements = document.getElementsByClassName("colorSelected");
//       Array.from(colorSelectedElements).forEach((element, i) => {
//         element.style.backgroundColor = storedColors[i];
//       });
//     } else {
//       console.log("No se encontraron colores almacenados o la cantidad de colores no coincide.");
//     }
//   }


    // objetoGuardado = localStorage.getItem('clave');

    // const changeBallColors = () => {
    //     const gameContainer = document.getElementById("gameline1");
    //     const balls = Array.from({ length: 6 }, (_, index) => index);
    //     const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
      
    //     balls.map((_, index) => {
    //       const bolaElement = document.createElement("div");
    //       bolaElement.classList.add(`bola-${index}`);
      
    //       bolaElement.addEventListener("click", () => {
            
    //         const randomColor = colors[Math.floor(Math.random() * colors.length)];
    //         bolaElement.style.backgroundColor = randomColor;
    //       });
      
    //       gameContainer.appendChild(bolaElement);

    //     });
    //   };
    
    
    
        //     const pintaTablero = () => {
        //     compruebaGanadora();
          
        //     //Al no haber ganado nadie, el código continúa por aquí debajo...
          
        //     if (dificultad > 1) {
        //       document.getElementById(`fila${contador}`).removeAttribute("onclick");
          
        //       contador++;
          
        //       tablero.innerHTML += `<div id='fila${contador}' class='fila' onclick='pintaBola(${contador})'>${contador}</div>`;
          
        //       dificultad -= 1;
        //     } else {
        //       console.log("you died!");
        //     }
        //   };



        
        

  

        //   const pintaTablero = () => {
        //     compruebaGanadora();
          
        //     const filaActual = document.getElementById(`fila${contador}`);
        //     const elementosActuales = filaActual.querySelectorAll('.gameball, .gamecheck');
          
        //     if (elementosActuales.length === gameLineBalls.length) {
        //       return;
        //     }
          
        //     filaActual.innerHTML = '';
          
        //     gameLineBalls.forEach((element) => {
        //       filaActual.innerHTML += element;
        //     });















    







    // const pintaTablero = () => {
    //     // let dificultad = 5;
    //     //ESTA PARTE ACABA DE SER HARDCODEADA
    //     compruebaGanadora();
    //     //Al no haber ganado nadie, el código continua por aquí debajo.

    //     if(dificultad > 1){

    //         //OCULTAR:
    //         // let filaAnterior = document.getElementById(`fila${dificultad}`);



    //         document.getElementById(`fila${contador}`).removeAttribute('click', (e) =>{
    //             e.preventDefault();
    //         }
    //         );
    //         contador++;

    //         tablero.innerHTML += `<div id="fila${contador} class='fila' onclick='pintaBola(${contador+1})'>${dificultad}</div>`; 

    //         dificultad -= 1;

    //         console.log(innerHTML);

    //     }else{
    //         console.log('your died');
    //     }
    // }



        

    //colors, comb secre, pintar un color, comprobar ganacias


    