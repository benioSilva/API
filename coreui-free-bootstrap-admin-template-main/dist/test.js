
var pokeAddTeamId = "pokemonTeamx"
var pokemonId = "pokemon"
var pokemonCardId = "pokemonCard"
var pokemonNameId = "pokemonName"
var imagemId = "imagem"
var nextLink
var previousLink
var pokeApiLink = 'https://pokeapi.co/api/v2/pokemon'
var listPokemonCardKey = "ListCardPokemon"
var namePokemonLink
var indexName
var param
var nameTeamId = "nameTeam"
var tempStorageKey = "pokeSelect"
var nameTeamPokeId = "nome-time"
var listTeamKey = "listTeam"
var btnSalvarId = "botao-salvar"
var editarTimeKey = "editarTime"
var btnExcluirId = "botao-excluir"
var btnCriarTimeId = "botao-criar-time"
var lastLink
initPage()
async function initPage() {
    limparLocalStorage()
    await loadPagePokemon(pokeApiLink)
    loadEditPokemon()
    /*funcao para iniciar a pagina contendo tudo que preciso ao iniciar a pagina: 
    - Primeiro: Limpo o storage da escolha de pokemons que ira ser o um time
    - Segundo:  Faco a chamada com await dos pokemons para carregar todos primeiro e depois eu prosseguir  com o resto do codigo
    - Terceiro: Carrego a funcao loadEdit que consiste em trazer um time salvo que escolhi editar ao clicar no botao editar e 
    passar ele para um local Storage proprio (no caso eu passo o index) apos passar pela validacao dos if's eu passo o time que 
    estou editando para o localStorage do Criar time   */

}


function limparLocalStorage() {
    let realocandoGetTeamStorage = getTeamStorage()
    if (realocandoGetTeamStorage) {
        realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {

            return index == null
        })

        localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))
    }

}
function getEditarStorage() {
    const storageEditar = localStorage.getItem(editarTimeKey)
    return JSON.parse(storageEditar) || []
}
function getTeamStorage() {
    const StorageTeamAdd = localStorage.getItem(listPokemonCardKey)
    return JSON.parse(StorageTeamAdd) || []  /*maneira mais pratica de dizer que pode estar preenchida ou nulo (|| = a "ou" [] = a "null")
    dessa forma nao precisei faz o if para validar que o localStorage estava null para  inserir os dados*/
}
function getListTeamStorage() {
    const StorageListTeamAdd = localStorage.getItem(listTeamKey)
    return JSON.parse(StorageListTeamAdd) || []  /*maneira mais pratica de dizer que pode estar preenchida ou nulo (|| = a "ou" [] = a "null")
    dessa forma nao precisei faz o if para validar que o localStorage estava null para  inserir os dados*/
}
//var namePokemonLink


function previousPage() {
    if (previousLink) {
        loadPagePokemon(previousLink)


    }
}
function previousPagesssss(link) {
    
    loadPagePokemon(link)
}
function nextPage() {
    if (nextLink) {/*faco um if para verificar se nextLink existe(condicao do if: se nextLink existe) me mostra o loadPagePokemon
    com o nextLink de paramentro */
        loadPagePokemon(nextLink)
    }
}

function getElementById(id) {
    return document.getElementById(id)
}

function get() {
    const response = axios.get('https://pokeapi.co/api/v2/pokemonsss')
    console.log(response)
    response
        .then(data => { console.log(data) })
        .catch(data => { console.log(data) })
    console.log(response)
}
// get()

async function getas() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    console.log(response)
    console.log(response.data)
    console.log(11111)

}
//getas()

//
////var axios = {
//    get: function(url) {
//        return new Promise(url)
//    }
//}
//
//const Promise = {
//    then: function(func) {
//        func()
//    }
//}
// Promise.then(ggg())
//
// function ggg() {
//    console.log(1)
//    return function() {
//        console.log(response)
//    }
// }
//async


// async function getPokemonsList() {
//     //const response = await axios.get(' https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/')
//     const response = await axios.get(' https://pokeapi.co/api/v2/pokemon')
//     response.data.results
//     const listFullPokemons = response.data.results
//     for (let index = 0; index < response.data.results.length; index++) {
//         const element = listFullPokemons[index];
//         const link = await getSprites(element.name)


//     }

// }

async function getSprites(para) {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + para + '')
    response.data.sprites.front_default
    //console.log(response.data.sprites.front_default)

    return response.data.sprites.front_default


}

async function loadPagePokemon(pokeApiLinkParam) {
    lastLink = pokeApiLinkParam

    toggleSpinner()
    mostrarAdd()
    const response = await axios.get(pokeApiLinkParam)

    const listName = response.data.results
    /*como o axios.get recebe o mesmo parametro que a funcao loadPagePokemon, toda vez
    que o chamo o loadPagePokemon com um valor diferente no paramentro ele me retorna valores difeerentes sob a mesma funcao (declarar a
        variavel antes com os valores que eu quero) */
    getElementById(pokemonId).innerHTML = ""
    //primeiro começa com a lista limpa
    /*response.data.results.forEach(async function (element, index) {
        console.log(response.data.results)
       const link = await getSprites(element.name)

        getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">' +
            '<div value="' + index +  '">' +'<img src="'+link+'" alt="'+element.name+'">' + '</div>' +
            '<h6 value="' + index + '" class=namePokemon>' + element.name + '</h6>' +
            '</div>'
    });*/
    for (let index = 0; index < response.data.results.length; index++) {
        const element = listName[index];
        param = element.name
       

        const link = await getSprites(element.name)

        if (getTeamStorage().length < 6) {
            getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
                '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
                '<h6 value="' + index + '">' + element.name + '</h6>' +
                "<a href='base/move-list.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.name + "\",\"" + link + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
                "<button onclick= 'addPokemon(\"" + element.name + "\",\"" + link + "\")' class='btn btn-success botao-add' style='display: none;'>Add To Team</button>" +
                '</div>'


        } else {
            getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
                '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
                '<h6 value="' + index + '">' + element.name + '</h6>' +
                "<a href='base/move-list.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.name + "\",\"" + link + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
                '</div>'
        }


    }
    toggleSpinner()
    mostrarAdd()


    //getElementById(pokemonId).innerHTML +="<button onclick='previousPagesssss(\""+response.data.previous+"\")'>Previous</button>"
    nextLink = response.data.next
    previousLink = response.data.previous



}
function moreInfoPokeSelect(namePokeSelect, imgLinkSelect) {
   
    let moreInfoSelect = {
        namePokemonSelect: namePokeSelect,
        pokemonImageSelect: imgLinkSelect
    }
    localStorage.setItem(tempStorageKey, JSON.stringify(moreInfoSelect))
   
}

function addPokemon(namePoke, imgLink) {
   

    let pokemonSelect = {
        NamePokemon: namePoke,
        PokemonImage: imgLink
    }


    const teamStorageRealocando = getTeamStorage()
    if (teamStorageRealocando.length < 6) {
        teamStorageRealocando.push(pokemonSelect)
        localStorage.setItem(listPokemonCardKey, JSON.stringify(teamStorageRealocando))
        upPokeAdd()
        toggleBtnCriarTime()

        mostrarAdd()
        loadPagePokemon(lastLink)


    }/* um if para estabelecer que que o comprimento pode ir somente até 6 lugares (length é o total e conta a partir do 1)
    como nao precisei mais do if como mencionei a cima, já dou o push direito na resposta do if */

}
/*declarei primeiro as variaveis (nextLink e previousLink) fora sem receber nenhum valor e aqui dentro de minha funcao estou
empregando valores a elas */


function loadEditPokemon() {
    const index = localStorage.getItem(editarTimeKey)
    if (index) {
        const time = getListTeamStorage()[index]
        const timeArray = []
        if (time.pokeOne) {
            timeArray.push(time.pokeOne)
        }
        if (time.pokeTwo) {
            timeArray.push(time.pokeTwo)
        }
        if (time.pokeThree) {
            timeArray.push(time.pokeThree)
        }
        if (time.pokeFour) {
            timeArray.push(time.pokeFour)
        }
        if (time.pokeFive) {
            timeArray.push(time.pokeFive)
        }
        if (time.pokeSix) {
            timeArray.push(time.pokeSix)
        }
        localStorage.setItem(listPokemonCardKey, JSON.stringify(timeArray))
        getElementById(nameTeamPokeId).value = time.nameTeam
        upPokeAdd()


    }
}




function upPokeAdd() {

    toggleBtnCriarTime()

    mostrarAdd()
    


    getElementById(pokeAddTeamId).innerHTML = ""

    getTeamStorage().forEach(function (element, index) {
        

        getElementById(pokeAddTeamId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4" >' +
            '<div value="' + index + '"><img src="' + element.PokemonImage + '"  alt="' + element.NamePokemon + '">' +
            '<h6 value="' + index + '">' + element.NamePokemon + '</h6></div>' +
            "<a href='base/move-list.html'  class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.NamePokemon + "\",\"" + element.PokemonImage + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
            "<button onclick= 'deleteToTeam(" + index + ")' class='btn btn-danger' >Delete To Team</button>" +
            '</div>'
    });

}


function deleteToTeam(poke) {

    let realocandoGetTeamStorage = getTeamStorage()
    realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {
       
        return poke != index
    })

    localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))
    upPokeAdd()
    toggleBtnCriarTime()
    mostrarAdd()
    loadPagePokemon(pokeApiLink)



}
function toggleSpinner() {/*essa função faz com que a tela funciona como um interruptor atribuindo o valor de none 
para o display e com o if pergunto se minha variavel tem o o display none, se tiver quero que ele passa a ser block
e o meu corpo passa a ser none (acende um / apaga outro) e o else para fazer o contrario, mas entrando no elements
pelo console do navegador, indica que o display da tela nao e block, mas sim flex, entao ele retorna para flex e me 
mostra a visualização padrao assim  que carregar todos os pokemons*/

    var isSpinnerDisplayNone = document.getElementById("spinner").style.display == "none"
    if (isSpinnerDisplayNone) {
        document.getElementById("spinner").style.display = "block"
        getElementById(pokemonId).style.display = "none"
        document.querySelectorAll(".btn-change-page").forEach(element => {
            element.disabled = true
        });
    } else {
        document.getElementById("spinner").style.display = "none"
        getElementById(pokemonId).style.display = "flex"
        document.querySelectorAll(".btn-change-page").forEach(element => {
            element.disabled = false
        });

    }
}
/*chamei a variavel pokeApiLink dentro da funcao, assim ele me tras todos os pokemons ja que o valor dessa variavel
é o link de todos eles*/






getElementById(btnSalvarId).addEventListener('click', function (event) {
    event.preventDefault();



    if (getElementById(nameTeamPokeId).value != "") {


        let dadosEquipe = {
            nameTeam: getElementById(nameTeamPokeId).value,
            pokeOne: getTeamStorage()[0],
            pokeTwo: getTeamStorage()[1],
            pokeThree: getTeamStorage()[2],
            pokeFour: getTeamStorage()[3],
            pokeFive: getTeamStorage()[4],
            pokeSix: getTeamStorage()[5],

        }

        const realocandoGetListTeamStorage = getListTeamStorage()
        const indexEditPokemon = localStorage.getItem(editarTimeKey)
        if (indexEditPokemon) {
            realocandoGetListTeamStorage[indexEditPokemon] = dadosEquipe
            localStorage.removeItem(editarTimeKey)
        } else {
            realocandoGetListTeamStorage.push(dadosEquipe)
        }

        localStorage.setItem(listTeamKey, JSON.stringify(realocandoGetListTeamStorage))
        limparLocalStorage()
        getElementById(nameTeamPokeId).value = ""

        toggleBtnSalvar()
        loadPagePokemon(pokeApiLink)



    } else {
        alert("Preencher Nome do Time")
    }


})


function excluirStorage() {
    const indexEditPokemon = localStorage.getItem(editarTimeKey)
    if (indexEditPokemon) {
        const listaTime = getListTeamStorage().filter(function (element, index) {

            return indexEditPokemon != index
        })
        localStorage.setItem(listTeamKey, JSON.stringify(listaTime))
        localStorage.removeItem(editarTimeKey)
    }

    let realocandoGetTeamStorage = getTeamStorage()
    realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {
        return index == null
    })
    getElementById(nameTeamPokeId).value = ""
    localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))

    //toggleBtnExcluir()
    upPokeAdd()
    loadPagePokemon(pokeApiLink)

}
function toggleBtnCriarTime() {
    var isBtnCriarTimeDisplayBlock =
        getElementById(btnCriarTimeId).style.display == "inline-block"
    if (isBtnCriarTimeDisplayBlock) {
        getElementById(btnCriarTimeId).style.display = "none"
        getElementById(btnExcluirId).style.display = "inline-block"
        getElementById(btnSalvarId).style.display = "inline-block"
        getElementById(pokeAddTeamId).style.display = "flex"
        getElementById(nameTeamId).style.display = "block"


    } else {
        getElementById(btnCriarTimeId).style.display = "inline-block"
        getElementById(btnExcluirId).style.display = "none"
        getElementById(btnSalvarId).style.display = "none"
        getElementById(pokeAddTeamId).style.display = "none"
        getElementById(nameTeamId).style.display = "none"


    }
}
function toggleBtnSalvar() {
    var isBtnSalvarDisplayNone =
        getElementById(btnSalvarId).style.display == "none"
    if (isBtnSalvarDisplayNone) {
        getElementById(btnSalvarId).style.display = "inline-block"
        getElementById(btnCriarTimeId).style.display = "none"
        getElementById(btnExcluirId).style.display = "inline-block"
        getElementById(pokeAddTeamId).style.display = "flex"
        getElementById(nameTeamId).style.display = "block"


    } else {

        getElementById(btnCriarTimeId).style.display = "inline-block"
        getElementById(btnExcluirId).style.display = "none"
        getElementById(btnSalvarId).style.display = "none"
        getElementById(pokeAddTeamId).style.display = "none"
        getElementById(nameTeamId).style.display = "none"


    }
}
function toggleBtnExcluir() {
    var isBtnSalvarDisplayBlock =
        getElementById(btnExcluirId).style.display == "inline-block"
    if (isBtnSalvarDisplayBlock) {

        getElementById(btnExcluirId).style.display = "inline-block"
        getElementById(btnSalvarId).style.display = "inline-block"
        getElementById(pokeAddTeamId).style.display = "flex"
        getElementById(nameTeamId).style.display = "block"


    } else {


        getElementById(btnExcluirId).style.display = "none"
        getElementById(btnSalvarId).style.display = "none"
        getElementById(pokeAddTeamId).style.display = "none"
        getElementById(nameTeamId).style.display = "none"
    }
}

function mostrarAdd() {
    var btnCriarTimeDisplayNone = getElementById(btnCriarTimeId).style.display == "none"
    if (btnCriarTimeDisplayNone) {
        document.querySelectorAll(".botao-add").forEach(element => {
            element.style.display = "inline-block"
        })
    } else {
        document.querySelectorAll(".botao-add").forEach(element => {
            element.style.display = "none"
        })
    }
}

