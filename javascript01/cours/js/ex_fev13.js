// Exercice 1 : Somme de deux nombres
// Écrire une fonction somme(a, b) qui prend deux nombres en paramètres et retourne leur somme.
// function somme(a, b){
//     return (a+b)
// }
// console.log(somme(12,5));


// // Écrire une fonction max(a, b) qui retourne le plus grand des deux nombres donnés.

// function max(a,b){
//     if(a>b){
//         return console.log(a)}
//     else{
//         return console.log(b)
//         }       
// }
// max(17,5)

// Exercice 2 : Vérifier si un nombre est positif, négatif ou nul
// Écrire une fonction verifierNombre(n) qui prend un nombre en paramètre et affiche 
// s'il est positif, négatif ou nul.

// function verifierNombre(n) {
//     if(isNaN(n)){
//         console.error("écrire un nombre");
//     }
//     if(n<0){
//         console.log(n +" "+ "est négatif"); 
//     }
//     if(n>0){
//         console.log(n +" "+ "est positif"); 
//     }
//     if(n===0){
//         console.log(n +" "+ "est nul"); 
//     }
// }
// verifierNombre(-20) 
// verifierNombre(-20) 
// verifierNombre("chaine") 
// verifierNombre(-20) 

// // Exercice 3 : Vérifier si un nombre est pair ou impair
// // Écrire une fonction pairOuImpair(n) qui retourne "Pair" si n est un nombre pair, 
// // sinon "Impair".
// function pairOuImpair(n){
//     if(n%2!==0){
//         console.log("impair");  
//     }
//     else{
//         console.log("pair");  
//     }
// }
// pairOuImpair(22)

// Exercice 4 : Comparer deux nombres
// Écrire une fonction comparer(a, b) qui prend deux nombres et affiche :

// "a est plus grand" si a > b
// "b est plus grand" si b > a
// "Les deux sont égaux" si a === b


// Exercice 5 : Compter le nombre de voyelles dans une chaîne
// Écrire une fonction compterVoyelles(chaine) qui compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne de caractères.


// Exercice 6 : Calculatrice simple
// Écrire une fonction calculer(a, b, operateur) qui prend deux nombres et un opérateur (+, -, *, /) et retourne le résultat.
function calculator(a,b,operateur) {
    switch(operateur){
        case "+": return a+b
        case "-": return a-b
        case "*": return a*b
        case "/": if(b!==0){
            return a/b} 
            else{
                return "E R R O R : division par 0 impossible"
            }
        default:
            return"opérateur invalide"
    }
}
console.log(calculator(30,2, "*"))

// on peut écrire aussi ISO if et else:
// case "/": return b!==0 ? a/b : "E R R O R : division par 0 impossible"
//     }l’opérateur ternaire ? : c'est un opérateur de comparaison.
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/operateur-ternaire/

// Exercice 7 : Deviner un animal
// Écrire une fonction animalCri(animal) qui prend un nom d'animal ("chien", "chat", "vache", "oiseau") et retourne le son qu'il fait.



// // TABLEAU : array ds console log[]
// let stokk=Number(prompt ("écrit un chiffre1")) /// METTRE Number CAR LE 0 FAIT BLOQUER / si on enlève  if(n===0){...} on n'est pas obligé

//     function verifierNombre(n) {
//     if(isNaN(n)){
//         console.error("écrire un nombre");
//     }
//     if(n<0){
//         console.log(n +" "+ "est négatif"); 
//     }
//     if(n>0){
//         console.log(n +" "+ "est positif"); 
//     }
//     if(n===0){
//         console.log(n +" "+ "est nul"); 
//     }
// }
// verifierNombre(stokk)