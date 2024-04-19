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

//GETTING COLOR's BY LEVEL FROM LOCAL
const getColorsByLevel = localStorage.getItem("selectLevelColors");
const colorsByLevel = parseInt(getColorsByLevel);

//CREATING ELEMENTS AND ASING COLORS
const BallsSelected = new Array(colorsByLevel).fill('<div class="colorSelectedBalls"></div>');
const topBallsSelected = BallsSelected.map(BallsSelected => `<div>${BallsSelected}</div>`);
topBalls.innerHTML = topBallsSelected.join('');

//CREATING LINE GAME
const gameLine = document.getElementById('gameline1');
gameLine.innerHTML = "";

const lineGame = [
  '<div class="gameball"></div>',
  '<div class="gameball"></div>',
  '<div class="gameball"></div>',
  '<div class="gameball"></div>',
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
  };
};

//COLORS SELECTED IN THE PAGE BEFORE
const assignColorsToElements = () => {
  const colorSelectedBallsElements = document.getElementsByClassName("colorSelectedBalls");
  const storedColors = getStoredColors();

  //ASIGN COLORS
  Array.from(colorSelectedBallsElements).forEach((element, i) => {
    if (storedColors[i]) {
      element.style.backgroundColor = storedColors[i];
    }
  });
};

// CALLING THE FUNCTION 
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
  };
  return rgbColor;
};

//BRING DIFICULT SELECTED
let difficultLevelStore = localStorage.getItem("selectLevelDifficult");
let difficult = parseInt(difficultLevelStore);


//GAMEBOARD
let gameBoard = document.getElementById('gameTable');
let counter = 1;
let gameResult = '';

// GET USER COLORS
const getUserColors = (lineElement) => {
  return Array.from(lineElement.querySelectorAll('[class^="gameball"]'), ball => {
    const backgroundColor = window.getComputedStyle(ball).backgroundColor;
    return rgbToHex(backgroundColor);
  });
};

//MAKE THE SECRET COMBINATION:
let secretCombination = [];

const makeSecretCombination = () => {
  const storedColors = getStoredColors();
  let posibleColors = storedColors;
  for (i = 0; i < 4; i++) {
    let positionRandom = Math.floor(Math.random() * posibleColors.length);
    secretCombination.push(posibleColors[positionRandom]);
  }
};
makeSecretCombination();

// SECRET COMBINATION:
let secretCombinationElements = document.querySelectorAll('.secretCombination');
let secretCombinationElementsArray = Array.from(secretCombinationElements);

secretCombinationElementsArray.map((secretColor, i) => {
  secretColor.style.backgroundColor = secretCombination[i]
});

// CHECK GAME
const evaluateUserGame = (userColors) => {
  let blacks = 0;
  let whites = 0;

  for (let i = 0; i < userColors.length; i++) {
    const userColor = userColors[i];
    const secretColor = secretCombination[i];

    if (userColor === secretColor) {
      blacks += 1;
      paintAswerBlack(counter, i);
    } else if (secretCombination.includes(userColor) && userColor !== secretColor) {
      whites += 1;
      paintAswerWhite(counter, i);
    };
  };
  return { blacks };
};

// CHECK WINNER
const chekingWinner = (blacks, difficult) => {
  if (blacks === 4 || difficult <= 1) {
    redirectToFinalResult(blacks === 4 ? 'winner' : 'loser');
  };
};

// CHANGING BALL'S COLORS BY CLIC
let currentIndex = 0;
const mapStoredColors = () => {
  const gameLineElements = document.querySelectorAll('[class^="gameball"]');
  const storedColors = getStoredColors();

  gameLineElements.forEach((element) => {
    element.addEventListener('click', () => {
      const color = storedColors[currentIndex] || 'default-color';
      element.style.backgroundColor = color;
      currentIndex = (currentIndex + 1) % storedColors.length;
    });
  });
};
mapStoredColors();

//CHANGING BALL'S COLORS BY CLIC AFTER LINE 1
const paintingBall = (rowIndex) => {
  const rows = document.querySelectorAll(`#row${rowIndex}`);
  const storedColors = getStoredColors();

  rows.forEach((row) => {
    const gameLineElements = row.querySelectorAll('[class^="gameball"]');

    gameLineElements.forEach((element) => {
      element.addEventListener('click', () => {
        const color = storedColors[currentIndex] || 'default-color';
        element.style.backgroundColor = color;
        currentIndex = (currentIndex + 1) % storedColors.length;
      });
    });
  });
};

// CREATE TABLE & CHECK WINNER
const createTable = () => {
  const gameLineUser = document.getElementById(`gameline${counter}`);
  const userColors = getUserColors(gameLineUser);
  const { blacks } = evaluateUserGame(userColors);
  chekingWinner(blacks, difficult);

  counter++;
  const gameLineBalls = [...lineGame, ...gameCheck];

  gameBoard.innerHTML += `<div id='row${counter}' class='rowLine'><div class='d-inline-flex flex-wrap'>
            <div id='gameline${counter}' class='d-inline-flex flex-wrap'>${gameLineBalls.join('')}
            <div class='gamecheck${counter}'></div></div></div></div>`;

  assignColorsToElements();
  paintingBall(counter);
  difficult -= 1;
};

// REDIRECT TO FINAL RESULT
const redirectToFinalResult = (result) => {
  localStorage.setItem('gameResult', result);
  window.location.href = "../pages/finalResult.html";
};

//PAINT WHITE BALLS
paintAswerWhite = (rowNumber, i) => {
  const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
  gameChecks[i].style.backgroundColor = 'white';
};
//PAINT BLACK BALLS
paintAswerBlack = (rowNumber, i) => {
  const gameChecks = Array.from(document.getElementById(`gameline${rowNumber}`).querySelectorAll('.gamecheck'));
  gameChecks[i].style.backgroundColor = 'black';
};