
document.addEventListener("DOMContentLoaded", function() {
    const storedUserName = localStorage.getItem("userName");
    const player = document.getElementById("user1");
    player.innerHTML = storedUserName;
});

document.addEventListener("DOMContentLoaded", function() {
    const storedLevel = localStorage.getItem("selectLevel");
    const player = document.getElementById("levelpicked");
    player.innerHTML = storedLevel;
});