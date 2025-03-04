// 1-- Créer une fonction salutation qui prend nom en
// paramettre et affiche 
// une salutation personnalisée dans le console log


// 2 -- faire un click event sur un bouton qui appelle la fonction salutation.



function salut(i) {
    alert("salut " + i+ ", heureuse de te revoir")
}

salut("mu")

let button= document.querySelector(".buttonCLIQ")
button.addEventListener ("click", function () {
    salut("mu")
})

// let Btn = document.createElement("button")
// Btn.textContent= "cliquer ici"
// document.body.appendChild(Btn)


// Btn.addEventListener("click", ()=>{
//     let nom = prompt("Quel est votre nom ?");
//     salutation(nom);
// })

// function salutation(nom){
//     console.log("Bonjour " + nom);
// }
