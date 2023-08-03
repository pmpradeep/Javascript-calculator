
//calculator


function add() {
   let num1 = document.getElementById('num1').value;
   let number1 = parseFloat(num1);
   let num2 = document.getElementById('num2').value;
   let number2 = parseFloat(num2);
   let result = number1 + number2;
   document.getElementById('result').value = result;
}

function sub() {
   let num1 = document.getElementById('num1').value;
   let number1 = parseFloat(num1);
   let num2 = document.getElementById('num2').value;
   let number2 = parseFloat(num2);
   let result = number1 - number2;
   document.getElementById('result').value = result;
}

function mul() {
   let num1 = document.getElementById('num1').value;
   let number1 = parseFloat(num1);
   let num2 = document.getElementById('num2').value;
   let number2 = parseFloat(num2);
   let result = number1 * number2;
   document.getElementById('result').value = result;
}

function div() {
   let num1 = document.getElementById('num1').value;
   let number1 = parseFloat(num1);
   let num2 = document.getElementById('num2').value;
   let number2 = parseFloat(num2);
   let result = number1 / number2;
   document.getElementById('result').value = result;
   console.log("iam");
}

function clearall() {

   document.getElementById('num1').value = '';
   document.getElementById('num2').value = '';
   document.getElementById('result').value = '';

}