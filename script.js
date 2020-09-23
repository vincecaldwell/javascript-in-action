
//Change the "Are you ready?" to "Let's Go!" when button is clicked
function changeText() {
    document.getElementById("ready-text").innerHTML = "Let's Go!";
    document.getElementById("ready-text").style.fontSize = "50px";
}

function helloWorld() {
    alert("Hello World!");
}


// function calculate(numbOne, numbTwo, operator) {
//     console.log(operator);
//     if(operator == "add_operator"){
//         let sum = Number(numbOne.value) + Number(numbTwo.value);
//     document.getElementById("total_text").innerHTML = sum;
//     }
    
// }

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