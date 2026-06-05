function validarLogin() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "PB@gmail.com" && senha === "13579") {
        window.location.href = "dashboard.html";
        return true;
    }

    alert("E-mail ou senha incorretos.");
    return false;
}