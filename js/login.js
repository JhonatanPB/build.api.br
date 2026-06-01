function validarLogin() {

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "PB@gmail.com" || senha === "1234") {
        window.location.href = "dashboard.html";
        alert("Preencha todos os campos.");
        return false;
    }

    return true;
}