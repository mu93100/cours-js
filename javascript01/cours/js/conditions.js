// /*---------------------
// les conditions
// ----------------------*/
// // en js une cond. permet d'executer un bloc de code 
// // seulement si certaines cond.sont vraies (TRUE)

// // alert("moussa")
// nb1= 49
// if(nb1<50){
//     //pae défaut la cond vérifie si le code entre () est vrai 
//     // si le code entre () est vrai, le code entre {} s'execute
//     alert("je suis inférieur à 50")
// }

// if(true){
//     //si la condition est vraie, le code s'exécute
// }else{
//     //si la cond. est fausse, c'est ce code qui s'exécute/ SINON
// }

// //exemple
// let nb2=51
// if(nb2<50){
//     alert("nb2 est inférieur à 50")
// }else{
//     alert("nb2 est supérieur à 50")
// }

// let nb3=47
// if(nb2<50){
//     alert("333 est inférieur à 50")
// }else{
//     alert("333 est inférieur à 50")
// }

// let nb4=50 /* inf. sup. ou égal */
// if(nb4<=50){
//     alert("nb4 est inférieur ou égal à 50")
// }else{
//     alert("nb4 est inférieur ou égal à 50")
// }
// let nb5=60
// if(nb4>=60){
//     alert("nb5 est inférieur ou égal à 60")
// }else{
//     alert("nb5 est inférieur ou égal à 60")
// }

//exercice

// // console.log(prompt("quel est ton age ?")); // une fenetre quel est ton age? s'ouvre dans console 
// let maxAge=25 // important de donner une val à maxAge si utilisé plusieurs fois (et non pas mettre 25)
// let age= Number(prompt ("quel est ton age2"))// let age=prompt("quel est ton age ?") 
// //// on stocke les données obtenues par prompt, dans age
// // là age est en string -
// console.log("let age a comme valeur : ", age)
// console.log("et son typeOf est : ", typeof age) //on peut écrire aussi console.log("let age a comme valeur : ", "et son typeOf est : ", typeOf age)


// // on va utiliser les conditions pour vérif l'age du user
// // si il a + de 25 ans on lui souhaite bienvenue dans la console
// // sinon on lui dit au revoir dans la console

// if(age>=maxAge){
//     console.log("bienvenue dans la console")
// }
// else{
//     console.log("au revoir ")
// }
// //isNaN = fonction  si (age) n'est pas un number

// if (isNaN(age)){
//     alert("* * * erreur * * * données invalides * * * écrire un numéro * * * ")
//     age=Number(prompt("redonne ton age en chiffre STP "))
//     // prompt("redonne ton age en chiffre STP ")
// }
// else if(age<=maxAge){
//     alert ("au revoir ")
// }
// else{
//     alert ("bienvenue")
// }
// * * * * VOIR COMMENT FAIRE POUR POUVOIR RENSEIGNER DE NOUVEAU L4AGE AVEC OK /PAS OK


// switch
// l'instruction SWITCH est utilisé pour remplacer une serie de cond. 
// "if else else if" lorsque l'on doit comparer une valeur à +sieurs cas possibles

const jour="jeudi" //il faut changer le jour pour voir ce que ça fait ds console.log
switch(jour){
    case"lundi":
        console.log("début de semaine")
        break // pour terminer une boucle
    case "mardi":
    case "mercredi":
        console.log("milieu de semaine")
        break
    case "jeudi":
    case "vendredi":
        console.log("fin de semaine")
        break
    case "samedi":
    case "dimanche":
        console.log("we")
        break
    default:
        console.log("défault")

}