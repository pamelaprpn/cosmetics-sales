const modalForgetPassword = document.getElementById('forgotPasswordModal');
const btnOpenModalForgetPassword = document.getElementById('openModal');
const closeModalForgetPassword = document.querySelector('.close');
const btnEnviarModalForgetPassword = document.querySelector('.forgetpassword_button');
const inputEmailModalForgetPassword = document.querySelector('.inputEmailModal');
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnLogin = document.querySelector('.btn_login');
const logo = document.getElementById('logoHome');

email.addEventListener('input', validateEmail());
password.addEventListener('input', validadeSenha());

logo.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = "index.html";
})


//Validar campo de e-mail dentro da modal Esqueci minha senha
inputEmailModalForgetPassword.addEventListener('blur', function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!emailPattern.test(inputEmailModalForgetPassword.value)) {
        document.getElementById('emailErrorModal').style.display = 'block';
        this.style.border = '1px solid red';
        document.getElementById('emailErrorModal').textContent = "Por favor, digite um e-mail válido.";
    } else {
        this.style.border = 'none';
        document.getElementById('emailErrorModal').style.display = 'none';
    }
});

//Abrir modal pelo elemento Esqueci minha senha
btnOpenModalForgetPassword.addEventListener('click', function(event){
    event.preventDefault();   
        modalForgetPassword.style.display = 'block'; 
        limparModalForguetPassword;            
      
   
});

//Função para limpar o form da modal de Esqueci minha senha
function limparModalForguetPassword(){
    inputEmailModalForgetPassword.value = '';
    inputEmailModalForgetPassword.style.border = 'none';
    document.getElementById('emailErrorModal').style.display = 'none';
}


//Fechar modal Esqueci minha senha quando clicar no close
closeModalForgetPassword.addEventListener('click', function(event){
    event.preventDefault();
 
    modalForgetPassword.style.display = 'none'; 
    limparModalForguetPassword(); 
        
});



//Fechar modal Esqueci minha senha  quando clicar fora da modal
window.addEventListener('click', function(event){
    if(event.target == modalForgetPassword) {
        modalForgetPassword.style.display = 'none'
        limparModalForguetPassword();
    }
});

//Fechar modal Esqueci minha senha quando recarregar página
window.onload = function(){
    modalForgetPassword.style.display = 'none';
    limparModalForguetPassword();
};
 
//Limpar form quando clicar em login
btnLogin.addEventListener('click', function(event){
    event.preventDefault();

    email.style.border = 'none'
    document.getElementById('emailError').style.display = 'none';
    email.value = '';
    password.style.border = 'none'
    document.getElementById('passwordError').style.display = 'none';
    password.value = '';
});

//Limpar form quando clicar em Enviar na modal de Esqueci minha senha
btnEnviarModalForgetPassword.addEventListener('click', function(event){
    event.preventDefault();

    limparModalForguetPassword();
})

//função que valida o input e-mail login
function validateEmail() {
    document.getElementById('email').addEventListener('blur', function () {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
        if (!emailPattern.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            this.style.border = '1px solid red';
            document.getElementById('emailError').textContent = "Por favor, digite um e-mail válido.";
            
        } else {
            this.style.border = 'none';
            document.getElementById('emailError').style.display = 'none';
        }
    });
}

//função que valida o input password login
function validadeSenha(){
    document.getElementById('password').addEventListener('blur', function () {

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/;
    
        if (!passwordPattern.test(password.value)) {
            document.getElementById('passwordError').style.display = 'block';
            this.style.border = '1px solid red'
            document.getElementById('passwordError').textContent = 'Campo deve conter no mínimo 8 caracteres, entre letras maiusculas, minúsculas e números.'
        } else {
            this.style.border = 'none';
            document.getElementById('passwordError').style.display = 'none';
        }
    });
}











// function validarForm (){
//     validadeEmail();
//     validadeSenha();

//     document.querySelector('.btn_login').addEventListener('click', function(event){
//         if(email.trim() === "" && password.trim() === ""){
//             event.preventDefault();
//             email.style.border = '1px solid red';
//             password.style.border = '1px solid red';

//             alert('teste')
//         }
//     })
// }

// validarForm();

// document.getElementsByClassName('.btn_login').addEventListener("click", function(event){

//     if(email.trim() === "" && password.trim() === ""){
//         email.style.border = '1px solid red';
//         document.getElementById('emailError').textContent = "Por favor, digite um e-mail válido."; 
//         password.style.border = '1px solid red';
//         document.getElementById('passwordError').textContent = 'Campo deve conter no minimo 8 caracteres, entre letras maiúsculas, minúsculas, numeros e caracteres especiais.'
//         event.preventDefault();
//     }
    

// });





