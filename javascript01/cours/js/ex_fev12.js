// 1- concatener des var et afficher le resultat ds le dom 
// let n1="nous"
// let n2="sommes"
// let n3="mercredi"
// let n4=12
// let n5=15

// // console.log(n1, n2, n3, n4)
// // const resultat=n1 + " " + n2 + " " + n3 + " " + n4
// // console.log(resultat)
// const resultat2=`${n1} ${n2} ${n3} ${n5}${"bordel"}`
// //ne pas oublier` inversés et espace entre $ fait des espaces
// console.log(resultat2)

// if (condition1)
//     statement1
//   else if (condition2)
//     statement2
//   else if (condition3)
//     statement3
//   // …
//   else
//     statementN

// // 2- afficher un prompt qui demande l'age
// // si age < à 18, créer alert de refus
// // si age > 18 créer alert d'acceptation

// let maxAge=18
// let age= Number(prompt ("quel est ton age"))
// if (age<maxAge){
//     alert ("* * * r e f u s * * * ")
// } else {
//     alert ("* * * w i l k o m e n * * * ")
// }

// 3- créer une boucle pour afficher 3x une phrase ds le DOM
// let a= 1
// while (a<=3){
//     document.write("<h1 style='color:blue'> l e s    d o u c e u r s "+a+" </h1>");
//     a++
// }


// 4- avec prompt demander au user 2 chiffres
// vous allez stocker les 2 val du prompt puis additionner ces val t les afficher ds le dom avec phrase : le résultat est :
// let stockagePrompt= Number (prompt("quel est ton age")

//stockagePrompt = var on lui donne le nom que l'on veut mais qui indique l'action
//number : pour etre sur que c'est un nb

//let nb1=Number(prompt("donne moi un chiffre"));
// let nb2=Number(prompt("donne moi un autre chiffre"));
// let result=nb1+nb2

// document.write("<p style='color:blue'> le résultat est : </p>"+" "+result);

//autre poss :::
// function demanderNombre(message){
//     let valeur
//     while(isNaN(valeur)){
//         valeur=Number(prompt(message))
// }


// 5- demander age du user et vérifier s'il peut entrer ds une salle de cinéma selon règles suivantes :
// - de 13 ans === accès refusé
// entre 13 et 17 ans ===accès autorisé avec accompagnateur
// 18 et + === accès libre

// maxAge13=13
// maxAge18=18
// let age=Number(prompt("quel est ton age U S E R"))
// if(age<maxAge13){
//     alert("accès refusé")
// }
// // if (maxAge13<=age<maxAge18){
// //     alert("accès autorisé avec accompagnateur")
// // }
// if (age>=maxAge18){
//     alert("accès libre")
// }
// else{
//     alert("accès autorisé avec accompagnateur")
//     }


// CORRECTION FACUNDO
// // concaténer ces veriables et afficher dans le dom le resultat
 
// // afficher un prompt qui demande l'age si l'age est inferieur à 18 creer une alert de refus si l'age est superieur 18 alert d'acceptation
 
 
// //créer une boucle pour afficher 3 fois une phrase dans le dom
 
// //avec prompt demander au user deux chiffres vous allez stocker les valeurs du prompt puis additionner ces valeur et les afficher dans le dom avec cette phrase : "le resultat est : "
 
 
// // demander age de l'utilisateur avec prompt et verifier s'il peut entrer dans une salle de cinema selon les regles suivantes (utiliser console log pour les resultats des conditions)
// //-- moins de 13 ans === accès refuser
// //-- entre 13 et 17 ans === acces autorisé avec accompagnateur
// //-- 18 et plus === accès libre
 
 
// let n1="nous"
// let n2="sommes"
// let n3="mercredi"
// let n4=12
 
// const phrase3= n1 +" "+ n2 +" " + n3 +" " + n4
// console.log( phrase3)
 
// const phrase= n1 + " "+  n2 + " "+ n3 +" " +n4
// // nommé template string ou template litterals ou gabarit de chaine
// // entouré de backtiks, ppour inserer une valeur dynamique
// const phrase2=`${n1} ${n2} ${n3} ${n4}`
 
// document.write(`<h1> ${phrase}</h1>`)
// document.write(`<h3 style="color=red" > ${phrase2}</h3>`)
 
 
// let maxAge=18
// let stockagPrompt = Number(prompt("quel est ton age ?????"))
// if(isNaN(stockagPrompt)){
 
//     alert("entrer un nombre correct")
// }else if(stockagPrompt < maxAge){
//     alert("refus d'entrée")
// }else{
//     alert("bienvenue")
// }
 
 
// //-----------------------autre exo
 
 
// for( let i =0 ; i<3;i++){
 
 
//     document.write(" <p>je suis la phrase répéter 3 fois et mon index est : " + i +"</p> " )
 
// }
 
 
// // creation de fonction réutilisable qui prend comme paramètre "message". cette fonction crée une boucle while pour verifier si la valeur du  prompt est un nombre
// function demanderNombre(message){
//     let valeur
 
//     while(isNaN(valeur)){
//         valeur=Number(prompt(message))
 
//         if(isNaN(valeur)){
 
//             alert("erreur : veuillez entrer un nombre valide")
 
//         }
 
 
//     }
 
 
// // si cette valeur n'est pas un nombre la boucle while continue jusqu'à ce qu'un nombre valide soit saisi
//     return valeur // une fois un nombre valide return valeur renvoie cette valeur à l'endroit ou la fonction est appeler
//     // Sans return, la fonction ne renverrait rien (undefined).
// }
 
 
// // ----------------------autre exo
 
// // j'appelle la fonction ici en y ajoutant une chaine de caractère qui remplassera le paramètre de la fonction
 
// let p3 = demanderNombre("Entrez un nombre");
 
// let p4 = demanderNombre("Entrez votre deuxième nombre");
 
// let resultat = p3 + p4;
 
// document.write("<p>Le résultat des deux prompts est : " + resultat + " </p>");
 
 
 
 
 
// //-------------- autre exo
 
// let moin13ans=13
// let moin17ans=17
// let plus18ans=18
// // let agePourCine=demanderNombre("quel est votre age pour entrer dans notre cinéma?")/
 
// let agePourCine=Number(prompt("donnez votre age pour savoir si vous entrez dans le cinema"))
 
// if(agePourCine<moin13ans){
//     console.log("acces refuser")
// }else if(agePourCine > moin13ans && agePourCine <= moin17ans){
//     console.log("accès autoriser avec accompagnant")
// }
// else{
//     console.log("accès autoriser")
// }
 
 
 
 
 
 
 
 