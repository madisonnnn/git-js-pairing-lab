//Code your solutions in this file

//Question 1 - Madison

const fiveToOneHundred = () => {
    for(i = 5; i <= 100; i++){
        console.log(i)
    }
}

fiveToOneHundred()

// Question 2 - Mei 
const multiplesOfThree = () => {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThree();

//Question 3 - Madison

const multiplesOfThreeOrFive = () => {
    for(i = 3; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}

multiplesOfThreeOrFive()