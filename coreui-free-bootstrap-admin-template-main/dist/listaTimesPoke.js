console.log("hello")
var listTeamKey = "listTeam"
var listaTimeId = "lista-de-time"
var btnExcluirListaId = "btn-excluir"

function getElementById(id) {
    return document.getElementById(id)
}

function getListTeamStorage() {
    const StorageListTeamAdd = localStorage.getItem(listTeamKey)
    return JSON.parse(StorageListTeamAdd) || []  /*maneira mais pratica de dizer que pode estar preenchida ou nulo (|| = a "ou" [] = a "null")
    dessa forma nao precisei faz o if para validar que o localStorage estava null para  inserir os dados*/
}
preencherListaTime()
function preencherListaTime() {
    getElementById(listaTimeId).innerHTML = ""
    getListTeamStorage().forEach(function (element, index) {
        if(element.pokeOne == undefined){
            element.pokeOne = {
                PokemonImage: "",
                NamePokemon: ""
            }
            
        } 
        if(element.pokeTwo == undefined){
            element.pokeTwo = {
                PokemonImage: "",
                NamePokemon: ""
            }
        } 
        if(element.pokeThree == undefined){
            element.pokeThree = {
                PokemonImage: "",
                NamePokemon: ""
            }
           
        }
        if(element.pokeFour == undefined){
            element.pokeFour = {
                PokemonImage: "",
                NamePokemon: ""
            }
            
        }
        if(element.pokeFive == undefined){
            element.pokeFive = {
                PokemonImage: "",
                NamePokemon: ""
            }
            
        }
        if(element.pokeSix == undefined){
            element.pokeSix = {
                PokemonImage: "",
                NamePokemon: ""
            }
           
        }
        
        
        console.log(element)
        getElementById(listaTimeId).innerHTML += '<tr>' +
            '<th scope="row">' + (index + 1) + '</th>' +
            '<td><h6>' + element.nameTeam + '<h6></td>' +
            '<td>' +
            '<div><img  style="width: 3rem; height:3rem" src="' + element.pokeOne.PokemonImage + '"  alt="' + element.pokeOne.NamePokemon + '"></div>' +
            '<h6>' + element.pokeOne.NamePokemon + '</h6></td>' +
            '<td>' +
            '<div><img style="width: 3rem; height:3rem" src="' + element.pokeTwo.PokemonImage + '"  alt="' + element.pokeTwo.NamePokemon + '"></div>' +
            '<h6>' + element.pokeTwo.NamePokemon + '</h6></td>' +
            '<td>' +
            '<div><img style="width: 3rem; height:3rem" src="' + element.pokeThree.PokemonImage + '"  alt="' + element.pokeThree.NamePokemon + '"></div>' +
            '<h6>' + element.pokeThree.NamePokemon + '</h6></td>' +
            '<td>' +
            '<div><img style="width: 3rem; height:3rem" src="' + element.pokeFour.PokemonImage + '"  alt="' + element.pokeFour.NamePokemon + '"></div>' +
            '<h6>' + element.pokeFour.NamePokemon + '</h6></td>' +
            '<td>' +
            '<div><img style="width: 3rem; height:3rem" src="' + element.pokeFive.PokemonImage + '"  alt="' + element.pokeFive.NamePokemon + '"></div>' +
            '<h6>' + element.pokeFive.NamePokemon + '</h6></td>' +
            '<td>' +
            '<div><img style="width: 3rem; height:3rem" src="' + element.pokeSix.PokemonImage + '"  alt="' + element.pokeSix.NamePokemon + '"></div>' +
            '<h6>' + element.pokeSix.NamePokemon + '</h6></td>' +
            '<td><button class="btn btn-ghost-warning">Editar</button><button onclick="onClickBtnExcluir('+index+')" id="btn-excluir" class="btn btn-ghost-danger">Excluir</button></td>'
        
    })
    
    
}


function onClickBtnExcluir(filterParam){
    let realocandoStorageLista = getListTeamStorage()
    realocandoStorageLista = realocandoStorageLista.filter(function(element, index){
        console.log(element, index)
        return filterParam != index
    })
    localStorage.setItem(listTeamKey, JSON.stringify(realocandoStorageLista))
    preencherListaTime()
}