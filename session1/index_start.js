// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = (str) => str.split("").reverse().join("")

// console.log(reverseString("hello"))

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) =>
  str.split("").reverse().join("") === str.split("").join("")

// console.log(isPalindrome("racecar"))

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

const reverseInt = (int) =>
  parseInt(int.toString().split("").reverse().join(""))

// console.log(reverseInt(521))

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
const capitalizeLetters = (str) =>
  str.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))

// console.log(capitalizeLetters("i love javascript"))

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// If there are 2 characters with the same amount of occurrences - return array with this letters

// ex. maxCharacter('javascript') == 'a'
// ex. maxCharacter('ssaa') == [s, a]

const notUniqueCharacters = (arr) => [
  ...new Set(arr.filter((value, index, self) => self.indexOf(value) !== index)),
]

const countOccurrences = (array, char) =>
  array.filter((item) => item === char).length

function maxCharacter(str) {
  const arrFromStr = str.split("")

  const occurrencesArr = notUniqueCharacters(arrFromStr).map((char) => ({
    char,
    times: countOccurrences(arrFromStr, char),
  }))

  const maxOccurrencesTimes = Math.max.apply(
    this,
    occurrencesArr.map((o) => o.times)
  )

  const finalOccurrences = occurrencesArr.filter(
    (obj) => obj.times === maxOccurrencesTimes
  )

  return finalOccurrences.length === 1
    ? finalOccurrences[0].char
    : finalOccurrences.map((obj) => obj.char)
}

// console.log(maxCharacter("javascript"))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  const numbersArr = new Array(100).fill(1)
  return numbersArr.map((a, i) => {
    const num = i + 1
    if (num % 5 === 0 && num % 3 === 0) {
      return "FizzBuzz"
    } else if (num % 5 === 0) {
      return "Buzz"
    } else if (num % 3 === 0) {
      return "Fizz"
    } else {
      return num
    }
  })
}

console.log(fizzBuzz())
