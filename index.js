//window.alert('Hello,World!');
document.getElementById('result').innerText = res;
function calc() {
    const num1 = +document.getElementById('input1').value;
    const num2 = +document.getElementById('input2').value;
    
    return { 
        add: function() {
            writeOutput(num1 + num2);
            updateHistory(res);
        },
        div: function() {
            writeOutput(num1 / num2);
        },
        subt: function() {
            writeOutput(num1 - num2);
        },
        multi: function() {
            writeOutput(num1 * num2);
        }
    };
}
function updateHistory(res){
    
    //let result = document.createElement('p');
    //result.innerText = calc();
    //result.id = 'header-text';
    //document.getElementById('result').innerText = res;
    const resultElement = document.createElement('p');
    resultElement.innerText = res;
    document.getElementById('history').prepend(resultElement);
    console.log(res);
}

function writeOutput(out) {
    console.log(out);
    document.getElementById('result').innerText = out;
}







    // function add() {
    //     writeOutput(num1 + num2);
    // }

    // if (operator === '+') {
    //     add(num1, num2);
    // } 
    // else if (operator === "-") {
    //     subtract(num1, num2);
    // } 
    // else if (operator === "*") {
    //     multiply(num1, num2);
    // } 
    // else if (operator === "/") {
    //     divide(num1, num2);
    // }
    

// function add(num1, num2){
//     const res = parseInt(num1) + parseInt(num2);
//     updateHistory(res);

// }

// function divide(num1, num2){
//     console.log(num1 / num2);
// }

// function multiply(num1, num2){
//     console.log(num1 * num2);
// }

// function subtract(num1, num2){
//     console.log(num1 - num2);
// }

// function updateHistory(res){
//     document.getElementById('result').innerText = res;
//     const resultElement = document.createElement('p');
//     resultElement.innerText = res;

//     document.getElementById('history').preprend(resultElement);
// }


// let result = document.createElement('p');
// result.innerText = calc();
// result.id = 'header-text';
// document.getElementById('header-box').appendChild(result);



