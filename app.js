var btnToggle = document.querySelector("#toggleSwitch");
var theme = document.querySelector("#theme_link");
var borderRadius = document.querySelector("#border-radius");
var borderThickness = document.querySelector("#border-thickness");
var borderColour = document.querySelector("#border-colour");
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
    console.log(borderRadius.value);
    
}

function changeColour(){
    console.log(borderColour.value);
}

function adjustThickness(){
    console.log(borderThickness.value);
}

borderRadius.addEventListener("input",adjustRadius);
borderColour.addEventListener("input",changeColour);
borderThickness.addEventListener("input",adjustThickness);
btnToggle.addEventListener("click", toggleTheme);