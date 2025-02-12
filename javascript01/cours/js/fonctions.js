
// LES FONCTIONS


// une Fo en js est un bloc de code réutilisable qui exécute une tâche spécifique
// elle peut recevoir des paramètres, effectuer des opé et retourner un résultat

// on peut déclarer une Fo en utilisant les mots clés "function"

function direBonjour(){
    console.log("hello")
}  
//  direBonjour est une Fo qui affiche hello ds la console
// pour exécuter cette Fo on doit l'appeler, NE PAS OUBLIER les ()
direBonjour() // on appelle la Fo hello s'affiche sur console

function consol(message){
    console.log(message)// on met un paramètre message on choisit le nom
}
consol("j'ecris V R A I M E N T n'importe quoi")


let b=12
let a= "mommy"
consol(typeof b)
consol(typeof a)


let c=3
let d=4
//Fo pour * par 2 c et d

function multi2 (n){
    return n * 2 //return : pour qu'il donne le résultat
}
consol(multi2(c))
consol(multi2(d))

//écrire Fo réutilisable avec parametre qui ecrit un texte dans DOM avec write
let text="je suis le texte"
let text2="je suis le second texte"

function textDom(phrase){
    document.write("<p style='color:aquamarine'>" + phrase + "</p>")
}
textDom(text)
textDom(text2) 

// Fo avec return : une Fo put retourner une val avec return
function add(a, b){
    return a+b
}
consol(add(5,2))