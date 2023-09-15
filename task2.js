/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/

const numbers = [1, 2, 3];
function isArrayLengthOdd(numbers) {
 return numbers.length % 2 !== 0;
}

console.log(`Result: ${isArrayLengthOdd(numbers)}`);

/**

- isArrayLengthEven(numbers):
- receives array `numbers`
- returns true if array has an even number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthEven([1, 2, 3]) -> false
- isArrayLengthEven([1, 2, 3, 4]) -> true
*/

const numbers2 = [1, 2, 3, 4];

function isArrayLengthEven(numbers) {
    return numbers.length % 2 === 0;
}

console.log(`Result: ${isArrayLengthEven(numbers2)}`);

/**

- addLailaToArray(instructors):
- receives array `instructors`
- returns a new array that's a copy of array `instructors` with additional string "Laila"
- 
- e.g.
- addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
*/

const araddLailaToArray = ["Mshary", "Hasan"];
console.log(`Before passing Laila: ${araddLailaToArray}`);


function addLailaToArray(instructors) {
 instructors.push("Lalia");
 return instructors;
}

console.log(`after passing Laila: ${addLailaToArray(araddLailaToArray)}`);

/**

- eliminateTeam(teams):
- receives array `teams`
- removes the last element from the array and return it
- 
- e.g.
- eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
*/

const eliminateTeam = ["Brazil", "Germany", "Italy"];
console.log(`before pop: ${eliminateTeam}`);
console.log(`last element is: ${eliminateTeam[eliminateTeam.length - 1]}`);
eliminateTeam.pop();
console.log(`after pop: ${eliminateTeam}`);
//function eliminateTeam(teams) {

//}

/**

- secondHalfOfArrayIfItIsEven(fruits):
- receives array `fruits`
- returns a new array that's the second half of the original array if it has an even number of elements
- returns an empty array if it has an odd number of elements
- 
- e.g.
- secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
- secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
🌶️🌶️🌶️
*/

const fruits = ["apple", "orange", "banana", "kiwi"];

function secondHalfOfArrayIfItIsEven(fruits) {
    return fruits.length % 2 === 0;
}

function checkOddOrEven(fruits) {
    const newfruits = [];
    
    if (secondHalfOfArrayIfItIsEven(fruits)) {
        newfruits.push(...fruits);
        return newfruits.slice(2, newfruits.length);
    }
}

console.log(checkOddOrEven(fruits));


/**

- youGottaCalmDown(shout):
- receives a string `shout`
- returns the string `shout` with at most one exclamation mark (!) at the end.
- 
- e.g.
- youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
- youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
- youGottaCalmDown("Hellooooo") -> "Hellooooo"
- 
- Hint:
- Use number method .indexOf()
- Use string method .slice()
🌶️🌶️🌶️
*/


function youGottaCalmDown(shout) {

}