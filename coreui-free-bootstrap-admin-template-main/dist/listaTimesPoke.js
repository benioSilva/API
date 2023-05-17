console.log("hello")
var listTeamKey = "listTeam"
var listaTimeId = "lista-de-time"
var btnExcluirListaId = "btn-excluir"
var tempStorageKey = "pokeSelect"

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
        if (element.pokeOne == undefined) {
            element.pokeOne = {
                PokemonImage: "",
                NamePokemon: ""
            }

        }
        if (element.pokeTwo == undefined) {
            element.pokeTwo = {
                PokemonImage: "",
                NamePokemon: ""
            }
        }
        if (element.pokeThree == undefined) {
            element.pokeThree = {
                PokemonImage: "",
                NamePokemon: ""
            }

        }
        if (element.pokeFour == undefined) {
            element.pokeFour = {
                PokemonImage: "",
                NamePokemon: ""
            }

        }
        if (element.pokeFive == undefined) {
            element.pokeFive = {
                PokemonImage: "",
                NamePokemon: ""
            }

        }
        if (element.pokeSix == undefined) {
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
            '<div><img class ="imgOne" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeOne.PokemonImage + '"  alt="' + element.pokeOne.NamePokemon + '"></div>' +
            '<h6>' + element.pokeOne.NamePokemon + '</h6>' +
            "<div class='more-info-pokeOne' style='display: none;'><a href='base/move-list-lista-time.html' class='list-group-item list-group-item-action' ><button onclick= 'moreInfoPokeSelect(\"" + element.pokeOne.NamePokemon + "\",\"" + element.pokeOne.PokemonImage + "\")' class='btn btn-primary btn-sm more-info'> More Info</button></a></div>" +
            '</td>'+
            '<td>' +
            '<div><img class ="imgTwo" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeTwo.PokemonImage + '"  alt="' + element.pokeTwo.NamePokemon + '"></div>' +
            '<h6>' + element.pokeTwo.NamePokemon + '</h6>' +
            "<div class='more-info-pokeTwo' style='display: none;'><a href='base/move-list-lista-time.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.pokeTwo.NamePokemon + "\",\"" + element.pokeTwo.PokemonImage + "\")' class='btn btn-primary btn-sm more-info'> More Info</button></a></div>" +
            '</td>' +
            '<td>' +
            '<div><img class ="imgThree" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeThree.PokemonImage + '"  alt="' + element.pokeThree.NamePokemon + '"></div>' +
            '<h6>' + element.pokeThree.NamePokemon + '</h6>' +
            "<div class='more-info-pokeThree' style='display: none;'><a href='base/move-list-lista-time.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.pokeThree.NamePokemon + "\",\"" + element.pokeThree.PokemonImage + "\")' class='btn btn-primary btn-sm more-info'> More Info</button></a></div>" +
            '</td>' +
            '<td>' +
            '<div><img class ="imgFour" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeFour.PokemonImage + '"  alt="' + element.pokeFour.NamePokemon + '"></div>' +
            '<h6>' + element.pokeFour.NamePokemon + '</h6>' +
            "<div class='more-info-pokeFour' style='display: none;'><a href='base/move-list-lista-time.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.pokeFour.NamePokemon + "\",\"" + element.pokeFour.PokemonImage + "\")' class='btn btn-primary btn-sm more-info'> More Info</button></a></div>" +
            '</td>' +
            '<td>' +
            '<div><img class ="imgFive" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeFive.PokemonImage + '"  alt="' + element.pokeFive.NamePokemon + '"></div>' +
            '<h6>' + element.pokeFive.NamePokemon + '</h6>' +
            "<div class='more-info-pokeFive' style='display: none;'><a href='base/move-list-lista-time.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.pokeFive.NamePokemon + "\",\"" + element.pokeFive.PokemonImage + "\")' class='btn btn-primary btn-sm more-info' > More Info</button></a></div>" +
            '</td>' +
            '<td>' +
            '<div><img class ="imgSix" style="width: 3rem; height:3rem; display: none;" src="' + element.pokeSix.PokemonImage + '"  alt="' + element.pokeSix.NamePokemon + '"></div>' +
            '<h6>' + element.pokeSix.NamePokemon + '</h6>' +
            "<div class='more-info-pokeSix' style='display: none;'><a href='base/move-list-lista-time.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.pokeSix.NamePokemon + "\",\"" + element.pokeSix.PokemonImage + "\")' class='btn btn-primary btn-sm more-info'> More Info</button></a></div>" +
            '</td>' +
            '<td><button class="btn btn-ghost-warning">Editar</button><button onclick="onClickBtnExcluir(' + index + ')" id="btn-excluir" class="btn btn-ghost-danger">Excluir</button></td>' +
            '</tr>'

        if (element.pokeOne.PokemonImage) {
            document.querySelectorAll(".imgOne")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeOne")[index].style.display = "inline-block"
        }
        if (element.pokeTwo.PokemonImage) {
            document.querySelectorAll(".imgTwo")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeTwo")[index].style.display = "inline-block"
        
        }
        if (element.pokeThree.PokemonImage) {
            document.querySelectorAll(".imgThree")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeThree")[index].style.display = "inline-block"
        }
        
        if (element.pokeFour.PokemonImage) {
            document.querySelectorAll(".imgFour")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeFour")[index].style.display = "inline-block"
            
        }
        if (element.pokeFive.PokemonImage) {
            document.querySelectorAll(".imgFive")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeFive")[index].style.display = "inline-block"
        }
        if (element.pokeSix.PokemonImage) {
            document.querySelectorAll(".imgSix")[index].style.display = "flex"
            document.querySelectorAll(".more-info-pokeSix")[index].style.display = "inline-block"
        }

    })


}


function onClickBtnExcluir(filterParam) {
    let realocandoStorageLista = getListTeamStorage()
    realocandoStorageLista = realocandoStorageLista.filter(function (element, index) {
        console.log(element, index)
        return filterParam != index
    })
    localStorage.setItem(listTeamKey, JSON.stringify(realocandoStorageLista))
    preencherListaTime()
}

function moreInfoPokeSelect(namePokeSelect, imgLinkSelect) {
    console.log(namePokeSelect, imgLinkSelect)
    let moreInfoSelect = {
        namePokemonSelect: namePokeSelect,
        pokemonImageSelect: imgLinkSelect
    }
    localStorage.setItem(tempStorageKey, JSON.stringify(moreInfoSelect))
    console.log(moreInfoSelect)
}