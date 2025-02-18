/*---------------------------
manip du Dom
-----------------------------

1. sélectionner des éléments et les mettre ds une variable/ (déclarer une variable ?)-------------*/

// let titre=document.getElementById("titre") //selectionner une ID
// let paragraphe=document.getElementsByTagName("p") // sélectionner une balise
// let elementClass=document.getElementsByClassName("ma-classe")

// let premierParagraphe=document.querySelector("p")
// let premierParagraphe=document.querySelector("#monId")
// let allParagraphe=document.querySelectorAll

const titre=document.getElementById("titre")// selectionner un ID
const paragraphe=document.getElementsByTagName("p") // selectionner une balise
const elementClass= document.getElementsByClassName ("ma-classe") // selectionne la premiere class qu'il trouve avec ce nom
const premierParagraphe=document.querySelector("p")// selectionne le 1er paragraphe
const unId=document.querySelector("#monId")// selectionne id
const uneClass=document.querySelector(".uneClass") //selectione une classe
const allParagraphe=document.querySelectorAll("p") //selectione tous les paragraphes
const toutesLesClass=document.querySelectorAll(".ma-classe") // selectionne tous les class ma-classe


// 2. modif du contenu
let titre1=document.getElementById("titre1")// selectionner un ID
let titre2=document.getElementById("titre2")// selectionner un ID

if(titre1){
    titre1.innerHTML="<span>ajout depuis js T I T R E </span>" //ajout dans html
}
if(titre2){
    titre2.textContent="CHANGER LE titre" // change le texte du titre
}

// 3. modif de style
let titre3=document.getElementById("titre3")// selectionner un ID
if (titre3) {
    titre3.style.color="tomato"
    titre3.style.fontSize="50px"
    titre3.style.padding="10px"
}

// 4. gestion de class en CSS /// voir exo france W
// let titre=document.querySelector(".titre")
// classList avec element titre --> on donne acces à des classes qui vont etre rattachées 
// à element titre (ajoutées add/ enlevées remove/ ajoutées enlevées toggle)
// il faut créer la class .ajout-de-class .supp-ma-class ETC ds <style>CSS
// titre.classList.add("ajout-de-class") // ajoute une class à un element du dom
// titre.classList.remove("supp-ma-class") // supp une class 
// titre.classList.toggle("ma-class") // ajoute une class si absente, ou supp la class si présente

// 5. création et insertion
const newParagraphe=document.createElement("p")  // creation d'une balise p 
// // TOUJOURS création de l'élément en 1er

newParagraphe.textContent="ceci est un Nx paragraphe ajouté par js"
text.appendChild(newParagraphe) // créer un élément enfant
newParagraphe.style.color="red"
newParagraphe.classList.add("ajout-class-js")

// sélectionner id text2 ds fichier html et le mettre ds une variable
let text2=document.querySelector("#text2")
// créer un h1 en ajoutant un titre: "titre2" qui sera l"enfant de text2
let enfantText2=document.createElement("h1")
enfantText2.textContent="titre2 de text2"
text2.appendChild(enfantText2)
// ajouter une class à text2 et modifier son css via la balise style ds fichier css
text2.classList.add("ajout-class-text2")



// 6. évènement javascript
// les evènements en js permettent ,d'intéragir avec les actions click, saisie, défilement)
// click : qd un element est clické
// mouseover : qd la souris passe sur un element
// scroll : qd on défile sur la page
// keydown : quand on touche une touche du clavier
let button_essai=document.querySelector(".button_essai")

// tout ce qui est après Fo est  I N V E N T é, ce ne sont pas des Fo natives 
function alertClick() {
    alert ("t'as qu'à t'en fouttre")
}
function colorChange() {
    button_essai.style.background="green" 
    }

//------------autre façon de faire :::
let button_essai2=document.querySelector (".button_essai2");
// console.log(button_essai2);
button_essai2.addEventListener("mouseover",()=>{  // ATTENTION -->mouseover, click veulent dire qqie chose / pas inventés
    button_essai2.style.background="black"
    button_essai2.style.color= "white"
 })
let text3=document.querySelector("#text3")
text3.addEventListener("click", function() {
    text3.textContent="ciao"
    text3.style.background="tomato"
})
//---------carré blue
let carreB=document.querySelector(".carreB")
carreB.addEventListener("click",()=>{
    carreB.style.width="5rem";
    carreB.style.height="5rem";
    if(carreB.style.width="5rem"){
        carreB.style.transform="scale(1) 1000ms";
    }
})

// carreB.addEventListener("click",()=>{
//     carreB.style.width="5rem";
//     carreB.style.height="5rem";
// })

//---------carré TOMATO
let carreT=document.querySelector(".carreT")
    carreT.addEventListener("mouseover",()=>{
    carreT.style.transform="scale(5)";
})
    carreT.addEventListener("mouseout",()=>{
    carreT.style.transform="scale(1)";
})
//// -------------M O D A L
let buttonModal=document.querySelector ("#buttonModal")
let modal=document.querySelector (".modal")

buttonModal.addEventListener("click", function () {
    // modal.style.display="block"
    buttonModal.style.display="none";
    modal.classList.toggle ("blokkk") 
    buttonFERmodal.style.display="block"
})
buttonFERmodal.addEventListener("click", function () {
    // modal.style.display="block"
    buttonModal.style.display="block"; // avec style le "block" n'est pas inventé
    modal.classList.toggle ("blokkk") 
    buttonFERmodal.style.display="none"
})

//  -----------textChange modif le texte qd on click dessus
// let buttonTextChange=document.querySelector("buttonTextChange") //  querySelector ou getElementsByClassName (ou getElementsById)
// let textChange=document.getElementsByClassName("textChange")
// buttonTextChange.addEventListener("click", function() {
//     textChange.textContent="T E X Tqui a changé, l'idiot"
// } )

/**
 * 
 * 
* Exercice 2 : Détecter le survol d'un élément et modifier son style
*/

/*-------------ex3 liste----
* Exercice 3 : Ajouter un nouvel élément à une liste <ul>  <li></li> </ul> au clic sur un bouton
* utiliser creatElement "li" et appenChild
*/
// let list=document.getElementsByClassName("liste") // avec getElementsByClassName 
// // let newLi
// console.log(list);



/*------------------Exercice 4 : 
creer une liste de noms depuis une variable utilisateur contenant un tableau 
la mettre dans une div du dom
*
* pour cela creer une bloucle for qui boucle sur le tableau
* ajouter createElement "li" et
* ajouter un textContent a "li" qui sera le i (index) de utilisateur
*
* creer une fonction au click affichant une alert quand un nom de la liste du tableau
est cliqué.
* dans alert " vous avez cliqué sur + "nom de l'utlisateur cliqué" "
*/
