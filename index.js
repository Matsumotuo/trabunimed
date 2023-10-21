function openPagina(){
    window.open('telasistema.HTML','_self');
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
