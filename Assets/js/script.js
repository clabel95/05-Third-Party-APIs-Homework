document.getElementById("currentDay").textContent = moment().format("dddd MMMM Do")
var nine_am = document.getElementById("9AM");
var ten_am = document.getElementById("10AM"); 
var eleven_am = document.getElementById("11AM");
var twelve_am = document.getElementById("12AM");
var one_pm = document.getElementById("1PM");
var two_pm = document.getElementById("2PM");
var three_pm = document.getElementById("3PM");
var four_pm = document.getElementById("4PM");
var five_pm = document.getElementById("5PM");



switch (moment().hour()){
    case 9: {   nine_am.style.backgroundColor      = "red"
                ten_am.style.backgroundColor       = "#00cc00"
                eleven_am.style.backgroundColor    = "#00cc00"
                twelve_am.style.backgroundColor    = "#00cc00"
                one_pm.style.backgroundColor       = "#00cc00"
                two_pm.style.backgroundColor       = "#00cc00"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
                
    case 10:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "red"
                eleven_am.style.backgroundColor    = "#00cc00"
                twelve_am.style.backgroundColor    = "#00cc00"
                one_pm.style.backgroundColor       = "#00cc00"
                two_pm.style.backgroundColor       = "#00cc00"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 11:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "red"
                twelve_am.style.backgroundColor    = "#00cc00"
                one_pm.style.backgroundColor       = "#00cc00"
                two_pm.style.backgroundColor       = "#00cc00"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 12:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "red"
                one_pm.style.backgroundColor       = "#00cc00"
                two_pm.style.backgroundColor       = "#00cc00"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 13:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "#80808052"
                one_pm.style.backgroundColor       = "red"
                two_pm.style.backgroundColor       = "#00cc00"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 14:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "#80808052"
                one_pm.style.backgroundColor       = "#80808052"
                two_pm.style.backgroundColor       = "red"
                three_pm.style.backgroundColor     = "#00cc00"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 15:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "#80808052"
                one_pm.style.backgroundColor       = "#80808052"
                two_pm.style.backgroundColor       = "#80808052"
                three_pm.style.backgroundColor     = "red"
                four_pm.style.backgroundColor      = "#00cc00"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 16:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "#80808052"
                one_pm.style.backgroundColor       = "#80808052"
                two_pm.style.backgroundColor       = "#80808052"
                three_pm.style.backgroundColor     = "#80808052"
                four_pm.style.backgroundColor      = "red"
                five_pm.style.backgroundColor      = "#00cc00"
            };break;
    case 17:{   nine_am.style.backgroundColor      = "#80808052"
                ten_am.style.backgroundColor       = "#80808052"
                eleven_am.style.backgroundColor    = "#80808052"
                twelve_am.style.backgroundColor    = "#80808052"
                one_pm.style.backgroundColor       = "#80808052"
                two_pm.style.backgroundColor       = "#80808052"
                three_pm.style.backgroundColor     = "#80808052"
                four_pm.style.backgroundColor      = "#80808052"
                five_pm.style.backgroundColor      = "red"
            };break;
}





document.getElementById("9AM").value = localStorage.getItem("9AM_Task");
document.getElementById("10AM").value = localStorage.getItem("10AM_Task");
document.getElementById("11AM").value = localStorage.getItem("11AM_Task");
document.getElementById("12AM").value = localStorage.getItem("12AM_Task");
document.getElementById("1PM").value = localStorage.getItem("1PM_Task");
document.getElementById("2PM").value = localStorage.getItem("2PM_Task");
document.getElementById("3PM").value = localStorage.getItem("3PM_Task");
document.getElementById("4PM").value = localStorage.getItem("4PM_Task");
document.getElementById("5PM").value = localStorage.getItem("5PM_Task");







document.getElementById("9AM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("9AM_Task", document.getElementById("9AM").value) 
    console.log("save 9AM")
});
document.getElementById("10AM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("10AM_Task", document.getElementById("10AM").value)
    console.log("save 10AM")
});
document.getElementById("11AM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("11AM_Task", document.getElementById("11AM").value)
    console.log("save 11AM")
});
document.getElementById("12AM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("12AM_Task", document.getElementById("12AM").value)
    console.log("save 12AM")
});
document.getElementById("1PM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("1PM_Task", document.getElementById("1PM").value)
    console.log("save 1PM")
});
document.getElementById("2PM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("2PM_Task", document.getElementById("2PM").value)
    console.log("save 2PM")
});
document.getElementById("3PM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("3PM_Task", document.getElementById("3PM").value)
    console.log("save 3PM")
});
document.getElementById("4PM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("4PM_Task", document.getElementById("4PM").value)
    console.log("save 4PM")
});
document.getElementById("5PM_Button").addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("5PM_Task", document.getElementById("5PM").value)
    console.log("save 5PM")
});