const arrayAnimals = ["Dog", "Cat", "Zebra", "Lion"] //[0, 1, 2, 3]
const arrayOfNumber = [10, 12, 14, 15, 18, 20] //[0, 1, 2, 3, 4, 5]

console.log(arrayAnimals[0])
console.log(arrayAnimals[1])
console.log(arrayAnimals[2])
console.log(arrayAnimals[3])


console.log('------------')
let pickIndexFromAnimalsArray = 2
console.log(arrayAnimals[pickIndexFromAnimalsArray]) //Förväntat värde är Zebra

pickIndexFromAnimalsArray = 0
console.log(arrayAnimals[pickIndexFromAnimalsArray]) //Förväntat värde är Dog

console.log('------------')
console.log(arrayOfNumber.length) // returnerar antal "värden" i arrayen

let totalSum = 0;

totalSum += arrayOfNumber[0] // totalSum = totalSum + arrayOfNumber[0] (Samma sak!)
totalSum += arrayOfNumber[1]
totalSum += arrayOfNumber[2]
totalSum += arrayOfNumber[3]
totalSum += arrayOfNumber[4]
totalSum += arrayOfNumber[5]

console.log(totalSum)