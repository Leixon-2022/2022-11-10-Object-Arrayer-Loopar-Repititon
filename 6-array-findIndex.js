const arrayOfNumbers = [10, 12, 14, 15, 18, 20]

function checkValue(value) {
  return value == 18
}

// Returns the index of the first element in the array where predicate is true, and - 1 otherwise.
const findIndexOfValue = arrayOfNumbers.findIndex(checkValue)
console.log('Result of findIndexOfValue:', findIndexOfValue)

if (findIndexOfValue >= 0) {
  console.log('Found index of value:')
  // Här kör vi kod för här har vi tillgång till värdet = kunde hittas ett index
  console.log('Value of index found:', arrayOfNumbers[findIndexOfValue])
} else {
  console.log('Couldnt find index of value')
}