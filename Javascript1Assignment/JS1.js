var colors = ["orange","blue","pink","red","tan","purple"];
var ye = document.getElementById("first");
{
  ye.textContent = colors[Math.floor(Math.random() * colors.length)];
}
var ye = document.getElementById("second");
{
  ye.textContent = colors[Math.floor(Math.random() * colors.length)];
}
var ye = document.getElementById("third");
{
  ye.textContent = colors[Math.floor(Math.random() * colors.length)];
}
var ye = document.getElementById("fourth");
{
  ye.textContent = colors[Math.floor(Math.random() * colors.length)];
}

document.body.style.backgroundColor = "orange";

document.getElementById("first").style.textAlign = "center";
document.getElementById("second").style.textAlign = "center";
document.getElementById("third").style.textAlign = "center";
document.getElementById("fourth").style.textAlign = "center";
