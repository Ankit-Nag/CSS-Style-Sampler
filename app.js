var btnToggle = document.querySelector("#toggleSwitch");
var theme = document.querySelector("#theme_link");
var borderRadius = document.querySelector("#border-radius");
var borderThickness = document.querySelector("#border-thickness");
var borderColour = document.querySelector("#border-colour");
var shape = document.querySelector(".shape");
var fillColour = document.querySelector("#fill-colour");
const currentTheme = localStorage.getItem("theme");

var userTheme;


console.log(document.querySelector(".shape").style);

//block to control theme during initial load in
if(currentTheme =="dark" ){
    theme.href = "/dark-theme.css";
    btnToggle.checked=true;
    fillColour.value="#30d158";
}
else{
    fillColour.value="#FF9500";
}

function toggleTheme() {

    console.log(theme);
//block to control theme during toggling
    if(btnToggle.checked==true){
        theme.href = "/dark-theme.css";
        userTheme = "dark";
    }
    else{
        theme.href = "/light-theme.css";
        userTheme="light";
    }
    localStorage.setItem("theme",userTheme);
}

function adjustRadius(){
    shape.style.borderRadius= borderRadius.value+"%";
}

function changeColour(){
    shape.style.borderColor= borderColour.value;
    shape.style.backgroundColor=fillColour.value;
}

function adjustThickness(){
    console.log(borderThickness.value);
    shape.style.borderWidth= borderThickness.value+"px";
}

borderRadius.addEventListener("input",adjustRadius);
borderColour.addEventListener("input",changeColour);
borderThickness.addEventListener("input",adjustThickness);
fillColour.addEventListener("input",changeColour);
btnToggle.addEventListener("click", toggleTheme);