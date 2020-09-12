/**
Create a function batches that returns the maximum number of whole batches that can be cooked from a recipe.
 
It accepts two objects as arguments: the first object is the recipe
for the food, while the second object is the available ingredients.
Each ingredient's value is a number representing how many units there are.

`batches(recipe, available)`
*/

function calcBatches(recipe, available) {
  return Math.floor(
    Math.min(...Object.keys(recipe).map((k) => available[k] / recipe[k] || 0))
  )
}

// 0 batches can be made
console.log(
  calcBatches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
)

console.log(
  calcBatches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  )
)

// 1 batch can be made
console.log(
  calcBatches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
)

// 2 batches can be made

console.log(
  calcBatches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )
)

/**
Create a function that returns the maximum number of weach array in main array.
*/

const arr = [
  [10, 12, 38, 84, 34],
  [9, 99, 23, 65, 32],
  [4, 21, 49, 22, 24],
  [92, 34, 24, 12, 1],
]

const arrOfMaxValues = Array.from(arr.map((arr) => Math.max(...arr)))

console.log(arrOfMaxValues)
