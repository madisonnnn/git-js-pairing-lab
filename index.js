// //Code your solutions in this file

// //Question 1 - Madison

// const fiveToOneHundred = () => {
//     for(i = 5; i <= 100; i++){
//         console.log(i)
//     }
// }

// fiveToOneHundred()

// // Question 2 - Mei 
// const multiplesOfThree = () => {
//     for (i = 1; i <= 100; i++) {
//         if (i % 3 === 0) {
//             console.log(i);
//         }
//     }
// }

// multiplesOfThree();

// //Question 3 - Madison

// const multiplesOfThreeOrFive = () => {
//     for(i = 3; i <= 100; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             console.log(i)
//         }
//     }
// }

// multiplesOfThreeOrFive()

// Question 4 - Mei 
// const untilNum = (numbers) => {
//     for(i = 1; i <= numbers; i++) {
//         console.log(i); 
//     }
// }

// untilNum(5);

// //Question 5 - Madison

// const multiply = (num1,num2) => {
//     console.log(num1*num2)
// }

// multiply(2,4)

// Question 6 - Mei 
const add = (num1, num2) => {
    if (num1 === num2) {
        return ((num1 + num2) * 3);
    } else {
        return num1 + num2;
    }
}

console.log(add(6,6))