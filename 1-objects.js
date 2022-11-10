const animalDog = {
  type: "Dog",
  age: 8,
  ownerInformation: {
    person: "Owner Ownersson",
    contact: "+460739000000"
  },
  likes: ["Play with toys", "Going on walks"] //[0, 1]
}

console.log('Dog::', animalDog)

// Punkt för att få access till objektets parametrar
console.log('Dog age::', animalDog.age)
console.log('Dog type::', animalDog.type)

console.log('Owner information::', animalDog.ownerInformation)
console.log('Owner person::', animalDog.ownerInformation.person)
console.log('Owner contact::', animalDog.ownerInformation.contact)

console.log('Dog likes::', animalDog.likes)
console.log('Dog likes to:: first value::', animalDog.likes[0])
console.log('Dog likes to:: second value::', animalDog.likes[1])

const animalCat = {
  type: "Cat",
  age: 4,
  ownerInformation: {
    person: "Owner Svensson",
    contact: "+46073900776"
  },
  likes: ["Scratch people", "Climbing walls", "Eat-Sleep-Repeat"] //[0, 1, 2]
}

console.log('-------------')
console.log('Cat:: ', animalCat)
console.log("Cat age:: ", animalCat.age)
