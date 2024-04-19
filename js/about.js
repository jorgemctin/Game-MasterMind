//BRING NAME & LEVEL
document.addEventListener("DOMContentLoaded", () => {
    const storedUserName = localStorage.getItem("userName");
    const player = document.getElementById("userData");
    if (player) {
        player.innerHTML = storedUserName;
    }

    const storedLevel = localStorage.getItem("selectLevel");
    const levelPicked = document.getElementById("levelpicked");
    if (levelPicked) {
        levelPicked.innerHTML = storedLevel;
    }
});