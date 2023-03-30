var p1=Math.random();
var p2=Math.random();
p1=Math.floor(p1*6)+1;
p2=Math.floor(p2*6)+1;
var s1="images/dice"+p1+".png";
var s2="images/dice"+p2+".png";
document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);
if(p1===p2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}