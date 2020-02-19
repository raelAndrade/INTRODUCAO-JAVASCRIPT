/* var titulo = document.querySelector('.titulo'); */
/* console.log(titulo); */
/* titulo.textContent = "Aparecida Nutricionista"; */
/* console.log(titulo.textContent); */

/* Paciente Paulo */
var pacientes = document.querySelectorAll('.paciente'); // Retorna uma lista do array através pela classe .paciente

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    /* console.log(tdPeso); */

    var peso = tdPeso.textContent;
    /* console.log(peso); */

    var tdAltura = paciente.querySelector('.info-altura');
    /* console.log(tdAltura); */

    var altura = tdAltura.textContent;
    /* console.log(altura); */

    var tdIMC = paciente.querySelector('.info-imc');
    /* console.log(tdIMC); */

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        /* console.log("Peso inválido!"); */
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
        /* paciente.style.color = "#fff";
        paciente.style.backgroundColor = "lightcoral"; */
    }

    if (altura <= 0 || altura >= 3.00) {
        /* console.log("Altura inválida!"); */
        alturaEhValido = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
        /*  paciente.style.color = "#fff";
         paciente.style.backgroundColor = "lightcoral"; */
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = peso / (altura * altura);
        /* console.log(imc); */
        tdIMC.textContent = imc.toFixed(2);
    }
}

/* função nomeadas */
/* titulo.addEventListener('click', mostraMensagem); */

/* ou com função anonima */

/* titulo.addEventListener('click', function () {
    console.log("Olha só posso chamar uma função anonima.");
});

function mostraMensagem() {
    console.log("Olá eu fui clicado!")
} */