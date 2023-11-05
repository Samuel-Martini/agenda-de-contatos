const form = document.getElementById('form-agenda');
let linhas = " ";
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    nomes.push(inputNomeContato.value);
    numeros.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomeContato.value = null
    inputNumeroContato.value = null
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}