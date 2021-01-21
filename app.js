var btnToggle = document.querySelector("#toggleSwitch");
var theme = document.querySelector("#theme_link");
const currentTheme = localStorage.getItem("theme");
var userTheme;
// var btn = document.querySelector("#test")
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



btnToggle.addEventListener("click", toggleTheme);