
//SET USERNAME TO LOCAL
let userName = document.getElementById("user");

const storeUserName = () =>
    localStorage.setItem("userName", document.getElementById("user").value);