let count = 0;

document.querySelector(".buttonBMI").addEventListener("click",function(){ calcBMI("click");});
document.querySelector(".height").addEventListener("keypress",function(e){ calcBMI(e);});
document.querySelector(".weight").addEventListener("keypress",function(e){ calcBMI(e);});
document.querySelector(".height").addEventListener("keypress",function(e){
    if(e.key!= "Enter")
        document.querySelector(".heightERR").innerHTML = "";
});
document.querySelector(".weight").addEventListener("keypress",function(e){
    if(e.key!= "Enter") 
        document.querySelector(".weightERR").innerHTML = "";
});



function calcBMI(e){

    if(e.key!= "Enter" && e!= "click")
         return;

    let heightNode = document.querySelector(".height");
    let weightNode = document.querySelector(".weight");
    let height = document.querySelector(".height").value;
    let weight = document.querySelector(".weight").value;
    let heightERR = document.querySelector(".heightERR");
    let weightERR = document.querySelector(".weightERR");
    let BMI;
    
    if(height == "" || weight == ""){
        if(height == "")
            heightERR.innerHTML = "Højden kan ikke være tom. Angiv en gyldig højde."
        if(weight == "")
            weightERR.innerHTML = "Wight kan ikke være tom. Indtast venligst en gyldig vægt."
        count++; return;
    }

    height = parseFloat(height);
    weight = parseFloat(weight);

    if(isNaN(height) || isNaN(weight)){
        if(isNaN(height)){
            heightERR.innerHTML = "Alfabet/symboler er ikke tilladt i højden. Indtast venligst et gyldigt nummer."; heightNode.value = ""; }
        if(isNaN(weight)){
            weightERR.innerHTML = "Alfabet/symboler er ikke tilladt i vægt. Indtast venligst et gyldigt nummer."; weightNode.value = ""; }
        count++; return;
    }

    if(height <=0 || weight<=0){
        if(height<=0)
            {heightNode.value = ""; heightERR.innerHTML = "Højden er kun positiv"}
        if(weight<=0)
            {weightNode.value = ""; weightERR.innerHTML = "vægten er kun positiv"}
        count++; return;
    }

    BMI = Math.floor(((weight)/(height*height))*10000);
    heightNode.value = "";
    weightNode.value = "";
    showBMI(BMI);

    
}

setInterval(()=>{
    if(count > 5){
        count = 0;
        alert("Du har prøvet mange gange. Indtast gyldige værdier.")
    }
},100);

function showBMI(BMI){
    let resultBMI = document.querySelector(".resultBMI");
    let you = "</div><div style = 'padding:4px;'> Du er ";
    let total = "<div style = 'padding:4px;'> Dit BMI-tal er: "
    if(BMI<= 5){
        resultBMI.innerHTML = total + BMI + you + "Undervægtig" + "</div>";
        resultBMI.style.backgroundColor = "#fcf8e3";
        resultBMI.style.color = "#8a6d3b";
    }
    else if(BMI<= 25){
        resultBMI.innerHTML = total + BMI + you + "Normalvægtig" + "</div>";
        resultBMI.style.color = "#3c763d";
        resultBMI.style.backgroundColor = "#dff0d8";
    }
    else if(BMI<= 30){
        resultBMI.innerHTML = total + BMI + you + "Overvægtig" + "</div>";
        resultBMI.style.backgroundColor = "#f2dede";
        resultBMI.style.color = "#a94442";
    }
    else{
        resultBMI.innerHTML = total + BMI + you + "Svært overvægtig" + "</div>";
        resultBMI.style.backgroundColor = "#f2dede";
        resultBMI.style.color = "#a94442";
    }
}