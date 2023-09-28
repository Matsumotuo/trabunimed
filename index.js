function openPagina(){
    window.open('telasistema.HTML','_self');
}

document.addEventListener("load", function() {
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