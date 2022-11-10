const arrayOfNumbers = [10, 12, 14, 15, 18, 20]

// index++
// index = index + 1
// 0, 1, 2, 3, 4, 5
// 10, 12, 14, 15, 18, 20

// index = index + 2
// 0, 2, 4, -
// 10, 14, 18

// for (
//   let index = 0 /* deklarerar index som en variabel*/;
//   index < arrayOfNumbers.length  /* OM, fortsätt göra loop tills detta vilkor uppnås */;
//   index = index + 1 /* ++ =  index = index + 1 */) {
//   const element = arrayOfNumbers[index];

// }

let totalSum = 0;
// 0
// 0 + 10 = 10
// 10 + 12 = 22
// 22 + 14 = 36
// 36 + 15 = 51
// 51 + 18 = 69
// 69 + 20 = 89

for (let indexOfNumber = 0; indexOfNumber < arrayOfNumbers.length; indexOfNumber++) {

  const currentNumber = arrayOfNumbers[indexOfNumber];
  // console.log(currentNumber)
  totalSum += currentNumber
  console.log('-')
  console.log(totalSum)

}

console.log("Our totalSum is equal to times 3: ", totalSum * 3)