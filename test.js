var pokemonId = "pokemon"
var proximoId = "proximo"
var nextLink
var previousLink
var pokeApiLink = 'https://pokeapi.co/api/v2/pokemon'
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
    if (nextLink) {
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
async function getPag1(pokeApiLinkParam) {
    const response = await axios.get(pokeApiLinkParam)
    getElementById(pokemonId).innerHTML = ''//primeiro começa com a lista limpa 
    response.data.results.forEach(function (element, index) {
        getElementById(pokemonId).innerHTML += '<li value="' + index + '">' + element.name + '</li>'
    });
    //getElementById(pokemonId).innerHTML +="<button onclick='previousPagesssss(\""+response.data.previous+"\")'>Previous</button>"
    nextLink = response.data.next
    previousLink = response.data.previous

}
getPag1(pokeApiLink)



async function getPag2() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    response.data.results.forEach(function (element, index) {
        console.log(element, index)
        getElementById(pokemonId).innerHTML += '<li value="' + index + '">' + element.name + '</li>'
    });
    //getElementById(proximoId).innerHTML = '<button onclick="">anterior</button><button onclick="">proximo</button>'

}



