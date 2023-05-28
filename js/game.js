//CREATING CLASSES

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

const topBalls = document.getElementById('topBalls');
topBalls.innerHTML = "";

const nivel = localStorage.getItem("selectLevel");

let cuantityColors;
if (nivel === 'beginner') {
    cuantityColors = 4;
} else if (nivel === 'intermediate') {
    cuantityColors = 5;
} else if (nivel === 'advanced') {
    cuantityColors = 6;
} else {
    cuantityColors = 0; // Valor predeterminado si el nivel no es válido
}

const BallsSelected = new Array(cuantityColors).fill('<div class="colorSelected"></div>');
const topBallsSelected = BallsSelected.map(BallsSelected => `<div>${BallsSelected}</div>`);

topBalls.innerHTML = topBallsSelected.join('');


const gameLine = document.getElementById('gameline1');
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



//GET COLORS FROM LOCALSTORGAE
const getStoredColors = () => {
    const storedColors = localStorage.getItem("selectedColors");
if (storedColors) {
    return JSON.parse(storedColors);
} else {
    return [];
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
        }
    });
    };
    // Llamar a la función para asignar los colores al cargar la página
    assignColorsToElements();


//CHANGE TO HEXADECIMAL

const rgbToHex = (rgbColor) => {
    const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  
    if (match) {
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
  
      const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
  
      const hexColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  
      return hexColor;
    }
  
    return rgbColor;
  };

//CHANGIND DIFICULT SELECTED:


const retrieveLevelFromLocalStorage = () => {
    const storedLevel = localStorage.getItem("selectLevel");
    
    let counter;
    
    if (storedLevel === "beginner") {
      counter = 6;
    } else if (storedLevel === "intermediate") {
      counter = 8;
    } else if (storedLevel === "advanced") {
      counter = 10;
    } else {
      // Valor predeterminado en caso de que no se encuentre el nivel almacenado o no sea válido
      counter = 6;
    }
    
    return counter;
  };
  let initialDificultad = retrieveLevelFromLocalStorage();
  let difficult = initialDificultad;
//GAMEBOARD
let tablero = document.getElementById('tablero');


let contador = 1;




//CHECK WINNER COMBINATION



const compruebaGanadora = (numeroDeFila) => {
    const gameLineUser = Array.from(document.getElementById(`gameline${numeroDeFila}`).querySelectorAll('.gameball1, .gameball2, .gameball3, .gameball4'));
  
    let blancas = 0;
    let negras = 0;
  
    const userColors = gameLineUser.map((ball) => {
      const backgroundColor = window.getComputedStyle(ball).backgroundColor;
      const hexColor = rgbToHex(backgroundColor);
      ball.style.backgroundColor = hexColor; // Establecer el color de fondo en el valor hexadecimal
      return hexColor;
    });

    const arrayAlreadyChecked = ["","","",""];

    for (let i = 0; i < userColors.length; i++) {

      if (secretCombination[i] === userColors[i]) {

        negras += 1;

        arrayAlreadyChecked[i]= userColors[i];

        paintAswerBlack(numeroDeFila, i);

        if (negras === 4) {
            // Ganador de la partida
            window.location.href = "../pages/winner.html";
        }

      } else if (secretCombination.includes(userColors[i]) && secretCombination[i] !== userColors[i]) {
        blancas += 1;
        paintAswerWhite(numeroDeFila, i);
      }
    }
  };

  paintAswerWhite = (rowNumber, index) => {
    const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
    gameChecks[index].style.backgroundColor = 'white';
  }

  paintAswerBlack = (rowNumber, index) => {
    console.log("paintAswerBlack", rowNumber, index);

    const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
    gameChecks[index].style.backgroundColor = 'black';
  }


//CHANGING BALL'S COLORS BY CLIC
let currentIndex = 0;
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

//CHANGING BALL'S COLORS BY CLIC AFTER LINE 1
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
    

//FUNCTION CHECKING WINNER AND CREATE NEW LINE        
const pintaTablero = () => {
    compruebaGanadora(contador);

    
        
    if (difficult > 1) {
            contador++;
            const gameLineBalls  = [...lineGame, ...gameCheck];
            
        
            tablero.innerHTML += `<div id='fila${contador}' class='fila'><div class='d-inline-flex flex-wrap'>
                <div id='gameline${contador}' class='d-inline-flex flex-wrap'>${gameLineBalls.join('')}
                <div class='gamecheck${contador}'></div></div></div></div>`;

assignColorsToElements();
pintaBola(contador);

difficult -= 1;
    } else {
        window.location.href = "../pages/loser.html";
    }
};




















/// BLANCAS Y NEGRAS!!!


// for (let i = 0; i < secretCombination.length; i++) {

//     if (secretCombination.includes === (userColors[i])){
//         if (secretCombination[i] === element[i]) {
//             //Includes take out the white's one
//             negras += 1;
//             console.log('he ganado', negras, "fichas negras");
        
            
            
//             if (negras === 4) {
                
//                 // Ganador de la partida
//                 window.location.href = "../pages/winner.html";
//                 }
//             }
//         }else{
//             blancas += 1;
//             console.log('he ganado', blancas, "fichas blancas");
//         }    
//     } 
// };










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


    