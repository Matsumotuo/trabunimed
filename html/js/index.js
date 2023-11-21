function validarLogin(event) {
    event.preventDefault(); // impede o envio padrão do formulário bug
    const usuario = document.getElementById("Usuario").value;
    const senha = document.getElementById("Senha").value;
    
    if (usuario === "11111111111" && senha === "12345") {
        window.open('sistema.html','_self');
    } else {
        alert("Login ou senha incorretos!");
    }
    //função para passar uma senha só
}



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

function abrirDialog() { // pop up de envio
    var dialog = document.querySelector('.buttondialog');
    var form = document.querySelector('form');


    for (var i = 0; i < form.elements.length; i++) {
        var currentInput = form.elements[i];
        if (currentInput.type !== "button" && currentInput.type !== "submit" && currentInput.value.trim() === '' && !currentInput.checkValidity()) {
            alert('Prencha os campos em branco!');
            return;
        }
    }

    dialog.showModal();

    dialog.querySelector('button').addEventListener('click', function() {
        dialog.close();
    });
}


function fecharDialog() { // pra redefinir oq aparece nos inputs
    var dialog = document.querySelector('.buttondialog');
    dialog.close();

    document.getElementById('nomeContrato').value = '';
    document.getElementById('idContrato').value = '';
    document.getElementById('dataContrato').value = '';
    document.getElementById('nomeSingular').value = '';
    document.getElementById('idSingular').value = '';


}



function verificarEnter(event) { // pra funcionar quando der enter
    if (event.key === "Enter") {
        pesquisar();
    }
}


function pesquisar() {
    var input = document.getElementById('botaoprocurar').value.toLowerCase();
    
    if (input === 'novembro2023') {

        document.getElementById('nomeContrato2').value = 'Bolsonaro Plano de saude';
        document.getElementById('idContrato2').value = '453178287912';
        document.getElementById('dataContrato2').value = '2023-11';
        document.getElementById('nomeSingular2').value = 'Bolso453';
        document.getElementById('idSingular2').value = '123';
        document.getElementById('botaoprocurar2').value = '';
    } else {
        alert('Erro! Tente novamente.');
    }
}
