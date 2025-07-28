// Problem 1 :
// Free Drinks
//     - Burger more than 500tk: free Coke
//     - Else Coke: 30tk
// Solve :
let burgerBuyingMoney = 610;

if(burgerBuyingMoney > 500){
    console.log("You Will get a free coke");
}
else{
    console.log("You have to pay 30tk for the coke");
}


// problem : 2
// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.
// Solve :

let height = 1.69;
let weight = 69;
let Bmi = weight / (height * height);

if(Bmi <18.5){
    console.log("You are underweight");
}
else{
    if( (Bmi >= 18.5) && (Bmi <= 24.9))
    {
        console.log('You are normal');
    }
    else{
        if((Bmi > 25) && (Bmi <29.9)){
            console.log('You are overweight');
        }
        else{
            console.log('You are obese');
        }
    }
}

// problem 3 : Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59
// Solve :
let score = 87;
if(score >= 90){
    console.log('You have Got Grade A')
}
 else if(score >= 80){
    console.log('You have Got Grade B')
}
else if(score >= 70){
    console.log('You have Got Grade C')
}
else if(score >= 60){
    console.log('You have Got Grade D')
}
else{
    console.log('You have Got Grade F')
}


// problem 4 :

let marksOfFriend = 56;

if(marksOfFriend >= 80){
    console.log('We are Going for Lunch');
}
else{
    if((marksOfFriend < 80) && (marksOfFriend >= 60)){
        console.log('Good Luck for Next time');
    }
    else{
        if((marksOfFriend < 60) && (marksOfFriend >= 40)){
            console.log('I do not know him, i will not see his massage');
        }
        else{
            console.log("Block Him");
        }
    }
}


// probelm 5 :
// you have two numbers in two variables, called: num1, num2
// now declare a variable called result. 
// if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
// write a simple if-else. 
// also, write it using ternary operator.
// solve :

let numberOne = 90;
let numberTwo = 17;

if(numberOne > numberTwo)
{
    let newNumber1 = numberOne * 2;
    console.log(newNumber1);
}
else{
    let newNumber1 = numberOne + numberTwo;
    console.log(newNumber1);
}

let newNumber = (numberOne > numberTwo) ? (numberOne * 2): (numberOne + numberTwo);
console.log(newNumber);
