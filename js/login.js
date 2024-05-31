const form = document.querySelector('.form')


document.querySelector('.btn_login').addEventListener("submit", function(event){
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, Digite um e-mail válido.");
        event.preventDefault();
    }

    let password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        event.preventDefault();
    }
})


