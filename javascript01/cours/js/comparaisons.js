//        comparaisons == === != !==  TOUJOURS pour 2 var

// assignation = : utilisé pour assigner une val

// let nb1=123 // number
// let nb2="123" // string
// console.log(nb1, nb2)
// //l'opérateur de comparaisons == signifie "egal à"
// // mais se fout des types (number ou string au choix)
// console.log("== fait quoi", nb1==nb2)
// //l'opérateur de comparaisons === signifie " STRICTEMENT egal à"
// // en types ET en val
// console.log("== fait quoi", nb1===nb2)

//l'opérateur != signifie "diff. de", en valeur
console.log("== fait quoi", nb1 != nb2)
//l'opérateur !== signifie "STRICTEMENT diff. de", en valeur et type
console.log("== fait quoi", nb1 !== nb2)


//exe =
let prenom="Nassuf"
// si prénom renseigné dans le prompt est = à let prenom --> alert disant bonjour
// sinon alert disant au revoir
//METTRE PROMPT DANS UNE VARIABLE 
// SINON BORDEL SI CODE +IMPORTANT AVEC +SIEURS PROMPT
let loginPrenom=prompt("quel est ton prénom ?")
let resulPrompt=loginPrenom.charAt(0).toUpperCase()+loginPrenom.slice(1)

if (resulPrompt===loginPrenom){
    alert("bonjour")
}
// else{
//     alert("au revoir")
// }
if (resulPrompt !==loginPrenom){
    alert("au revoir")
}