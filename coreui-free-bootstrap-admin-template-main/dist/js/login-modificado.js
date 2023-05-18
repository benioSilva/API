function registrarOnClick(){
    window.location.href =" file:///home/marcos/Desktop/ESTUDOS/fetch-axios/coreui-free-bootstrap-admin-template-main/dist/resgitrar-modif.html"
}
var dadosCadastroKey = "dadosCadastrais"
var usernameLoginId = "username-login"
var passwordLoginId = "password-login"
function getStorageCadastros() {
    const storageDadosCadastrais = localStorage.getItem(dadosCadastroKey)
    return JSON.parse(storageDadosCadastrais) || []
}
