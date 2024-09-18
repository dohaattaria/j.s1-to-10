// QUESTION 01
var myname="Dhuha Attaria";
alert(myname)

// QUESTION 02
var x="Dhuha Attaria"
alert("hello ,my name is"+" "+x);
console.log(x);

//QUESTION 03
var a="4";
var b="2";
var x=(a++ + --b - --a + b++ + a+b);
console.log(x);

//QUESTION 04
var time = prompt("TIME TO EAT?")
if (time > 6 && time < 10){
    alert("Break Fast");
}else if(time > 11 && time < 15){
    alert("Lunch");
}else if(time > 16 && time < 19){
    alert("Tea Time");
} 
else if(time > 20 && time < 24){
    alert("Dinner");
}