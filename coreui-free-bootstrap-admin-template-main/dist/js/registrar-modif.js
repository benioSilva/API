var usernameId = "username"
var emailId = "email"
var passwordId = "password"
var repeatPasswordId = "repeat-pasword"
var btnCreateAccountId = "btn-create-account"
var dadosCadastroKey = "dadosCadastrais"
var storageProvisorio = "todosOsDados"


function getElementById(id) {
    return document.getElementById(id)
}
function getStorageCadastros() {
    const storageDadosCadastrais = localStorage.getItem(dadosCadastroKey)
    return JSON.parse(storageDadosCadastrais) || []
}
function getStorageProvisorio() {
    const storageTodosDadosCadastrais = localStorage.getItem(storageProvisorio)
    return JSON.parse(storageTodosDadosCadastrais) || []
}
// function comparacaoSenha(){
//     if(getElementById(passwordId).value == getElementById(repeatPasswordId).value){

//     } 

// }


async function dadosPreenchidos(){
    if (getElementById(usernameId).value == ""){
        alert("Preencher dados")
    }
    if (getElementById(emailId).value == ""){
        alert("Preencher dados")
    }
    if (getElementById(passwordId).value == ""){
        alert("Preencher dados")
    }
    if (getElementById(repeatPasswordId).value == ""){
        alert("Preencher dados")
    }
}

getElementById(btnCreateAccountId).addEventListener('click', async function (event) {
    event.preventDefault();
    
    if (getElementById(passwordId).value == ""  != getElementById(repeatPasswordId).value) {
        alert("senha não Confere")


    } else {
        await dadosPreenchidos()
        let listaTodasInfo = {
            username: getElementById(usernameId).value,
            email: getElementById(emailId).value,
            status: "Desativado",
            password: getElementById(passwordId).value

        }
        
        const cadastros = getStorageCadastros()
        cadastros.push(listaTodasInfo)
            localStorage.setItem(dadosCadastroKey, JSON.stringify(cadastros))

        getElementById(usernameId).value = ""
        getElementById(emailId).value = ""
        getElementById(passwordId).value = ""
        getElementById(repeatPasswordId).value = ""
    }

})