
//Change the "Are you ready?" to "Let's Go!" when button is clicked
function changeText() {
    document.getElementById("ready-text").innerHTML = "Let's Go!";
    document.getElementById("ready-text").style.fontSize = "50px";
}

//ALERT's "Hello World"
function helloWorld() {
    alert("Hello World!");
}

//Calculator function
function calculate(numbOne, numbTwo) {
    let operatorSign = document.querySelector('[name="operator"]:checked').value;
    let num1= Number(numbOne.value);
    let num2= Number(numbTwo.value);
    let total;

    switch (operatorSign) {
        case "+":
            total = num1+num2;
            break;
            case "-":
            total = num1-num2;
            break;
            case "*":
            total = num1*num2;
            break;
            case "/":
            total = num1/num2;
            break;
        default:
            break;
    }
    document.getElementById("total_text").innerHTML = "Total: " + total;   
}

//Change Color function
function changeColor() {
    let colorChangeBox = document.getElementById("div_color_change_box");
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorChangeBox.style.backgroundColor = randomColor;
}

//Change Shape Function
function changeShape() {
    let shapeChangeBox = document.getElementById("div_shape_change_box");

    
}


// _______________________________________
//REDUCE function
// function aVeryBigSum(ar) {
//     return ar.reduce(totalArray);

//     function totalArray (total, num){
//         return total + num;
//     }

// }

//___________________________________________
//MULTI-DIMENSIONAL ARRAY function
// function diagonalDifference(arr) {
//     // Write your code here
//     let leftToRightTotal = 0;
//     let rightToLeftTotal = 0;

//     function leftDiagonal(array) {
//         let tempTotal= 0;
//         for (let i = 0; i < array.length; i++){
//             tempTotal += array[i][i];
//         }
//         leftToRightTotal += tempTotal;
//     }

//     function rightDiagonal(array) {
//         let tempTotal = 0;
//         let arrLength = ((array.length) -1);
//         for (let i = (arrLength); i >= 0; i--){
//             tempTotal += array[(Math.abs(i-arrLength))][i];
//         }
//         rightToLeftTotal += tempTotal;
//     }


//     leftDiagonal(arr);
//     rightDiagonal(arr);
//     return (Math.abs(leftToRightTotal- rightToLeftTotal));
//     //console.log(rightToLeftTotal);
//     //console.log(leftToRightTotal);
// }

//MAP FUNCTION in action
// function gradingStudents(grades) {
//     // Write your code here

//     function roundGradeOrNot(grade){
//         let nextMultipleOfFive = (grade-(grade%5))+5;
//         //console.log(nextMultipleOfFive);
//         if((nextMultipleOfFive - grade) < 3 && grade >= 38){
//             return nextMultipleOfFive;
//         } else{
//             return grade;
//             }
//     }
//     return grades.map(roundGradeOrNot);
// }


// _______________________________________
// const googleDatabase = [
//     'cats.com',
//     'dogs.com',
//     'food.com'
// ];


// const googleSearch = (searchInput, db) => {
//     const matches= googleDatabase.filter(website => {
//         return website.includes(searchInput);
//     })
//     return matches.length > 3 ? matches.slice(0,3) : matches;
// }

// console.log(googleSearch("cats", googleDatabase));