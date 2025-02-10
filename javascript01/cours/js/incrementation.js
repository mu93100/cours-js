/*----------------
incrémentation
---------------*/

// alert("tatatat")

// incrementation = action d'aug. la valeur d'une var, généralement de 1
//  utilisé dans les boucles

let nb1=1
console.log ("nb1 : ", nb1)

console.log("incrementation de nb1", nb1+=1) // ou nb1=nb1+1 --> sur console : 2
// console.log("incrementation de nb1.2", nb1+=1) // ou nb1=nb1+1 --> sur console : 3
// console.log("incrementation de nb1.3", nb1+=1) // ou nb1=nb1+1 --> sur console : 4
// console.log("incrementation de nb1.4", nb1+=1) // ou nb1=nb1+1 --> sur console : 5

console.log("incrémente puis retourne la Nlle val", ++nb1) // incrémente puis retourne la Nlle val
console.log("retourne l'ancienne val PUIS incrémente", nb1++) // retourne l'ancienne val PUIS incrémente SI ON RAJOUTE UN console.log(nb1) APRES
console.log(nb1)

console.log(nb1+=2)


//décrémentation
console.log(nb1=nb1-1)
console.log("décrémentation",nb1=nb1-1)
console.log(--nb1)
console.log(nb1)
console.log(nb1-=2)