var pokemonId = "pokemon"
var imagemId = "imagem"
var nextLink
var previousLink
var pokeApiLink = 'https://pokeapi.co/api/v2/pokemon'
var linkNamePokemonKey = "linkNamePokemon"
var namePokemonLink
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
async function getSprites(para){
    const response2 = await axios.get('https://pokeapi.co/api/v2/pokemon/'+para+'')
    response2.data.sprites.front_default 
    console.log(response2.data.sprites.front_default)
    
    return response2.data.sprites.front_default
   

}

async function getPag1(pokeApiLinkParam) {
    const response = await axios.get(pokeApiLinkParam)
    
    
    console.log(response)/*como o axios.get recebe o mesmo parametro que a funcao getPag1, toda vez
    que o chamo o getPag1 com um valor diferente no paramentro ele me retorna valores difeerentes sob a mesma funcao (declarar a 
        variavel antes com os valores que eu quero) */
    getElementById(pokemonId).innerHTML = ""
   //primeiro começa com a lista limpa 
    response.data.results.forEach(async function (element, index) {
        console.log(response.data.results)
       const link = await getSprites(element.name)
       
        getElementById(pokemonId).innerHTML += '<div class="CardPokemon" class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4">' +
            '<div value="' + index + '" class="imagePokemon" class="bg-primary theme-color w-75 rounded mb-2" style="padding-top:75%">' +'<img src="'+link+'" alt="'+element.name+'">' + '</div>' +
            '<h6 value="' + index + '" class=namePokemon>' + element.name + '</h6>' + 
            '</div>'
            
           
            
            


    
    });
    //getElementById(pokemonId).innerHTML +="<button onclick='previousPagesssss(\""+response.data.previous+"\")'>Previous</button>"
    nextLink = response.data.next
    previousLink = response.data.previous
   
  

    /*declarei primeiro as variaveis (nextLink e previousLink) fora sem receber nenhum valor e aqui dentro de minha funcao estou 
    empregando valores a elas */

}

getPag1(pokeApiLink)

/*chamei a variavel pokeApiLink dentro da funcao, assim ele me tras todos os pokemons ja que o valor dessa variavel
é o link de todos eles*/


