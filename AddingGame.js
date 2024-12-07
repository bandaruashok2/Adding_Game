let inputAns = document.getElementById('userInput');
let restartBtn = document.getElementById('restartButton');
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let Result = document.getElementById('gameResult');
let checkButton = document.getElementById('checkButton');
let sum = 0;
restartBtn.onclick = function() {
    firstNumber.textContent = Math.ceil(Math.random() * 100);
    secondNumber.textContent = Math.ceil(Math.random() * 100);

    sum = parseInt(firstNumber.textContent) + parseInt(secondNumber.textContent);
    inputAns.value=" ";
    Result.textContent="";
}
checkButton.onclick = function() {

            if(!firstNumber.textContent || !secondNumber.textContent){
                Result.textContent = "First enter any two Numbers...";
                Result.style.backgroundColor = "orange";
            }
            else if(!inputAns.value) {
                Result.textContent = "Warning: Please enter an answer!";
                Result.style.backgroundColor = "orange";
            }
            else{
                if (sum === parseInt(inputAns.value)) {
                    Result.textContent = "Congratulations..! You got it right.";
                    Result.style.backgroundColor = "green";
                } else {
                    Result.textContent = "Wrong Number..! Try Again...!";
                    Result.style.backgroundColor = "red";
                }
            }
            
}