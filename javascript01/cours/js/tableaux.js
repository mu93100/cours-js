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

// ----------modifier un élément d'un tab
// pour tableau on peut utiliser const ISO let car on pourra les modifier

fruits[0]="fraise"
console.log("fruits modifiés", fruits);

// ----------ajouter un élément ds tab

fruits.push("mangue") // s'ajoute à la fin
console.log("fruits modifiés mangue", fruits);

fruits.unshift("cerise") // s'ajoute en 1er
console.log("fruits modifiés cerise", fruits);

fruits.splice(1,0,"clém") // s'ajoute en 2ème
console.log("fruits modifiés clem", fruits);

//chaines de caractères considérées aussi cô des tab
log splice unshift push ETC : Fo  
fruits.pop() //supp dernuers elements
console.log(fruits);
