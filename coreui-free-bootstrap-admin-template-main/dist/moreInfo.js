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
function getTeamStorage() {
    const StorageTeamAdd = localStorage.getItem(listPokemonCardKey)
    return JSON.parse(StorageTeamAdd) || []  /*maneira mais pratica de dizer que pode estar preenchida ou nulo (|| = a "ou" [] = a "null")
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



        getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
            '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
            '<h6 value="' + index + '">' + element.name + '</h6>' +
            "<button onclick= 'addPokemon(\"" + element.name + "\",\"" + link + "\")' class='btn btn-success' id='addToTeam'>Add To Team</button>" +
            '</div>'
            // if(getTeamStorage().length<1){
            //     getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
            // '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
            // '<h6 value="' + index + '">' + element.name + '</h6>' +
            // "<button onclick= 'addPokemon(\"" + element.name + "\",\"" + link + "\")' class='btn btn-success' id='addToTeam'>Add To Team</button>" +
            // '</div>'
                
           
            // } else {
            //     getElementById(pokemonId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4"  class="validacao">' +
            // '<div value="' + index + '"><img src="' + link + '"  alt="' + element.name + '"></div>' +
            // '<h6 value="' + index + '">' + element.name + '</h6>'
            
            
            }


        }
    //getElementById(pokemonId).innerHTML +="<button onclick='previousPagesssss(\""+response.data.previous+"\")'>Previous</button>"
    // nextLink = response.data.next
    // previousLink = response.data.previous



// function addPokemon(namePoke, imgLink) {
//     console.log(namePoke, imgLink)
//     let pokemonSelect = {
//         NamePokemon: namePoke,
//         PokemonImage: imgLink
//     }
//     console.log(pokemonSelect)

    // if (getTeamStorage() == null) {
    //     let whoIsThisPokemon = [pokemonSelect]
    //     localStorage.setItem(listPokemonCardKey, JSON.stringify(whoIsThisPokemon))
    // } else {
    //     const TeamStorageRealocando = getTeamStorage()
    //     TeamStorageRealocando.push(pokemonSelect)
    //     localStorage.setItem(listPokemonCardKey, JSON.stringify(TeamStorageRealocando))
    // }

//     const teamStorageRealocando = getTeamStorage()
//     if(teamStorageRealocando.length<6){
//         teamStorageRealocando.push(pokemonSelect)
//         localStorage.setItem(listPokemonCardKey, JSON.stringify(teamStorageRealocando))
//         upPokeAdd()
//         getPag1(pokeApiLink)
//     }/* um if para estabelecer que que o comprimento pode ir somente até 6 lugares (length é o total e conta a partir do 1)
//     como nao precisei mais do if como mencionei a cima, já dou o push direito na resposta do if */

// }
/*declarei primeiro as variaveis (nextLink e previousLink) fora sem receber nenhum valor e aqui dentro de minha funcao estou
empregando valores a elas */
//getPokemonsList()

getPag1(pokeApiLink)

// upPokeAdd()
// function upPokeAdd() {
//     console.log(getElementById(pokeAddTeamId))
//     getElementById(pokeAddTeamId).innerHTML = ""

//     getTeamStorage().forEach(function (element, index) {
//         console.log(element, index)
//         getElementById(pokeAddTeamId).innerHTML += '<div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4" >' +
//         '<div value="' + index + '"><img src="' + element.PokemonImage + '"  alt="' + element.NamePokemon + '">' +
//         '<h6 value="' + index + '">' + element.NamePokemon + '</h6></div>' +       
//         '<div class="btn-group">'+         
//             '<a href="base/move-list.html" class="btn btn-primary btn-sm">More Info</a>'+
//             '</div>'+
//             "<button onclick= 'deleteToTeam("+index+")' class='btn btn-danger' id='addToTeam'>Delete To Team</button>" +
//         '</div>'
//     });
// }
// function deleteToTeam(poke){
//    let realocandoGetTeamStorage = getTeamStorage()
//     realocandoGetTeamStorage =  realocandoGetTeamStorage.filter(function(element, index){
//         console.log(element, index)
//         return  poke != index
//     })
//     localStorage.setItem(listPokemonCardKey,JSON.stringify(realocandoGetTeamStorage))
//     upPokeAdd()
//     getPag1(pokeApiLink)

// }

/*chamei a variavel pokeApiLink dentro da funcao, assim ele me tras todos os pokemons ja que o valor dessa variavel
é o link de todos eles*/


    

