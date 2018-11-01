var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

function calcSum(a, b) {
	return a + b;
}
function calcDiff(a, b) {
	return a - b;
}
function calcProd(a, b) {
	return a * b;
}
function calcQuot(a, b) {
	return a / b;
}




var ye = document.getElementById("sum");
{
  ye.textContent = "The sum of " + num1 + " and " + num2 + " is " + calcSum(num1, num2);
}
var ye = document.getElementById("diff");
{
  ye.textContent = "The difference of " + num1 + " and " + num2 + " is " + calcDiff(num1, num2);
}
var ye = document.getElementById("prod");
{
  ye.textContent = "The product of " + num1 + " and " + num2 + " is " + calcProd(num1, num2);
}
var ye = document.getElementById("quot");
{
  ye.textContent = "The quotient of " + num1 + " and " + num2 + " is " + calcQuot(num1, num2);
}

document.body.style.backgroundColor = "teal";

document.getElementById("sum").style.textAlign = "center";
document.getElementById("diff").style.textAlign = "center";
document.getElementById("prod").style.textAlign = "center";
document.getElementById("quot").style.textAlign = "center";
