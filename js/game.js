
let game1 = document.getElementById("gameline1");

for(let i = 0; i < 6; i++) {
    let bolaElement = document.createElement('div')
    bolaElement.classList.add("gameline1");
    bolaElement.id = `bola-${i}`
    game1.appendChild(bolaElement)
    }

let game2 = document.getElementById("gameline2");

    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div')
        bolaElement.classList.add("gameline2");
        bolaElement.id = `bola-${i}`
        game2.appendChild(bolaElement)
    }

let game3 = document.getElementById("gameline3");

    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline3");
        bolaElement.id = `bola-${i}`;
        game3.appendChild(bolaElement);
    }

let game4 = document.getElementById("gameline4");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline4");
        bolaElement.id = `bola-${i}`;
        game4.appendChild(bolaElement);
    }

let game5 = document.getElementById("gameline5");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline5");
        bolaElement.id = `bola-${i}`;
        game5.appendChild(bolaElement);
    }

let game6 = document.getElementById("gameline6");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline6");
        bolaElement.id = `bola-${i}`;
        game6.appendChild(bolaElement);
    }

let game7 = document.getElementById("gameline7");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline7");
        bolaElement.id = `bola-${i}`;
        game7.appendChild(bolaElement);
    }

let game8 = document.getElementById("gameline8");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline8");
        bolaElement.id = `bola-${i}`;
        game8.appendChild(bolaElement);
    }

let game9 = document.getElementById("gameline9");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline9");
        bolaElement.id = `bola-${i}`;
        game9.appendChild(bolaElement);
    }

let game10 = document.getElementById("gameline10");
    for(let i = 0; i < 6; i++) {
        let bolaElement = document.createElement('div');
        bolaElement.classList.add("gameline10");
        bolaElement.id = `bola-${i}`;
        game10.appendChild(bolaElement);
    }



    const changeBallColors = () => {
        const gameContainer = document.getElementById("gameline1");
        const balls = Array.from({ length: 6 }, (_, index) => index);
        const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
      
        balls.map((_, index) => {
          const bolaElement = document.createElement("div");
          bolaElement.classList.add(`bola-${index}`);
      
          bolaElement.addEventListener("click", () => {
            
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            bolaElement.style.backgroundColor = randomColor;
          });
      
          gameContainer.appendChild(bolaElement);

        });
      };
    