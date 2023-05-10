var pokemonId = "pokemon"
var proximoId = "proximo"

function getElementById(id){
return document.getElementById(id)
}

function get(){
    const response = axios.get('https://pokeapi.co/api/v2/pokemonsss')
    console.log(response)
    response
        .then(data => {console.log(data)})
        .catch(data => {console.log(data)})
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
function getPag1(){
    const compromisso = axios.get('https://pokeapi.co/api/v2/pokemon')
    compromisso
        .then((data) => {
            
            data.data.results.forEach(function(element, index) {
                console.log(element, index)
                getElementById(pokemonId).innerHTML += '<li value="'+index+'">'+element.name+'</li>'                                   
            });
            getElementById(proximoId).innerHTML = '<button onclick="getPag2()">Proximo</button>'
        })
        .catch((data) => {console.log(data.data.results)})
    console.log(compromisso)
    
    
}
getPag1()

async function getPag2(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20')
        response.data.results.forEach(function(element, index){
            console.log(element, index)
            getElementById(pokemonId).innerHTML += '<li value="'+index+'">'+element.name+'</li>'                                   
        });
        getElementById(proximoId).innerHTML = '<button onclick="getPag2()">anterior</button><button onclick="">proximo</button>'
   
}
getPag2()

function alterarPagina(para1){
    
}

