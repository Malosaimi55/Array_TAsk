const myArray = [];

myArray.push("apple");
myArray.push("banana");
myArray.push("Cherry");
console.log(`${myArray[0]}`);
console.log(`${myArray[myArray.length - 1]}`);
myArray.unshift("mango");
myArray.pop(myArray.length - 1);
const numbers = [5, 10, 15, 20, 25];
delete numbers[2];
console.log(`${numbers}`);
function printArrayLength(numbers)
{
    return numbers.length;
}

console.log(`numbers length: ${printArrayLength(numbers)}`);
const temperatures = [72, 68, 74, 80, 76];
// let temp = 0;
// for(let counter = 0; counter < temperatures.length; counter++ )
// {
//     if(temperatures[counter] > temp)
//     {
//         temp = temperatures[counter];
//     }
// }

console.log(`max number of temperatures: ${Math.max(...temperatures)}`);
// console.log(`temperatures greatest number: ${temp}`);

function checkElement(element)
{
    for(counter = 0; counter < myArray.length; counter++)
    {
        if(myArray[counter] === element)
        {
            return true;
        }
    }

    return false;
}

console.log(`${checkElement(myArray[2])}`)



console.log(`${myArray}`);