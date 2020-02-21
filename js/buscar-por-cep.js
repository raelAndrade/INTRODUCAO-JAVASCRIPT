var buscaCep = document.querySelector("#buscarcep");

buscaCep.addEventListener("click", function () {
    let inputCep = document.querySelector('input[name="cep"]');
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json';
    console.log(url)

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    // A propriedade onreadystatechange é disparada sempre que nossa requisição sofre alteração durante seu processamento
    xhr.addEventListener("load", function () {
        // O código 4 informa que a nossa requisição foi finalizada
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText))
                preencheCampos(JSON.parse(xhr.responseText));
            }
        }
    });

    xhr.send();
});

function preencheCampos(json) {
    document.querySelector('input[name="endereco"]').value = json.logradouro;
    document.querySelector('input[name="bairro"]').value = json.bairro;
    document.querySelector('input[name="complemento"]').value = json.complemento;
    document.querySelector('input[name="cidade"]').value = json.localidade;
    document.querySelector('input[name="estado"]').value = json.uf;
}