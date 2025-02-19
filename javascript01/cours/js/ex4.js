/*------------------Exercice 4 : 
creer une liste de noms depuis une variable utilisateur contenant un tableau 
la mettre dans une div du dom
*
* pour cela creer une bloucle for qui boucle sur le tableau
* ajouter createElement "li" et
* ajouter un textContent a "li" qui sera le i (index) de utilisateur
*
* creer une fonction au click affichant une alert quand un nom de la liste du tableau
est cliqué.
* dans alert " vous avez cliqué sur + "nom de l'utlisateur cliqué" "
*/

// ma Fo qui ne marche pas
//  let utilisateurs=["alice", "claude", "roro", "fafa"]
// let ul=document.querySelector(".ulEx4Users")
//     // i       index 0     1       2       3
// console.log(users);

// for(let i=0;i<users.lenght;i++){
//     let li=document.createElement("li")
//     li.textContent=users[i]
//     ulEx4Users.appendChild(li)

//     console.log("li", li.textContent)
//     console.log("console log de user i :", users[i])
//     li.addEventListener("click", function () {
//         alert("vous avez cliqué sur" + users[i])
        
//     })
// }

const utilisateurs = ["Alice", "Bob", "Charlie", "David"];


for(i=0;i<utilisateurs.length;i++){

    
}



const utilisateurs = ["Mohamed", "Idriss", "Najiba", "Mathieu"];
 
const ul=document.querySelector("#listeUtilisateurs")
 
for(let i=0;i<utilisateurs.length;i++){
  
 
    const li=document.createElement("li")
    li.textContent=utilisateurs[i]
    ul.appendChild(li)
 
    console.log("li", li.textContent)
 
    console.log("console lod de user i : ",utilisateurs[i])
 
    li.addEventListener("click",function(){
 
        alert(" vous avez cliqué sur " + utilisateurs[i] )
    })
}
 
 
 
 
 
 
 
const user=document.querySelectorAll(".user")
console.log("user",user)
const userClass=document.getElementsByClassName("user")
console.log("userClass",userClass)
 
for(let i=0;i<userClass.length;i++){
 
    userClass[i].addEventListener("click",function(){
 
        userClass[i].style.backgroundColor="black"
    })
 
}
 
// for (let i = 0; i < userClass.length; i++) {
 
 
//     userClass[i].addEventListener("click", function () {
  
//       for (let j = 0; j < userClass.length; j++) {
//         userClass[j].style.backgroundColor = "black";
  
//       }
      
//     });
//   }
  
 
 
// const listeUtilisateurs = document.getElementById("listeUtilisateurs");
 
// for (let i = 0; i < utilisateurs.length; i++) {
//     const li = document.createElement("li");
//     li.textContent = utilisateurs[i];
//     li.addEventListener("click", function() {
//         alert("Utilisateur sélectionné : " + utilisateurs[i]);
//     });
//     listeUtilisateurs.appendChild(li);
// }



//----------------

const user=document.querySelectorAll(".user")
console.log("user",user)
const userClass=document.getElementsByClassName("user")
console.log("userClass",userClass)

for(let i=0;i<userClass.length;i++){

    userClass[i].addEventListener("click",function(){

        userClass[i].style.backgroundColor="black"
    })

}

// for (let i = 0; i < userClass.length; i++) {


//     userClass[i].addEventListener("click", function () {
  
//       for (let j = 0; j < userClass.length; j++) {
//         userClass[j].style.backgroundColor = "black";
  
//       }
      
//     });
//   }
  


const listeUtilisateurs = document.getElementById("listeUtilisateurs");

for (let i = 0; i < utilisateurs.length; i++) {
    const li = document.createElement("li");
    li.textContent = utilisateurs[i];
    li.addEventListener("click", function() {
        alert("Utilisateur sélectionné : " + utilisateurs[i]);
    });
    listeUtilisateurs.appendChild(li);
}
----------