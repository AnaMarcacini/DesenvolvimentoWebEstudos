let botao = document.querySelector("#botao")
// let botao = document.querySelector("button")
// let botao = document.querySelector(".burone")
// let botao = document.getElementById("botao")

let main = document.getElementById("main")
let x = 0;

/*
Como está sendo utilizado js puro, para interagir com os elementos da página, é necessário primeiro pega-los com getElementById ou querySelector.
*/


async function getData(){
    x = await fetch("http://localhost:8000/").then(request => request.json()).then(data => data)
    main.appendChild(document.createTextNode(x["Hello"]))
    //main.innerHTML = x['Hello']
    console.log(x)
}


botao.addEventListener("click", getData)