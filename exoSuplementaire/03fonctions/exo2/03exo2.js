// Le code  définit deux variables, numberA et numberB. 
// Une troisème variable, biggest est définie, et 
// contiendra le résultat retourné par la fonction whoIsThebigger().
//  À vous d'écrire cette foncion, sachant que son but est de 
// comparer deux nombres et de retourner le plus grand des deux.


const numberA = 42;
const numberB = 1337;

const biggest = whoIsTheBiggest(numberA, numberB);

function whoIsTheBiggest(a, b) {
    if (a>b) {
        return a; 
    } else{
        return b; 
    }
}
console.log(biggest);

