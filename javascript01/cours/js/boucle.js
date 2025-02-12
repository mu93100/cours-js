/*-------------les boucles

une boucle permet d'exécuter un bloc de code +sieurs fois, tant que la cond est vrai

les boucles sont utilisées pour parcourir des tableaux, répéter des actions et automatiser des tâches

boucle WHILE : tant que
cette boucle est très utilisée qd on ne connait pas le nb de tours de boucles à l'avance      ---*/

// let j=1;

// while(j<=10){// tant que j n'est pas arrivé à 10 la boucla continue
//     //--> tant que j est < ou = à 1
//     document.write("<h1 style='color:blue'> je passe par ici "+j+" </h1>");
//     j++;
//     document.write("<h2>je passe par là "+j+"</h2>");
// } // document.write: on demande à ce que ça écrive dans le doc

//voir propriétés des val html


//---------pour message d'erreur et la fentre nous est reproposée---------
// let maxAge=25 
// let age=NaN; //NaN = not a number
// // initialisation avec une valeur invalide "not a number" 
// // --> l'erreur qui occasione la boucle ser un age en string donc un NaN
// console.log(typeof age)

// while (isNaN(age)){
//     age=Number(prompt("indiquez votre age"))
//     if(isNaN(age)){
//         alert("erreur : veuillez ecrire un nb")
//     }
// }
// console.log(age)
// if(age<maxAge){
//     alert("au revoir")
// }
// else{
//     alert("bienvenue")
// }

//-------boucle FOR
// for a besoin de 3 arguments

// for(let i=1; i<=10; i++){
//     document.write("<h3 style='color: aquamarine'>una passagiata "+i+"</h3>")
// }

// // parcourir un tableau - []--> on est dans un tableau [0]-->on va à l'index 0 (1.2.3 etc)
// let fruits=["pomme", "banane", "cerise"]
// console.log(fruits[0]) 

// for(let i=0; i<fruits.length;i++){//i<fruits.length = i inf. à long. de fruits
//     consolelog("fruits :", fruits[i])}
//     console.log(numbers)

//     const numbers =[10, 20, 30]
//         console.log(numbers)
//     //dans console : array =tableau

    const products=[
        {name:"smartphone", price : 500},
        {name:"ordinateur", price : 800},
        {name:"casque", price: 100}
    ]
    let html=""; //on initialise une var vide
    for(let i=0;i<products.length;i++){   // à chaque iteration on ajoute ( +=) une Nlle div avec produit correspondant
        html += `<div class="product"> 
        <h3> ${products[i].name}</h3>
        <p> prix : ${products[i].price} £</p>
        </div>`
    }
    // après la boucle html contient maintenat TOUT le code HTML généré
    let productList=document.getElementById ('product-list')
    productList.innerHTML=html
    // ${} pour insérer des  var directement dans des chaines de caractères

     // += est égal à ça + ...//
    //  const product est un tableau
    //  on appelle l'index , 1, 2 , 3
    //  la clé c'est name
    //  la valeur c'est smartphone
    // $ =interpolation comme concaténation