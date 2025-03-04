// Créer un tableau contenant plusieurs noms de fruits (par exemple : "Pomme", "Banane", "Cerise", "Mangue", "Orange").
// Afficher les éléments du tableau dans le DOM sous forme de liste (<ul> avec des <li>).
// créer un ul dans le HTML
//faire console log de fruit et de fruit[i] quel est la différence
// faire une boucle for sur le tableau ajouté dans cette boucle li avec createelement et li textcontent=fruit[i]

// dans la boucle faire un click event quand on clique sur fruit[i] le fruit cliqué disparait de la liste

//sinon faire un tableau et ajouter suprimer des elements (voir cour sur les tableaux) 
//Dispose d’un menu contextuel

let tabFruit=["Pomme", "Banane", "Cerise", "Mangue", "Orange"]
console.log("table :", tabFruit);

let listeUL=document.createElement("ul")

for (let i = 0; i < tabFruit.length; i++) {
    console.log("les fruits", tabFruit);
    console.log("1 des fruits", tabFruit [2]);
    let listeFruits=document.createElement ("li")

}
