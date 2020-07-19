// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...args) {
  return args.reduce((prev, next) => prev + next)
}

// console.log(addAll(2, 5, 6, 7, 10))

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

const seekAndDestroy = (arr, ...leftOver) =>
  arr.filter((item) => !leftOver.includes(item))

// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6))

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  const positionOfTreesArr = arr
    .map((e, i) => (e === -1 ? i : ""))
    .filter(String)

  const sortedPeopleArr = arr.filter((item) => item !== -1).sort()

  positionOfTreesArr.map((pos) => sortedPeopleArr.splice(pos, 0, -1))

  return sortedPeopleArr
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180, -1]))

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return string with missing letters. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "abcde"
// missingLetters("abcdefghjklmno") == "abcdefghijklmno"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

const getMissingLetters = (charCodesArr) => {
  let detectedGapObj
  let prev
  charCodesArr.map((next) => {
    if (prev && next - prev !== 1) {
      detectedGapObj = { prev, next }
    }
    prev = next
  })

  if (detectedGapObj) {
    const missingLettersArr = []
    for (let i = detectedGapObj.prev + 1; i < detectedGapObj.next; i++) {
      missingLettersArr.push(String.fromCharCode(i))
    }

    return missingLettersArr
  }
}

function getStringWithMissingLetters(str) {
  const lettersArr = str.split("")
  const charCodesArr = lettersArr.map((letter) => letter.charCodeAt())
  const missingLetters = getMissingLetters(charCodesArr)
  if (missingLetters) {
    return lettersArr.concat(missingLetters).sort().join("")
  }
}

console.log(getStringWithMissingLetters("abcdefqrstuvwxyz"))

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}
