console.log("Inicio script")

/*

O fetch faz uma requisição para o endpoint de uma API. Nele, pode-se especificar qual o método a ser utilizado na requisição, dentre outros parâmetros de requisições como body, mode e headers.

De forma padrão e mais simplificada, numa requisição padrã́o, faz-se o fetch, retornando assim uma Promise, que é um objeto assíncrono, uma promessa. Sendo assim, não se pode processar esse conteúdo imediatamente, até porque talvez ele não tenha sido recebido na hora que a linha de código execute. Dessa forma, utiliza-se "then" para encadear uma sequência de comandos para serem executados ao receber efetivamente a requisição.

Por padrão, utiliza-se 2 ¨then¨ encadeados, sendo o primeiro para tratar a requisição inicial, e o segundo para interagir efetivamente com os dados recebidos

*** Pode-se observar a natureza assíncrona do código através do console.log inicial e final do script

*/

fetch("http://localhost:8000/").then(response => response.json()).then(data => console.log(data))

console.log("Final script")