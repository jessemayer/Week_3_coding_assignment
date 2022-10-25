// coding assignment
 //1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!
let ages = [3, 9, 23, 64, 2, 37, 8, 28, 93] 
let firstElement = ages[0]; //declars varaiable that references the first element in the ages array.
let lastElement = ages[ages.length - 1]//declars varaiable that references the last element in the ages array.
console.log(lastElement - firstElement);//prints the lastElement minus the first element
//console.log(ages.length-1);
//console.log(ages[7] - ages[0]);

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 
 //added 37 to the array
console.log(lastElement - firstElement);//prints the lastElement minus the first element with 37 added

var ageCount = ages.length; // created a variable called ageCount and set it to ages.length
var avg = 0; //created a variable called avg and set it to zero

for(var i=0; i < ageCount; i++){ //created a for loop and set i < ageCount
    avg = avg + ages[i];
 }var averageAge = avg / ageCount; // created a variable that calculated the sum / all of the iterations made in the loop to create ageCount.

console.log(averageAge) //printed the averageAge variable


// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 let letterCount = 0; 

 for(let i = 0; i < names.length; i++){
    letterCount = letterCount + names[i].length
 }
 avgLetterCount = letterCount / names.length 
 console.log(avgLetterCount);
 // created the array
// created a variable and set it to 0
// created a loop to count all of the letters in the array
//set letterCount to be divided by names.length to calculate the average
// printed avgLetterCount to see the average numbers of letters in the names array. (3.83)


// 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
//let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
for(let i = 0; i < names.length; i++){
    console.log(names.join(" "));
}
    // created a for loop with names.length to list all of the names in the array
//printed names with .join and a " " to have a space between each element


// 3.	How do you access the last element of any array?
let finalElement = names[names.length -1];
console.log(finalElement);
//created a variable named final element and set it to call the names array at position -1 ie. the last position. then Printed final element


// 4.	How do you access the first element of any array?
let startOfElement = names[0];
console.log(startOfElement);
// created a variable named startOfElement  and set it equal to names[0] so we call the first element in the array. then printed startOfElement


// 5.	Create a new array called nameLengths. 
//Write a loop to iterate over the previously created names array and add the length of each name to the
// nameLengths array.

let nameLengths = [] 
for(let i = 0; i < names.length; i++){
    console.log(nameLengths.push(names[i].length))
}console.log(nameLengths);
//created a new array called nameLengths. then wrote a for loop to add the length of each element to the names array. then i printed the nameLengths array

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sum = 0;
for(let i = 0; i < nameLengths.length; i++){
    sum += + nameLengths[i]
}console.log(sum);
//created a variable sum and set it to zero. then ran a for loop to add all of the elements in the nameLength array. 
//I then set sum to equal sum +nameLength[i]. then i printed the sum to execute the code.

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function functionRepeat(word, n){
    console.log(word.repeat(n));
}
functionRepeat('hello',  '3')
//wrote a function called functionRepeat and set two parameters word and n. then set the function to print (word.repeat(n)). i then executed the function.

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
// •	The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
fullName('Jesse', 'Mayer')
//created a function called fullName with two parameters firstName and lastName. i then had the function print firstName + " " + lastName. i then executed the function

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arrayOfNum = [1,45,3,2,23,8,]
function totalOfArray(arrayOfNum){
    let sum = 0;
    for(let i = 0; i< arrayOfNum.length; i++){
        sum = sum + arrayOfNum[i];
    }
    if(sum > 100){
        return true
    }
    else
    return false
}
console.log(totalOfArray(arrayOfNum));
//created a array called arrayOfNum with a bunch of numbers. then i wrote a function called totalOfArray with one parameter called arrayOfNum.
//i then created another variable sum and set it to 0. I then wrote a for loop to iterate through the arrayOfNum array.
//I then set sum to equal sum + arrayOfNum[i] so that i could create a if else statement to print true if the sum is greater than 100.

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
 let newArray = [99,99,88,99];
 function numberTenFunction(newArray){
 let totalAvg = 0;
 for(let i = 0; i < newArray.length; i++){
    totalAvg += newArray[i];
 }
let avg1 = totalAvg / newArray.length;

console.log(avg1);
 }
 numberTenFunction(newArray)
//created an array called newArray. then I wrote a function called numberTenFunction with one parameter called newArray.
//since we are calculating an average I created a variable called totalAvg and set it to 0.
//next I wrote a for loop to iterate through the array.
//I then created a variable called avg1 that divided totalAvg by newArray.length
//I then printed the avg1 so it would execute the function


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
//is greater than the average of the elements in the second array.
let arrayOne =[5,6,4,2,34,55];
let arrayTwo = [5,5,3,32,12,21];
function twoArrays(arrayOne, arrayTwo){
   let  arrayOneAvg = 0;
   for(let i = 0; i < arrayOne.length; i++){
    arrayOneAvg += arrayOne[i];
   }
   let avg1 = arrayOneAvg / arrayOne.length;

   let arrayTwoAvg = 0;
   for(let i = 0; i < arrayTwo.length; i++){
    arrayTwoAvg += arrayTwo[i];
   }
   let avg2 = arrayTwoAvg / arrayTwo.length;

   if(avg1 > avg2){
    console.log(true);
   } else {
    console.log(false);
   }
}
twoArrays (arrayOne, arrayTwo)
//created two arrays. then I wrote a function called twoArrays with two parameters called arrayOne and arrayTwo.
//I the wrote a for loop for each parameter in the function. I also created two new variables that calculated the average for each array.
//I then wrote a if else statement to lof true if avg1> avg2 
//I then called the function to print true or false


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
   function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    else {
        return false;
    }
   }
   console.log(willBuyDrink(true,1.59));
//wrote a function called willBuyDrink with two parameters isHotOutside, moneyInPocket.
//I then wrote a if else statement that printed true if isHotOutside == true and moneyInPocket is greater than 10.50.
//I then called the function with true and 1.59 as the arguments 

// 13.	Create a function of your own that solves a problem. 
// •	In comments, write what the function does and why you created it.
// create a function that takes class scores and determines the average of the scores. I created it to better practice calculating averages

let classScores = [99,87,67,40,100];
let classSum = 0;
function calculateClassAvg(classScores){
    for(let i = 0; i < classScores.length; i++){
    classSum += classScores[i]
} let classAvg = classSum / classScores.length
console.log(classAvg);
}
calculateClassAvg(classScores)
// created a array called class scores
//created a variable class sum and set it equal to 0
//wrote a function called calculateClassAvg with one parameter called classScores
//wrote a for loop to add all of the scores in the array
//set classSum to = classSum + classScore that were added in the iteration.
//created a variable that divided class sum by class scores. I then had the function print the new variable
//I then executed the function