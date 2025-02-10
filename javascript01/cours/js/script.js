// alert("bonjour lundi") => ça affiche un mess "ca va pas"  

// syntaxe de base :
// comm sur 1 ligne
/* comm sur plusieurs lignes
   comm sur plusieurs lignes */

// 1- DECLARER UNE VARIABLE
// 2 variables : let et const / VAR OBSOLETE

//pour déclarer une var :
let nom;


// 2-ASSIGNER(affecter) UNE VALEUR A UNE VAR
nom="momo";
 //let ville="Paris";  on déclare une var et on lui affecte une valeur en même tps//

let ville;
ville="Paris";
console.log (ville);
ville="Londres";
console.log (ville);

//avec  var const --> on doit affecter une valeur sinon ERREUR
const prenom="Moussa";
console.log(prenom);
//prenom="Ousmane" --> erreur

// on ne peut pas changer la valeur à une var const --> une ERREUR s'affichera dans la console

// 3- AFFICHER UNE BOITE DE DIALOGUE
// alert("je suis une boite de dialogue d'erreur")

// 4-AFFICHER DANS LA CONSOLE AVEC console.log()
console.log("contante prénom", prenom); 
// = appeler *contante prénom, la const prenom


// - - - - - - - - -  - - - - - - - - - - - - - - 
// - - - - - - - - - LES TYPES DE VAR- - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - -

// 1- LES CHAINES DE CARACTERES string
// string TJRS entouré de " "
let vacances="2017"
let destination="Pantin"
console.log (vacances);
console.log (destination);

// 2- LES NB ENTIERS (integer ===int ou number)
let annee=2017
console.log (annee);

// 2- LES NB DECIMAUX avec . (float)
let nombre_a_virgule=5.32;


// 4- LES BOOLEENS tru et false
//un booléen est un type de variable à deux états (généralement notés vrai et faux), 
//destiné à représenter les valeurs de vérité de la logique et l'algèbre booléenne
let boolean_false=false;
let boolean_true=true;

// 5- typeof permet de connaitre le type de la var /4 types : string int(ou number) float boolean
console.log("année :", annee);
console.log("typeof de année :", typeof annee);

console.log("booléen :", typeof boolean_false);
console.log("types de vacnces :", typeof vacances);

console.log(" vacances en int (number) :", parseInt (vacances));
// parseInt --> pour passer un string en nb 
// EX pour récupérer les données renseignées d'un formulaire TJRS en string (chaine de caractères), si on veut utiliser lenb pour un calcul

//string to number
let vacances_number=parseInt(vacances)

//number ou booléen to string
console.log(" vacances_number to string :", vacances_number.toString());
console.log(" boolean to string :", boolean_false.toString());

//string to float
let unChiffre="3.45"
console.log("string to number :", parseInt (unChiffre)); /*--> ne prend pas la décimale  */
console.log("string to float :", parseFloat (unChiffre)); /*--> prend la décimale  */