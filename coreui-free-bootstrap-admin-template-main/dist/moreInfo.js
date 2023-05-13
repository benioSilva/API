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
var tempStorageKey = "pokeSelect"
var pokemonTargetId = "pokemonSelectMoreInfo"
var movesTargetId = "movesTarget"
function getTeamStorage() {
    const StorageTeamAdd = localStorage.getItem(listPokemonCardKey)
    return JSON.parse(StorageTeamAdd) || []  /*maneira mais pratica de dizer que pode estar preenchida ou nulo (|| = a "ou" [] = a "null")
    dessa forma nao precisei faz o if para validar que o localStorage estava null para  inserir os dados*/
}

function getElementById(id) {
    return document.getElementById(id)
}

function getTempStorage(){
    const StorageTemp = localStorage.getItem(tempStorageKey)
    return JSON.parse(StorageTemp)
}

let namePokeTarget = getTempStorage().namePokemonSelect
console.log(namePokeTarget)
let imgPokeTarget = getTempStorage().pokemonImageSelect

function pokemonTarget(){
    getElementById(pokemonTargetId).innerHTML = '<div   class="validacao">' +
        '<div><img src="' + imgPokeTarget + '"  alt="' + namePokeTarget+ '"></div>' +
        '<h6>' + namePokeTarget + '</h6>' 
}
pokemonTarget()
getMovesNames()
async function getMovesNames() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/'+namePokeTarget+'')
    response.data.moves
    console.log(response.data.moves)
    
     
     for (let index = 0; index < response.data.moves.length; index++) {
        const element = response.data.moves[index];
        console.log(element.move.name, index)
        getElementById(movesTargetId).innerHTML += '<ol>'+
        '<li  value ="'+(index+1)+'">'+element.move.name+'</li>'+
        '</ol>'
        
     }


 }
