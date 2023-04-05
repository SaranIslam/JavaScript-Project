/*var lotto = prompt("give me the number")
var prize = Math.floor(Math.random()*100);
document.getElementById("input").innerHTML = lotto
document.getElementById("result").innerHTML = prize
if(lotto>15){
    document.getElementById("content").innerHTML =" <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/QbieGt9FtbM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
}
if(lotto===prize){
    document.getElementById("display").innerHTML = "you got it"
}
else{
    document.getElementById("display").innerHTML = "lol bro"
}
if(lotto>=80){
    document.getElementById("grade").innerHTML = "A"
}
else if(lotto>=50){
    document.getElementById("grade").innerHTML = "PASS"
}
var total = 0
for(var i=1;i<=lotto;i++){
    var food = prompt("food no."+i) 
    document.getElementById("price").innerHTML += "food no. "+i+" : "+food+" baht"+"<br>"
total = total + parseInt(food)
}
document.getElementById("total").innerHTML = "total price is "+total+" baht"
var score = 0
for(i=0;i<lotto;i++){
    var answer = prompt("Head or Tail")
    var HoT = Math.random()
    console.log(HoT)
    if(HoT >= 0.5){
        HoT = "Head"
    }
    else{
        HoT = "Tail"
    }
    document.getElementById("list").innerHTML += "Round "+(i+1)+" Your answer : "+answer+"<br>Correct answer : "+HoT+"<br>"
    if(answer == HoT ){
        alert("Nice")
        score++
    }
    else{
        alert("Sad")
    }
    document.getElementById("score").innerHTML = "Your score : "+score
}*/
function display(elementId, celc){
    document.getElementById(elementId).innerHTML = celc
}
display("calc",F2C(150))
function F2C(frh){
    var value = (frh-32)*5/9
     return value.toFixed(2)+" C"
}
var xcv
function convert(xcv){
    alert(F2C(xcv))
}
