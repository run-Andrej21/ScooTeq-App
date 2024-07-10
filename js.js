var inputFields = document.querySelectorAll('.inputbox');
function HideALL(){ 
    inputFields.forEach(function(inputbox) {
        inputbox.classList.add('hidden');
    });
}

document.addEventListener("DOMContentLoaded", function(){
    HideALL()
    document.getElementById("KilometerID").classList.remove("hidden");
    }
)

document.getElementById("value-1").addEventListener("click", function(){
    HideALL()
    document.getElementById("KilometerID").classList.remove("hidden");
    console.log("Kilometer")
})

document.getElementById("value-2").addEventListener("click", function(){
    HideALL()
    document.getElementById("MinutenID").classList.remove("hidden")
    console.log("Minuten")
})

document.getElementById("value-3").addEventListener("click", function(){
    HideALL()
    document.getElementById("BudgetID").classList.remove("hidden")
    console.log("Budget")
})


//1€ start
//0.15€ pro min
//15 km/h = 15.000 / 60 = 250 m/min
//9.99 30
video = document.getElementById("videoID")

document.getElementById("KilometerInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        WieVieleKilometer = parseInt(document.getElementById("KilometerInputID").value)
        WasKostenKilometer = WieVieleKilometer * 1000 / 250 * 0.15 + 1
        console.log(WasKostenKilometer)
        document.getElementById("ResultID").textContent = WasKostenKilometer+"€"
        video.play()

    }
})

document.getElementById("MinutenInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        WieVieleMinuten = parseFloat(document.getElementById("MinutenInputID").value)
        WasKostenMinuten = WieVieleMinuten * 0.15 + 1
        console.log(Math.round(WasKostenMinuten))
        document.getElementById("ResultID").textContent = WasKostenMinuten+"€"
        video.load()
    }
})

document.getElementById("BudgetInputID").addEventListener("keypress", function(event){

    if(event.key == "Enter"){
        WasBudget = parseFloat(document.getElementById("BudgetInputID").value)
        RealBudget = WasBudget - 1
        WieVielFürBudget = RealBudget / 0.15 
        console.log(WieVielFürBudget)
        if(WieVielFürBudget < 1){
            document.getElementById("ResultID").textContent = "Nicht genug Geld"
            console.log("broke")
            video.play()
            console.log(WieVielFürBudget)
        } else{
            console.log(Math.floor(WieVielFürBudget))
            document.getElementById("ResultID").textContent = Math.floor(WieVielFürBudget)+" Minuten"
            video = document.getElementById("videoDIVID")
            video.load()
            video.play()
        }
    }
})

