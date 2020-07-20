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
// ex. maxCharacter('javascript') == 'a'
const notUniqueCharacters = (arr) => [
  ...new Set(arr.filter((value, index, self) => self.indexOf(value) !== index)),
]

const getOccurrences = (array, value) => array.filter((v) => v === value).length

function maxCharacter(str) {
  const arrFromStr = str.split("")
  const occurrencesArr = notUniqueCharacters(arrFromStr).map((char) => ({
    char,
    times: getOccurrences(arrFromStr, char),
  }))
  const res = Math.max.apply(
    Math,
    occurrencesArr.map(function (o) {
      return o.times
    })
  )
  return (obj = occurrencesArr.find(function (o) {
    return o.times == res
  }))
  // const allOcurances = arrFromStr.filter((letter) =>
  //   notUniqueCharacters(arrFromStr).includes(letter)
  // ).length
  // return allOcurances
  // return allOcurances.map((e, i) => (e === "a" ? e : "")).filter(String)
}

console.log(maxCharacter("javasssscripta"))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {}
