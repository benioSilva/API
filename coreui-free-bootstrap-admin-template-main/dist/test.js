
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
var listaTimeId = "lista-de-time"
var btnExcluirId = "botao-excluir"
var btnCriarTimeId = "botao-criar-time"
limparLocalStorage()
function limparLocalStorage(){
let realocandoGetTeamStorage = getTeamStorage()
    realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {
        console.log(element, index)
        return index == null
    })

    localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))
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
        getPag1(previousLink)


    }
}
function previousPagesssss(link) {
    console.log(link)
    getPag1(link)
}
function nextPage() {
    if (nextLink) {/*faco um if para verificar se nextLink existe(condicao do if: se nextLink existe) me mostra o getPag1
    com o nextLink de paramentro */
        getPag1(nextLink)
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

async function getPag1(pokeApiLinkParam) {

    toggleSpinner()
    mostrarAdd()
    const response = await axios.get(pokeApiLinkParam)

    const listName = response.data.results
    /*como o axios.get recebe o mesmo parametro que a funcao getPag1, toda vez
    que o chamo o getPag1 com um valor diferente no paramentro ele me retorna valores difeerentes sob a mesma funcao (declarar a
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
        console.log(param)

        const link = await getSprites(element.name)

        if (getTeamStorage().length < 6) {
            getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
                '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
                '<h6 value="' + index + '">' + element.name + '</h6>' +
                "<a href='base/move-list.html' target='_blank' class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.name + "\",\"" + link + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
                "<button onclick= 'addPokemon(\"" + element.name + "\",\"" + link + "\")' class='btn btn-success botao-add' style='display: none;'>Add To Team</button>" +
                '</div>'


        } else {
            getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
                '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
                '<h6 value="' + index + '">' + element.name + '</h6>' +
                "<a href='base/move-list.html' target='_blank' class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.name + "\",\"" + link + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
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
    console.log(namePokeSelect, imgLinkSelect)
    let moreInfoSelect = {
        namePokemonSelect: namePokeSelect,
        pokemonImageSelect: imgLinkSelect
    }
    localStorage.setItem(tempStorageKey, JSON.stringify(moreInfoSelect))
    console.log(moreInfoSelect)
}

function addPokemon(namePoke, imgLink) {
    console.log(namePoke, imgLink)

    let pokemonSelect = {
        NamePokemon: namePoke,
        PokemonImage: imgLink
    }
    console.log(pokemonSelect)



    const teamStorageRealocando = getTeamStorage()
    if (teamStorageRealocando.length < 6) {
        teamStorageRealocando.push(pokemonSelect)
        localStorage.setItem(listPokemonCardKey, JSON.stringify(teamStorageRealocando))
        upPokeAdd()
        toggleBtnCriarTime()

        mostrarAdd()
        getPag1(pokeApiLink)


    }/* um if para estabelecer que que o comprimento pode ir somente até 6 lugares (length é o total e conta a partir do 1)
    como nao precisei mais do if como mencionei a cima, já dou o push direito na resposta do if */

}
/*declarei primeiro as variaveis (nextLink e previousLink) fora sem receber nenhum valor e aqui dentro de minha funcao estou
empregando valores a elas */


getPag1(pokeApiLink)


function upPokeAdd() {

    toggleBtnCriarTime()

    mostrarAdd()
    console.log(getElementById(pokeAddTeamId))


    getElementById(pokeAddTeamId).innerHTML = ""

    getTeamStorage().forEach(function (element, index) {
        console.log(element, index)

        getElementById(pokeAddTeamId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4" >' +
            '<div value="' + index + '"><img src="' + element.PokemonImage + '"  alt="' + element.NamePokemon + '">' +
            '<h6 value="' + index + '">' + element.NamePokemon + '</h6></div>' +
            "<a href='base/move-list.html' target='_blank' class='list-group-item list-group-item-action'><button onclick= 'moreInfoPokeSelect(\"" + element.NamePokemon + "\",\"" + element.PokemonImage + "\")' class='btn btn-primary btn-sm'> More Info</button></a>" +
            "<button onclick= 'deleteToTeam(" + index + ")' class='btn btn-danger' >Delete To Team</button>" +
            '</div>'
    });
    
  
    

}


function deleteToTeam(poke) {

    let realocandoGetTeamStorage = getTeamStorage()
    realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {
        console.log(element, index)
        return poke != index
    })

    localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))
    upPokeAdd()
    toggleBtnCriarTime()
    mostrarAdd()
    getPag1(pokeApiLink)



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

        console.log(dadosEquipe)
        const realocandoGetListTeamStorage = getListTeamStorage()
        realocandoGetListTeamStorage.push(dadosEquipe)
        localStorage.setItem(listTeamKey, JSON.stringify(realocandoGetListTeamStorage))
        limparLocalStorage()
        getElementById(nameTeamPokeId).value = ""
       
        toggleBtnSalvar()
        getPag1(pokeApiLink)



    } else {
        alert("Preencher Nome do Time")
    }
    

})

function preencherListaTime() {
    getElementById(listaTimeId).innerHTML = ""
    getListTeamStorage().forEach(function (element, index) {

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
            '<td><button class="btn btn-ghost-danger">Excluir</button></td>'

    })

}

function excluirStorage() {

    let realocandoGetTeamStorage = getTeamStorage()
    realocandoGetTeamStorage = realocandoGetTeamStorage.filter(function (element, index) {
        console.log(element, index)
        return index == null
    })
    getElementById(nameTeamPokeId).value = ""
    localStorage.setItem(listPokemonCardKey, JSON.stringify(realocandoGetTeamStorage))

    //toggleBtnExcluir()
    upPokeAdd()
    getPag1(pokeApiLink)
    
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
mostrarAdd()
function mostrarAdd(){
    var btnCriarTimeDisplayNone = getElementById(btnCriarTimeId).style.display == "none"
    if(btnCriarTimeDisplayNone) {
        document.querySelectorAll(".botao-add").forEach(element => {
            element.style.display = "inline-block"
        })
    } else{
        document.querySelectorAll(".botao-add").forEach(element => {
            element.style.display = "none"
        })
    }
    console.log(btnCriarTimeDisplayNone)
}