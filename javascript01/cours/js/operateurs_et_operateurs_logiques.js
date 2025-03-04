/*---------------
les OPERATEURS : que les opérations ++++ opérateurs logiques

comparaison ???
---------------*/

//je déclare mes var
let nb1, nb2, resultat

//j'affecte des valeurs
nb1 = 10
nb2 = 5
nb3 = 3

//j'utilise une var avec un calcul

// ADDITION
resultat = nb1 + nb2
console.log("voir le résultat add : ", resultat)

// SOUSTRACTION
resultat = nb1 - nb2
console.log("voir le résultat souss : ", resultat)

// MULTIPLICATION
resultat = nb1 * nb2
console.log("voir le résultat multipl : ", resultat)

// DIVISION
resultat = nb1 / nb2
console.log("voir le résultat division : ", resultat)

// MODULO --> RESTE DE LA DIVISION / pour chiffres pairs (let pair= (n%2===0)) 
// et impairs (let impair= (n%2!==0))
resultat= nb1%nb3
console.log("voir le modulo_reste div nb1 par nb3", resultat)

resultat= nb1%nb2
console.log("voir le modulo_reste div nb1 par nb2", resultat)

console.log("le resultat du modulo de " + nb1 + "par" + nb2 + " est gal à " + resultat)

let chiffre=9
let chiffre2=4
resultat= chiffre % chiffre2
console.log(resultat)

//ecritures simplifiées
nb1=15
nb1=nb1+5 /*OU on peut écrire nb1 +=5*/


// ------------------------------
// opérateurs logiques
// ------------------------------

// && = et
// || = ou
// ! le contraire

let prenom
let loginPrenom
let age
let loginAge

// /ex: si prenom===loginPrenom ET age===loginAge

if(prenom===loginPrenom) && (age===loginAge) {
    // si ces 2 cond. sont remplies alors le code ICI s'execute
}

// on peut écrire sans les ()
if prenom===loginPrenom && age===loginAge

if (a && b) --> si a et b en meme temps uniquement


if (a || b) --> si a OU b

let UserIsLogin=true
if (!userIs Login){// est diff de true
// si user nest pas connecte si UserIsLoginest false
}
// ce qui reveint à écrire
if(UserIsLogin===false){
// si user n'est pas connecté, si userIsLogin est false
}

