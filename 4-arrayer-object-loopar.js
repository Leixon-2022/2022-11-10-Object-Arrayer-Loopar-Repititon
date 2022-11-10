const cart = [
  {
    name: 'Tangentbord',
    price: 199,
    amount: 1
  },
  {
    name: 'USB-mus',
    price: 249,
    amount: 2
  },
  {
    name: 'Webbkamera',
    price: 399,
    amount: 1
  },
  {
    name: 'Läsplatta',
    price: 2000,
    amount: 3
  }
]

// console.log("First object:", cart[0])
// console.log("Second object:", cart[1])
// console.log("Third object:", cart[2])
// console.log("Fourth object:", cart[3])
let totalAmount = 0;

for (let index = 0; index < cart.length; index++) {
  const cartObject = cart[index];
  const totalObjectPrice = cartObject.price * cartObject.amount
  const printCurrentTotalAmount = cartObject.name + " - " + totalObjectPrice + " kr"
  console.log(printCurrentTotalAmount)
  totalAmount += totalObjectPrice
}

console.log("Totalamount of all objects in cart: ", totalAmount)