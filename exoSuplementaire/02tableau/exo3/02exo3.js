// affichez ce tableau dans le DOM (createElement, appendChild,innerHTML...) d'abord sans boucle.
// que voyez vous ? 
// Puis afficher ce tableau dans une liste dans le DOM
// que voyez vous? 
let pays_ce_jun12 = ["Allemagne", "Autriche", "Belgique", "Bulgarie", "Chypre", "Danemark", "Espagne", "Estonie", "Finlande", "France", "Grèce", "Hongrie", "Irlande", "Italie", "Lettonie", "Lituanie", "Luxembourg", "Malte", "Pays-Bas", "Pologne", "Portugal", "République tchèque", "Roumanie", "Royaume-Uni", "Slovaquie", "Slovénie", "Suède"] 



let li_pays22= document.createElement("li")
document.body.appendChild(li_pays22)
li_pays22.textContent= pays_ce_jun12
console.log(li_pays22);



for (let i = 0; i < pays_ce_jun12.length; i++) {
    let li_pays=document.createElement("li")
    document.body.appendChild(li_pays,[i])
    li_pays.textContent=(pays_ce_jun12 [i])
    console.log(li_pays);
}
