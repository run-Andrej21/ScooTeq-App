var inputFields = document.querySelectorAll('.inputbox');
function HideALL(){ 
    inputFields.forEach(function(inputbox) {
        inputbox.classList.add('hidden');
    });
}

function ClearALL(){
    document.getElementById("ResultID").textContent  = ""
    document.getElementById("KilometerInputID").value = ""
    document.getElementById("MinutenInputID").value = ""
    document.getElementById("BudgetInputID").value = ""
}

document.addEventListener("DOMContentLoaded", function(){
    HideALL()
    document.getElementById("KilometerID").classList.remove("hidden");
})

document.getElementById("value-1").addEventListener("click", function(){
    HideALL()
    ClearALL()
    document.getElementById("KilometerID").classList.remove("hidden");
})

document.getElementById("value-2").addEventListener("click", function(){
    HideALL()
    ClearALL()
    document.getElementById("MinutenID").classList.remove("hidden")
})

document.getElementById("value-3").addEventListener("click", function(){
    HideALL()
    ClearALL()
    document.getElementById("BudgetID").classList.remove("hidden")
})



//1€ start
//0.15€ pro min
//15 km/h = 15.000 / 60 = 250 m/min


document.getElementById("KilometerInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        video = document.getElementById("videoID")
        KM_Value = parseInt(document.getElementById("KilometerInputID").value)
        KM_Kosten = KM_Value * 1000 / 250 * 0.15 + 1
        KM_Minuten = KM_Value * 1000 /250
        document.getElementById("ResultID").innerHTML = KM_Kosten.toFixed(2)+" € "+"<br>"+KM_Minuten+" Minuten"
        video.load()
        video.play()

    }
})

document.getElementById("MinutenInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        video = document.getElementById("videoID")
        MIN_Value = parseFloat(document.getElementById("MinutenInputID").value)
        MIN_Kosten = MIN_Value * 0.15 + 1
        MIN_Kilometer = MIN_Value * 250 / 1000
        document.getElementById("ResultID").innerHTML = MIN_Kosten.toFixed(2)+" €"+"<br>"+MIN_Kilometer+" Km"
        video.load()
        video.play()
    }
})




// NEEDS FIX
document.getElementById("BudgetInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        video = document.getElementById("videoID")
        BUD_Value = parseFloat(document.getElementById("BudgetInputID").value)-1
        BUD_Minuten = BUD_Value / 0.15 
        BUD_Kilometer = BUD_Value * 250 / 1000
        
        if(BUD_Minuten < 1){
            document.getElementById("ResultID").textContent = "Budget zu klein"
            video.load()
            video.play()
        } else{
            document.getElementById("ResultID").innerHTML = BUD_Minuten+" Minuten"+"<br>"+BUD_Kilometer+" Km"
            video = document.getElementById("videoDIVID")
            video.load()
            video.play()
        }
    }
})

