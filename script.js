
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
    //console.log(operatorSign);
    let num1= Number(numbOne.value);
    //console.log(num1);
    let num2= Number(numbTwo.value);
    //console.log(num2);
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