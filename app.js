var btnToggle = document.querySelector("#toggleSwitch");
var theme = document.querySelector("#theme_link");
var borderRadius = document.querySelector("#border-radius");
var borderThickness = document.querySelector("#border-thickness");
var borderColour = document.querySelector("#border-colour");
var shape = document.querySelector(".shape");
const currentTheme = localStorage.getItem("theme");

var userTheme;

if(currentTheme =="dark" ){
    theme.href = "/dark-theme.css";
    btnToggle.checked=true;
}

function toggleTheme() {

    console.log(theme);

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
}

function adjustThickness(){
    console.log(borderThickness.value);
    shape.style.borderWidth= borderThickness.value+"px";
}

borderRadius.addEventListener("input",adjustRadius);
borderColour.addEventListener("input",changeColour);
borderThickness.addEventListener("input",adjustThickness);
btnToggle.addEventListener("click", toggleTheme);