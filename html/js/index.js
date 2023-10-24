function validarLogin(event) {
    event.preventDefault(); // impede o envio padrão do formulário
    const usuario = document.getElementById("Usuario").value;
    const senha = document.getElementById("Senha").value;
    
    if (usuario === "12345678911" && senha === "12345") {
        window.open('sistema.html','_self');
    } else {
        alert("Login ou senha incorretos!");
    }
}


//data na pagina de cadastrar email
document.addEventListener("load", function() {
    //data na pagina de cadastrar email
    var dataLocal = new Date();
    var mes = dataLocal.getMonth() + 1;

    // Se o mês for menor que 10, adiciona o 0 à frente
    if (mes < 10) mes = "0" + mes;

    var dataMinima = dataLocal.getFullYear() + "-" + mes;
    var meucampo = document.getElementById('meucampo');

    meucampo.value = dataMinima;

    // Definindo a data mínima
    meucampo.setAttribute("min", dataMinima);
});

//redefinirsenha
function redefinirsenha() {
    const novasenha = document.getElementById('novasenha').value;
    const confirmarsenha = document.getElementById('confirmarsenha').value;

    if (novasenha !== confirmarsenha) {
        alert('As senhas não são iguais, tente novamente ;)');
        return;
    }

    console.log(`Nova senha: ${novasenha}`);
    alert('Nova senha efetuada');
    window.open('login.html','_self');
}
