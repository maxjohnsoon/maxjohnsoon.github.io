var ye = document.querySelector("h1.first");
ye.innerHTML = "<b><i> This is the first line of the web page. </i></b>";

var ye2 = document.getElementsByTagName("li");
var ref = ye2[0].parentNode;
ref.setAttribute("class", "first");

var newItem = document.createElement("li");
var someText = document.createTextNode("test");
newItem.appendChild(someText);
ref.appendChild(newItem);
