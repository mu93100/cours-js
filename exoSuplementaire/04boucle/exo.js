/ Ecrivez une boucle while qui se répète tant que l'utilisateur n'a pas entré 
une valeur correcte via prompt(). En d'autres mots, prompt() s'affiche à chaque
 exécution de la boucle. Si l'utilisateur entre quelque chose, 
 la boucle s'arrête, et une alert() affiche la valeur entrée dans le prompt(). 
la valeur du prompt doit être un number

 
let Result = Number(prompt('Entrez un nombre'))
 
while (isNaN(Result)) {
    alert("Vous n'avez pas saisi un nombre");
    Result = Number(prompt('Entrez un nombre'))
}
alert (Result)
 