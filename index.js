var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
var randomdice="dice"+randomNumber1+".png";//dice1.png-dice6.png
document.querySelectorAll("img")[0].setAttribute("src",randomdice);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdice2="dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2>randomNumber1){
     document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw "
}
