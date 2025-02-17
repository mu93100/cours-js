/*-------------------------
les tableaux


créer un tab   ---*/

// 3 écritures différentes pour tab mais [] c'est ce qu'il y a de mieux

let tab1=new Array("element0", "element1")
let tab2=Array("element0", "element1")
let tab3=["element0", "element1"]

// -----------déclaration d'une liste = tab

// tab simple de nb1
let nombres=[1,2,3,4,5,6]

// tableau de chaine de caractères
let fruits=["banane","pomme","myrtilles"]

// tab mixte différent de type de données
let mixte=[42,"hello",true,{nom:"alice"},[1,2,3]]
//  index   0    1      2        2          4
// nom:"alice" --->nom=clé ""=valeur

// affichage de tab
console.log("nombres :", nombres)
console.log("fruits :", fruits)
console.log("mixte :", mixte)

// ----------accéder aux éléments d'un tab

console.log("1er fruit :", fruits[0]); // 3 index 0 1 2 TJRS dans []
console.log("2eme fruit :", fruits[1])
console.log("DERNIER fruit :", fruits[fruits.length-1])

console.log("mixte index3:", mixte[3]) // ATTENTION A INDEX 0 
console.log("mixte index4 rentrer dans tab index1 :", mixte[4][1])
console.log("mixte index3 rentrer dans objet :", mixte[3].nom) // OU 
console.log("mixte index3 rentrer dans objet :", mixte[3]["nom"])

// indexOf
// trouver l'index d'un tab :::
fruits.indexOf("pomme")
console.log("trouver l'index",fruits.indexOf("pomme"));

//vider un tab
let tab70=[1,2,3,4,5]
tab70.length=0
console.log("vide le tab",tab70);

// ---------------MODIF DE L'ORIGINAL D'UN TAB 
// ----------modifier un élément d'un tab
// pour tableau on peut utiliser const ISO let car on pourra les modifier

fruits[0]="fraise"
console.log("fruits modifiés", fruits);

// ----------ajouter un élément ds tab

fruits.push("mangue") // s'ajoute à la fin
console.log("fruits modifiés mangue", fruits);

fruits.unshift("cerise") // s'ajoute en 1er
console.log("fruits modifiés cerise", fruits);


// !!!! splice (index, 0, "nom") avec zero, on ajoute le "nom" 
// DIFF : avec 1, on supprime, et pas de  "nom" 
fruits.splice(1,0,"clém") // s'ajoute en 2ème
console.log("fruits modifiés clem", fruits);

let index=fruits.indexOf("pomme") // pour retrouver un élément, là pomme
let result=fruits.splice(index,1) //supprimer pomme
console.log("pomme supprimer", result);
console.log(fruits); // pomme supprimé

fruits.shift() //ne pas oublier les () SINON 9A NE MARCHE PAS
console.log("supp 1er element",fruits);


//chaines de caractères considérées aussi cô des tab
// log splice unshift push ETC : Fo  
fruits.pop() //supp dernier element
console.log(fruits);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());


// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// ---------------MODIF EN CREANT UN NX TAB =UNE COPIE DU TAB
// ----------extraire une partie du tab SANS modif l'original
let nouveauxFruits= fruits.slice (1.1)
console.log("Nx tab", nouveauxFruits);

// Fo pour filtrer des elements du tab - ici tt ce qui est <18
let ages=[12,21,55,66,13,19,18]
let resultat=ages.filter(
    function checkAdult(parametre) {
        return parametre >=18;
    }
)
console.log("Nx tab age >18", resultat); 
console.log("tab age n'est pas modifié",ages);

