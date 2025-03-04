// Terminez d'écrire la fonction askNumber() qui va demander à l'utilisateur de rentrer un nombre avec une prompt(). Une fois le nombre rentré, la fonction va convertir la chaîne de caractères entrée un nombre, et elle vérifiera s'il s'agit bien un nombre. Si ce n'est pas un nombre, la fonction redemande à l'utilisateur d'en entrer un. Dès que le nombre est correct, la fonction le retourne avec return.

// Trois choses doivent donc êtres utilisées ici : une boucle qui se répète tant que l'utilisateur 
// ne rentre pas un nombre correct, parseInt() et isNaN(). Vous connaissez la fonction parseInt(), 
// mais pas isNaN(). Regardez le code ci-contre pour comprendre son fonctionnement.

function askNumber() {
    
}

// najiba
// 
// alert('Le nombre est : ' + askNumber());

//             // Trois choses doivent donc êtres utilisées ici : une boucle qui se répète tant que l'utilisateur ne rentre pas un nombre correct, parseInt() et isNaN(). Vous connaissez la fonction parseInt(), mais pas isNaN(). Regardez le code ci-contre pour comprendre son fonctionnement.

//             function askNumber() {
//                 let number;
//                 do {
//                    let input = prompt("Veuillez entrer un nombre:");
//                     number = parseInt(input, 10);
//                } while (isNaN(number));
//                 return number;
//               }

//               alert('Le nombre est : ' + askNumber());

//              let age=NaN// initialisation avec une valeur invalide "not a number"
//              console.log( typeof age)
//            // comme age est NaN alors la boucle commence automatiquement
//             while(isNaN(age)){
//            // // la boucle continue tant que age n'est pas un nombre
//                 age=Number(prompt("indiquez votre age"))//convertit la valeur string en number

//                if(isNaN(age)){

//                     alert("erreur : veuillez ecrire un nombre ")
//                 }
//              }

// OUSMANE
// let Btn = document.createElement("button")
// Btn.textContent= "cliquer ici"
// document.body.appendChild(Btn)


// Btn.addEventListener("click", ()=>{
//     let nom = prompt("Quel est votre nom ?");
//     salutation(nom);
// })

// function salutation(nom){
//     console.log("Bonjour " + nom);
// }
