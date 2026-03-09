function predictAQI(){

let pm25 = document.getElementById("pm25").value;
let pm10 = document.getElementById("pm10").value;
let no2 = document.getElementById("no2").value;
let co = document.getElementById("co").value;

fetch("http://127.0.0.1:5000/predict",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
pm25:pm25,
pm10:pm10,
no2:no2,
co:co
})

})

.then(res=>res.json())

.then(data=>{

document.getElementById("aqiValue").innerText = "AQI: " + data.aqi;

document.getElementById("category").innerText =
"Category: " + data.category;

updateChart(data.aqi);

})

}

let chart;

function updateChart(aqi){

const ctx=document.getElementById("aqiChart");

if(chart){
chart.destroy();
}

chart=new Chart(ctx,{

type:"bar",

data:{
labels:["Predicted AQI"],
datasets:[{
label:"AQI Value",
data:[aqi]
}]
},

options:{
responsive:true
}

});

}