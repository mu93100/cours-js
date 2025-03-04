//EXO 1
// . Attachez une événement sur le <button> de manière à masquer l'<aside> 
// s'il est affiché, et de l'afficher s'il est masqué — ce que l'on appele 
// généralement un toggle.

// <button type="button">Toggle</button>
// {/* 
// <aside>Cachez ce contenu que je ne saurais voir.</aside>
//  */}
let bouton = document.querySelector("button")
let contenu = document.querySelector("aside")

bouton.addEventListener("click", function () {
    contenu.classList.toggle("invisible")
})




//EXO 2
// A l'aide du DOM-0, faites en sorte que quand ce bouton est cliqué, 
// il affiche Vous m'avez cliqué à la place de Cliquez-moi, 
// comme c'est le cas dans l'exemple ci-contre. 
// ici vous devez utiliser onclick et non addEventListener().

// <button>Cliquez moi</button>
let boutonclMoi = document.querySelector(".button2") 

function clickMoi() {
    boutonclMoi.textContent("Vous m'avez cliqué")
}


function name(params) {
    
}

// Seckene
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
   
//     <button onclick="cliquermoi()">Cliquez moi</button>
 
//     <button class="chien">Cliquez moi</button>
//     <script src="ex10.js"></script>
// </body>
// </html>
 
// let btn =document.querySelector("button")
// let chien =document.querySelector(".chien")
// console.log(chien)
 
 
// function cliquermoi () {
//     btn.textContent="eh ohhhhh"
// }
 
 
 
// chien.addEventListener("click",()=>{
//         chien.textContent="eh ohhhhh"
// })
 