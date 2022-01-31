var score = 0;
var highscores = [];

//functie startSpel
function startSpel() {
  document.getElementById("startknop").style.visibility = "hidden";
  document.getElementById("click").style.visibility = "visible";
  score = 0;
  document.getElementById("score").innerHTML = score;

  //timer zetten
  setTimeout(stopSpel, 5000);
}

//functie stopSpel
function stopSpel() {
  document.getElementById("startknop").style.visibility = "visible";
  document.getElementById("click").style.visibility = "hidden";
  //melding totaal aantal kliks per sec
    document.getElementById("gemiddelde").innerHTML = "you are clicking " + (score/5) + " times per second.";

//melding nieuwe high score
if(score > highscores)
{
alert("you have achieved a new highscore")
}
else
{
alert("try harder noob + cope + ratio")
}

  highscores.unshift(score);
  //sorteren highscore van hoog naar laag
  highscores.sort(function (a, b) {
    return b - a;
  });

  for (var x = 0; x < highscores.length; x++) {
    document.getElementById("score" + (x + 1)).innerHTML = highscores[x];
  }
}
function setscore() {
  //score met 1 verhogen
  score = score + 1;

  document.getElementById("score").innerHTML = score;
}
