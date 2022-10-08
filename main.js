function calcDays(age){

    "use strict";

    var year = 365;

    return age * year;
}

var dynamicAge = prompt("Enter your Age to Convert it to Days!")

document.getElementById("test").innerHTML ="Your Age in Days Are: " + " " + calcDays(dynamicAge) + " Day!"