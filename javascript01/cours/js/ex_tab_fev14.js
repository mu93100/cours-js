//  exo1 : opération de base sur un tab1
//  créer un tab contenant "pomme" "banane" "cerise" "orange"
//  ajouter "kiwi" à la fin/ "ananas" au début
// supp dernier Element
// afficher longueur tab
// utiliser les console.log();
let tab1=["pomme","banane","cerise","orange"]
console.log(tab1);
tab1.push("kiwi")
console.log("ajouter kiwi à la fin", tab1);
tab1.unshift("ananas")
console.log("ajouter ananas au début", tab1);
tab1.pop() 
console.log("supp dernier Element", tab1);
console.log("longueur tab1",tab1.length);

// exo2 recherche ds un tab
// créer un tab
let nombres=[10,25,45,38,50]
console.log(nombres);
// verif si le nb 44 est présent ds tab 
if(nombres.includes(44)===true){
    console.log("tableau contient bien 44");
    
} else{
    console.log("not 44");
    
}
// verif si le nb 30 est présent ds tab 
if (nombres.includes(45)) {
    console.log("30 is present in the array.");
} else {
    console.log("30 is not present in the array.");
}
// trouver l'index de 45
console.log("index de 45 :",nombres.indexOf(45)); 
//attention  quand le nb n'existe pas =>index -1
// idem si on met "45", donc 45 en string

// exo3 filtrer un tab1
let tab3=[2,5,8,11,14,17]
// créer Nx tab contenant des nb>10
console.log(tab3);
let plusDe10=tab3.filter(
    function verif10(parametre) {
        return parametre >10;
    }
)
console.log("Nx tab nb >10", plusDe10); 
console.log("tb3 n'est pas modifié",tab3);


const b=["pomm", "poire"]
console.log(b);
b[1]="citron"
console.log(b); //(2) ['pomm', 'citron']

let utilisateurs = [
    ["Jean Dupont", "jean.dupont@email.com", "admin"],
    ["Marie Lemoine", "marie.lemoine@email.com", "utilisateur"],
    ["Pierre Durand", "pierre.durand@email.com", "modérateur"]
];
console.log(utilisateurs);

// creer une Fo pour ajouter utilisateur
function ajoutUtilisateur(nom,mail,role) {
    utilisateurs.push([nom, mail, role])
    console.log("ajouter");
}
ajoutUtilisateur("mu", "mu@gmail.com", "etudiante")
console.log("user", utilisateurs);


function suppUtilisateur(nom,mail,role) {
    utilisateurs.pop()
}
// suppUtilisateur()
// console.log("supp", utilisateurs);



// creer une Fo pour supp utilisateur
// creer une Fo pour afficher liste utilisateur


// AFFICHER User
// on met index i car c'est dynamique
function afficherUser() {
    for(let i=0;i<utilisateurs.length; i++){
        console.log(`nom : ${utilisateurs[i][0]}, mail : ${utilisateurs[i][1]}, role : ${utilisateurs[i][2]}`);
    } 
}
afficherUser()

let bb=2 // on declare une var globale
function test() {
    let bb=3 // on declare une var locale
    console.log(bb);
}
test()
console.log(bb);

// si on met hors Fo let bb=4 console.log ::: Uncaught SyntaxError: Identifier 'bb' has already been declared (at ex_tab_fev14.js:103:5)
// --> ça ne marche parseFloat, mais si on met bb=4 --> ça marche


// pour supp un user via son nom
// let utilisateurs = [
//     ["Jean Dupont", "jean.dupont@email.com", "admin"],
//     ["Marie Lemoine", "marie.lemoine@email.com", "utilisateur"],
//     ["Pierre Durand", "pierre.durand@email.com", "modérateur"]
// ];
// boucle for : il parcourt ts les index les uns après les autres
function supprimerUser(nom) {
    let index=""
    for(let i=0; i<utilisateurs.length; i++){
        if (utilisateurs[i][0] === nom){
            index=i;
        }
    }
    if(index !== -1){
        utilisateurs.splice(index,1)
    }else{
        console.log("aucun utilisateur trouvé avec ce nom");
        
    }
}
supprimerUser("Pierre Durand")
console.log("supprimer pierre Durand", utilisateurs);

    // let index=utilisateurs[i].indexOf(nom) // si nom existe, 
    // // le code renvoit le N° d'index, sinon il renvoit -1 = ça n'existe pas

    