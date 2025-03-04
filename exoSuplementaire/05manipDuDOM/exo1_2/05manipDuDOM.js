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




let btn =document.querySelector(".buttonSeckene")

function cliquermoi () {
    btn.textContent="eh ohhhhh"
}

let chien =document.querySelector(".chien")
console.log(chien)

chien.addEventListener("click",()=>{
        chien.textContent="ah ahh"
})