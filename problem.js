// // task 1
// function check(char) {
//     let vowel = ["a","e","i","o","u"] 
//     let input = char.toLowerCase();
//     for(let i = 0; i < vowel.length; i++) {
//         if( vowel.indexOf(input) > -1) {
//             return "VOWEL";
//         }
//         return "CONSONANT";
//     }
// }


// let result = check("o");
// console.log(result);


// // task 2
// function totalCost(products) {
//     let totalPrice = 0;
//     for(let i = 0; i < products.length; i++) {
//         let price = products[i].price;
//         totalPrice += price;
//     }
//     return totalPrice;
// }

// let total = totalCost([{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]);
// console.log(total);

// // task 3 
// let task = ﻿[    
//     {
//      fname:'John',
//     },'fname'
//   ﻿]

//   const deleteProperty =(arr)=>{
//     // Write your code here.
//     let object1 = arr[0];
//         if(Object.keys(object1)[0] === arr[1]) {
//             return "YES";
//         }
//         return  "NO"
//     }
// console.log(deleteProperty(task));

// //  task 4
// function temperatureConverter(valNum) {
//     let celcius = (valNum - 32)/1.8;
//     if(!Number.isInteger(celcius)) {
//         let fixedCalcius = celcius.toFixed(2);
//         return parseFloat(fixedCalcius);
//     }
//     return celcius;
// }

// console.log(temperatureConverter(50));


// // task 5
// function subtraction (num1, num2){
//     let total = num1,
//     invest = num2;
//     let shopkeeperReturn = total - invest;
//     return shopkeeperReturn;
// }

// console.log(subtraction(1000, 700))

// // task 6

// let marks = [75.25, 65, 80, 35.45, 99.50];
// function average (arrOfMarks){
//     //write your code here
//    // don't forget to write return
//    let totalMark = 0;
//     for(let i = 0; i < arrOfMarks.length; i++) {
//         totalMark += arrOfMarks[i];
//     }
//     let averageMark = totalMark / arrOfMarks.length;
//     if(!Number.isInteger(averageMark)) {
//             let fixedCalcius = averageMark.toFixed(2);
//         return parseFloat(fixedCalcius);
//     }    
//     return averageMark; 
// }

// console.log(average(marks));

// // task 7
// function getLetter(s) {
//     let c1 = ["a" , "e", "i", "o", "u"],
//     c2 = ["b" , "c", "d", "f", "g"],
//     c3 = ["h" , "j" , "k", "l", "m"],
//     c4 = ["n" , "p" , "q" , "r" , "s" , "t" , "v" , "w" , "x" , "y" , "z"];
//     let letter;
//     let value = s.charAt(0).toLowerCase();
//     for(let i = 0; i < c1.length; i++) {
//         if(c1.indexOf(value) !== -1) {
//             letter = "A";
//             break;
//         }
//     }
//     for(let i = 0; i < c2.length; i++) {
//         if(c2.indexOf(value) !== -1) {
//             letter = "B";
//             break;
//         }
//     }
//     for(let i = 0; i < c3.length; i++) {
//         if(c3.indexOf(value) !== -1) {
//             letter = "C";
//             break;
//         }
//     }
//     for(let i = 0; i < c4.length; i++) {
//         if(c4.indexOf(value) !== -1) {
//             letter = "D";
//             break;
//         }
//     }
//     return letter;
// }



// console.log(getLetter("adfgt"))

// // task 8 
// function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
//     if(marksOfJim > marksOfDela) {
//       if(marksOfJim > marksOfChinku) {
//         return "Jim"
//   }
//   }
//     else if (marksOfDela > marksOfJim) {
//        if (marksOfDela > marksOfChinku) {
//          return "Dela"
//        }
//     }
    
//       return "Chinku";

//   }

//   console.log(JimOrDelaOrChinku(8,  9,  77 ))

// // task 9
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// function findGrade(marks){
//     if(marks >= 80) {
//         return "A";
//     } else if (marks >= 60){
//         return "B";
//     }
//      else if (marks >= 50){
//         return "C";
//     }
//      else if (marks >= 40){
//         return "D";
//     }

//         return "F";
    
// }

// // task 10

// let arr = [20, 13, 37];

// function finalScore (scores) {
//     let score = 0;
//     for(let i = 0; i < scores.length; i++) {
//         score += scores[i];
//     }
//     return score;
// }

// console.log(finalScore(arr))

// // task 11

// function checkTriangle(side1, side2,side3){
//      if(side1 === side3 && side1 !== side2) {
//         return "Yes";
//      }
//      return "No";
//     }

// console.log(checkTriangle(9,8,9))

// // task 12

// let years = [2023,2024,2025,2028,2030];            

// function findLeapYear(years){
//     let leapYears = [];
//    for(let i = 0; i < years.length; i++) {
//     if(years[i] % 4 === 0 && years[i] % 400 !== 0 && years[i] % 100 !== 0) {
//         leapYears.push(years[i]);
//     }
//    } 
//    return leapYears;
// };

// console.log(findLeapYear(years))

// // task 13 
// let arr = [5, 7, 8, 10, 45, 30];

// function findOddSum(odd){
//     let adds = [];
//     for(let i = 0; i < odd.length; i++) {
//         let number = odd[i];
//         if(number % 2 !== 0) {
//             adds.push(number);
//         }
//     }
        
//     let sumResult = 0;
//     for(let i = 0; i < adds.length; i++){
//         let num = adds[i];
//         sumResult += num;
//     }
//     return sumResult;
        
// }

// console.log(findOddSum(arr));



// // task 14
// let arr = [10,33,5,99,6];
// function secondLargest (numbers) {
//     let numSorted = numbers.sort(function(a, b) {return a - b})

//     let secondLargestNum = numSorted[numSorted.length - 2]
//     return secondLargestNum;
// }
// console.log(secondLargest(arr))

// task 15 

