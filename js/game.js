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

//LEVEL
const level = localStorage.getItem("selectLevel");

let cuantityColors;
if (level === 'beginner') {
    cuantityColors = 4;
} else if (level === 'intermediate') {
    cuantityColors = 5;
} else if (level === 'advanced') {
    cuantityColors = 6;
} else {
    cuantityColors = 0; // Valor predeterminado si el nivel no es válido
}

//CREATING ELEMENTS AND ASING COLORS
const BallsSelected = new Array(cuantityColors).fill('<div class="colorSelected"></div>');
const topBallsSelected = BallsSelected.map(BallsSelected => `<div>${BallsSelected}</div>`);

topBalls.innerHTML = topBallsSelected.join('');

//CREATING LINE GAME

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

//COLORS SELECTED IN THE PAGE BEFORE

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
    for (let i = 0; i < userColors.length; i++) {
      if (secretCombination[i] === userColors[i]) {
        negras += 1;
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

  paintAswerWhite = (rowNumber, i) => {
    const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
    gameChecks[i].style.backgroundColor = 'white';
  }

  paintAswerBlack = (rowNumber, i) => {
    const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
    gameChecks[i].style.backgroundColor = 'black';
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
        // const hideCombination = document.getElementById('hideCombination');
        // hideCombination.style.display = 'block';
    }
};

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
