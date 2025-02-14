// alert("bonjour lundi")

// --------concaténer : mettre bout a bout au moins 2 chaines de caractères--------------------------
let annee=2024, mois=12, semaine=7;
console.log (mois, annee, semaine);
// ou
let year, month, week
year=2025       /*int ou number*/
month="février"  /* string */
week="lundi"    /* string */

console.log ("const de annee :", annee)
console.log ("type de const de annee :", typeof annee)

// add de 2 numbers
const resultat=annee + mois

//si il y a 1 number et 1 string, les 2 VAR sont côte à côte
const resultat02= year + month
console.log("resultat de year et month", resultat02)

console.log(resultat)
console.log(typeof resultat02) //= 2025février en string

const debutPhrase="lundi";
const suiteDePhrase= "est une journée";
const finDePhrase="magnifique";

const resultat_phrase= debutPhrase +" " +suiteDePhrase + " " + finDePhrase;
console.log("le résultat de la phrase : ", resultat_phrase)

const resultat_phrase2=`${suiteDePhrase}${" "}${finDePhrase}${" "}${debutPhrase}`
console.log("résultat de la phrase avec $ est :",resultat_phrase2);

document.write("<h1>" + resultat_phrase + "</h1>")

// exercice : concatener ces ' var dans une nouvelle var 
// et afficher cette Nelle var ds un console log
const partiel="Nous sommes le"  //string
const partie2=10                //int ou number
const partie3="du mois de"
const partie4="février"

//-->// 
const resultat_exercice = partiel + " "+ partie2 +" " + partie3 + " " + partie4;
console.log("phrase exercice :", resultat_exercice)
document.write("<h2>" + resultat_exercice + "</h2>")

const h2= document .querySelector(".essai_h2")
h2.innerHTML=resultat_exercice
