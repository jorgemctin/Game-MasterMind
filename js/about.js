
document.addEventListener("DOMContentLoaded", function() {

    const storedUserName = localStorage.getItem("userName");
    console.log(storedUserName);

    const player = document.getElementById("user1");
    player.innerHTML = storedUserName;
});