// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
 exercise1 = (num) => {
     if(num % 3 === 0){
         return `${num} is divisible by 3`
     } else {
         return `${num} is not divisible by 3`
     }
 }
 console.log("Exercise 1: Divisible by 3")
 console.log(exercise1(9))
 console.log(exercise1(10))
 
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

let helloMe = {
    first_name: "Amanda",
    last_name: "MacGregor",
    first_pet: "Appa",
    second_pet: "Pabu",

    retDesc() {return `${this.first_name} ${this.last_name} has two pets: ${this.first_pet} & ${this.second_pet}`}
}
console.log("Exercise 2: Object helloMe")
console.log(helloMe.retDesc())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var groceries = ["apple", "banana", "orange", "lime", "tofu"]

firstMidLast = (arr) => {
    var newArr = []
    newArr.push(arr[Math.floor(arr.length / 2)])
    newArr.push(arr[arr.length - 1])
    newArr.push(arr[0])
        
    let newString = newArr.join(" ")
    return newString
}

console.log("Exercise 3: Groceries 1st, Middle, Last")
console.log(firstMidLast(groceries));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

alphabetSoup = (str) => {
    return str.split('').sort().join('');
}

console.log("Exercise 4: Alphabetize a string")
console.log(alphabetSoup("learn"))

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

animalNums = (arr1, arr2) => {
    let aniArr = []
    for(let i = 0; i < arr1.length; i++) {
        aniArr.push(arr1[i] + " " + arr2[i])
    }
    return aniArr.join(', ')
}
// output should be: "9 ducks", etc

console.log("Exercise 5: Number of Animals")
console.log(animalNums(nums, nouns))

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

numbersMult = [1,6,7,3,29]

numMult = (arr) => {
    let tempArr = []
    for(let i = 0; i < arr.length; i++) {
        tempArr.push(numbersMult[i] * 5)
    }
    return tempArr
}

console.log("Exercise 6: Multiplied by 5")
console.log(numMult(numbersMult))