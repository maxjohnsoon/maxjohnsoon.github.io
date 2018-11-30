function showXCord(){
  ye.textContent = event.clientX;
}
var ye = document.getElementById("xcord");
document.addEventListener("mousemove", showXCord,false);



function showYCord(){
  ye2.textContent = event.clientY;
}
var ye2 = document.getElementById("ycord");
document.addEventListener("mousemove", showYCord,false);









function processKey(e)
  {
    if (e.keyCode == "67")
    {
      zero();
    }
  }
function zero()
{
  document.getElementById("xcord").innerHTML = "0";
  document.getElementById("ycord").innerHTML = "0";
}


window.addEventListener('keydown', processKey,false);
