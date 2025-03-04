//faire un event au click sur le bouton et afficher valeur de l'input ds console
// non entre un nom qui s'affiche dans un tableau

const input = document.getElementById("input")
const button = document.getElementById("button")
// console.log("valeur de l'input", valeur) //normalement  ce qu'on ecrit se voit ds console log
input.value = "" //val rentrée dans input à mettre pour firefox
let tableauMU = []

button.addEventListener("click", function () {
    const valeur = input.value // ce qu'on renseigne ds l'input
    // à mettre à l'int. de la Fo pour que ça prenne la valeur de ce qu'on rentre dans l'input
    // ca prend la val de l'input après le click

    if (valeur ==="") {
        alert("rempli comme il faut")
    } else {
        console.log("valeur input : " + valeur);
        tableauMU.push(valeur)
        console.log("tableau mu : ", tableauMU);
        // document.write("<table>i</table>") // deprecated
        return      
    }
for (let i = 0; i < tableauMU.length; i++) {
    // const i = (valeur)
}
})


// 
    // if (valeur !== "") {    // if (typeOf valeur!=="string"){ alert= ...
    //     console.log(valeur);
    //     input.value = ""

    // } else {
    //     alert("rempli comme il faut")
    // }


