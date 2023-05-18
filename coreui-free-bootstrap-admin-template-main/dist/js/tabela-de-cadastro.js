
var corpoDadosId = "dados"
var dadosCadastroKey = "dadosCadastrais"

function getElementById(id) {
    return document.getElementById(id)
}
function getStorageCadastros() {
    const storageDadosCadastrais = localStorage.getItem(dadosCadastroKey)
    return JSON.parse(storageDadosCadastrais) || []
}
preencherCorpoDados()
function preencherCorpoDados() {
    getElementById(corpoDadosId).innerHTML = ""
    const realocandoStorageCadastro = getStorageCadastros()
    realocandoStorageCadastro.forEach(function (element, index) {

        getElementById(corpoDadosId).innerHTML += '<tr>' +
            '<th scope="row">' + (index + 1) + '</th>' +
            '<td>' + element.username + '</td>' +
            '<td>' + element.email + '</td>' +
            '<td>' + element.status + '</td>' +
            '<td><button class="btn btn-warning btn-sm" onclick="trocarStatus('+index+')">Alterar Status</button><button class="btn btn-danger btn-sm" onclick="deletarCadastro(' + index + ')">Excluir</button></td>' +
            '</tr>'
    });
}
function deletarCadastro(p1) {
    let realocandoStorageCadastro = getStorageCadastros()
    realocandoStorageCadastro = realocandoStorageCadastro.filter(function (element, index) {
        console.log(index, element)
        return p1 != index
    })
    localStorage.setItem(dadosCadastroKey, JSON.stringify(realocandoStorageCadastro))
    preencherCorpoDados()
}
function trocarStatus(index) {
    const realocandoStorageCadastro = getStorageCadastros()
    if (realocandoStorageCadastro[index].status == "Desativado") {
        realocandoStorageCadastro[index].status  = "Ativo"
    } else {
        realocandoStorageCadastro[index].status  = "Desativado" 
    }
    localStorage.setItem(dadosCadastroKey, JSON.stringify(realocandoStorageCadastro))
    preencherCorpoDados()
}