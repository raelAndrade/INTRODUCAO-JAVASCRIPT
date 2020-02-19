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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // A função do Javascript que previne o comportamento padrão de certos elementos é o: event.preventDefault.
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    /* A função createElement cria um elemento no document */
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    /* A função appendChild adiciona o conteudo no elemento PAI */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

/* função nomeadas */
/* titulo.addEventListener('click', mostraMensagem); */

/* ou com função anonima */

/* titulo.addEventListener('click', function () {
    console.log("Olha só posso chamar uma função anonima.");
});

function mostraMensagem() {
    console.log("Olá eu fui clicado!")
} */