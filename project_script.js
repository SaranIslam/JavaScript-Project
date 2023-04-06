function BMI(ww1,hh1){
    var calc
    var weight = parseInt(ww1)
    var height = parseInt(hh1)
    calc = (weight/(height*height/10000)).toFixed(1)
    display("result",calc)
    range("range",calc)
}
function display(elementId, calc){
    document.getElementById(elementId).innerHTML = calc+" kg/m2" 
}
function range(result,calc){
    
   
    if(calc<18.5){
        document.getElementById(result).style.color="lightblue"
        document.getElementById(result).innerHTML="UNDERWEIGHT"
    }
    else if(calc<24.9){
        document.getElementById(result).style.color="green"
        document.getElementById(result).innerHTML="NORMAL"
    }
    else if(calc<29.9){
        document.getElementById(result).style.color="yellow"
        document.getElementById(result).innerHTML="OVERWEIGHT"
    }
    else if(calc<34.9){
        document.getElementById(result).style.color="orange"
        document.getElementById(result).innerHTML="OBESE"
    }
    else{
        document.getElementById(result).style.color="RED"
        document.getElementById(result).innerHTML="EXTREMELY OBESE" 
    }
}
