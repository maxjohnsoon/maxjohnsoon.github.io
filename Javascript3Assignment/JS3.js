function Bball (hm,vs,hsc,vsc,sum){
this.home=hm;
this.visitor=vs;
this.hScore=hsc;
this.vScore=vsc;
this.getSummary = function(){
  this.game = [hm,vs,hsc,vsc];
  return this.game;
}
}

function getRand1(){
  return Math.floor((Math.random() * 20)+70);
}


//Math.floor(Math.random() * colors.length)

var myGame1 = new Bball ("SLUH", "KIRKWOOD", getRand1(), getRand1());
var myGame2 = new Bball ("VIANNEY","KIRKWOOD", getRand1(), getRand1());
var myGame3 = new Bball ("SLUH", "DESMET", getRand1(), getRand1());
var myGame4 = new Bball ("CBC", "PIORY", getRand1(), getRand1());
var myGame5 = new Bball ("SLUH", "CHAMINADE", getRand1(), getRand1());
var myGame6 = new Bball ("LINDBERG", "KIRKWOOD", getRand1(), getRand1());


var ye = document.getElementById("game1");
{
  ye.textContent =  myGame1.getSummary();
}
var ye = document.getElementById("game2");
{
  ye.textContent =  myGame2.getSummary();
}
var ye = document.getElementById("game3");
{
  ye.textContent =  myGame3.getSummary();
}
var ye = document.getElementById("game4");
{
  ye.textContent =  myGame4.getSummary();
}
var ye = document.getElementById("game5");
{
  ye.textContent =  myGame5.getSummary();
}
var ye = document.getElementById("game6");
{
  ye.textContent =  myGame6.getSummary();
}
document.body.style.backgroundColor = "yellow";

document.getElementById("game1").style.textAlign = "center";
document.getElementById("game2").style.textAlign = "center";
document.getElementById("game3").style.textAlign = "center";
document.getElementById("game4").style.textAlign = "center";
document.getElementById("game5").style.textAlign = "center";
document.getElementById("game6").style.textAlign = "center";
