const arrayOfNumbers = [10, 12, 14, 15, 18, 20]

// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
function checkValue(value) {
  return value > 14
}

const findValue = arrayOfNumbers.find(checkValue)

if (findValue) { //om den INTE är undefined
  console.log("Was found:", findValue)
  //kör kod här inne
} else { // alltid undefined här
  console.log("Was NOT found: ", findValue)
  //kör inte kod på denna för den är undefined
}