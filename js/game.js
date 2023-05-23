
let game1 = document.getElementById("gameline1");

for(let i = 0; i < 6; i++) {
    let bolaElement = document.createElement('div')
    // newDiv.id = 'contenedores';
    // bolaElement.textContent = "";
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