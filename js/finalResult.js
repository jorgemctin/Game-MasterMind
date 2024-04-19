// SHOW FINAL RESULT WHIT NAME
document.addEventListener("DOMContentLoaded", () => {
    let storedUserName = localStorage.getItem("userName");

    let player = document.getElementById("player");
    player.innerHTML = storedUserName;

    const gameResult = localStorage.getItem('gameResult');
    if (gameResult === 'winner') {
        player.innerHTML += " <br><br>¡Felicidades, has ganado!";
    } else if (gameResult === 'loser') {
        player.innerHTML += " <br><br>¡Qué lástima, has perdido!";
    }
});