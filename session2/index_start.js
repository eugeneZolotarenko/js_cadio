// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

// ///////

// Solved by smart people
function longestWord(sen) {
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

  const sorted = wordArr.sort((a, b) => b.length - a.length)

  const longestWordArr = sorted.filter(
    (word) => word.length === sorted[0].length
  )

  if (longestWordArr.length === 1) {
    return longestWordArr[0]
  } else {
    return longestWordArr
  }
}
// END Solved by smart people

// My
function myLongestWord(sen) {
  const words = sen.toLowerCase().match(/[a-z0-9]+/g) // stolen :(

  const wordsLengths = words.map((word) => word.split("").length)

  const positionOfOccurrences = wordsLengths
    .map((e, i) => (e === Math.max(...wordsLengths) ? i : ""))
    .filter(String)

  const occurrences = positionOfOccurrences.map((occur) => words[occur])

  if (positionOfOccurrences.length > 1) {
    return occurrences
  } else {
    return occurrences[0]
  }
}
// END My

console.log(myLongestWord("Hi there, my name is Eugene"))
console.log(longestWord("Hello, my name is Brad"))

//
// ////////////////////////////////////////////////////////////
//

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const resultArr = []
  while (arr.length) {
    resultArr.push(arr.splice(0, len))
  }
  return resultArr
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3))

//
// ////////////////////////////////////////////////////////////
//

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

const flattenArray = (arrays) => arrays.flat(1)

// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

//
// ////////////////////////////////////////////////////////////
//

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const formatString = (str) =>
  str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")

const isAnagram = (str1, str2) => formatString(str1) === formatString(str2)

// console.log(isAnagram("Dormitory", "dirty room##"))

//
// ////////////////////////////////////////////////////////////
//

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

// Solved by smart people
function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a"
    } else {
      return String.fromCharCode(char.charCodeAt() + 1)
    }
  })

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase())

  return newStr
}
// END Solved by smart people

// My
function myLetterChanges(str) {
  const basicArr = str.replace(/[^\w]/g, " ").toLowerCase().split("")

  const newCharCodesArr = basicArr.map((letter) => {
    if (letter === "z") {
      return 97
    } else if (letter !== " ") {
      return letter.charCodeAt() + 1
    }
  })

  const finalLettersArr = newCharCodesArr.map((char) => {
    const letter = String.fromCharCode(char)
    return letter.match(/[aeiou]/gi) ? letter.toUpperCase() : letter
  })

  return finalLettersArr.join("")
}
// END My

console.log(letterChanges("hello there z"))
console.log(myLetterChanges("hello there z"))
