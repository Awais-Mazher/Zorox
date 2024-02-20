let menuBtn = document.getElementById("menu");
let closeBtn = document.getElementById("close-menu");
let sidebar = document.getElementById("sidebar");
let contentBlur = document.getElementById("content-blur");
let inputs = document.querySelector(".inputs");

// Variables for toggling login menu

let loginForm = document.getElementById("login-form");
let loginBtn = document.getElementById("login-btn");
let loginCloseBtn = document.getElementById("login-form-close");
let loginRegisterHeading = document.getElementById("lg-reg-heading");
let loginDesc = document.getElementById("login-desc");
let logButton = document.getElementById("log-button");
let registerToggle = document.getElementById("register-toggle-btn");
let loginBefore = document.getElementById("login-before");
let loginToggleBtn = document.getElementById("login-toggle-btn");
let inputItems = document.querySelectorAll(".input-item");

menuBtn.addEventListener("click" , ()=>{
    sidebar.style.left = "0px";
    sidebar.style.transition = "0.5s all";
})

closeBtn.addEventListener("click" , ()=>{
    sidebar.style.left = "-500px";
    sidebar.style.transition = "0.5s all";
})

loginBtn.addEventListener("click" , ()=>{
    loginForm.style.top = "350px";
    loginForm.style.transition = "0.7s all";
})

loginCloseBtn.addEventListener("click" , ()=>{
    loginForm.style.top = "-300px";
    loginForm.style.transition = "0.7s all";
})

// Registeration Form Toggle

registerToggle.addEventListener("click" , ()=>{
    inputItems[0].classList.remove("register-inputs");
    inputItems[3].classList.remove("register-inputs");

    loginBefore.style.height = "560px";

    loginRegisterHeading.innerText = "Create an Account";
    loginDesc.innerText = "Have an account? ";
    logButton.innerText = "Register";

    registerToggle.style.display = "none";
    loginToggleBtn.style.display = "inline";
})

loginToggleBtn.addEventListener("click" , ()=>{
    inputItems[0].classList.add("register-inputs");
    inputItems[3].classList.add("register-inputs");

    loginBefore.style.height = "404px";

    loginRegisterHeading.innerText = "Welcome back!";
    loginDesc.innerText = "Don't have an account? ";
    logButton.innerText = "Login";

    registerToggle.style.display = "inline";
    loginToggleBtn.style.display = "none";
})

// Search Bar Responsiveness

let searchIcon = document.querySelector("#search-icon-right");
let searchBar = document.querySelector(".search-bar-resp");

searchIcon.addEventListener("click" , ()=>{
    if(searchBar.classList.contains("dsp-block")){
        searchBar.classList.remove("dsp-block");
    }
    else{
        searchBar.classList.add("dsp-block");
    }
})

// Top Anime Swap

let todayBtn = document.getElementById("today-btn");
let weekBtn = document.getElementById("week-btn");
let monthBtn = document.getElementById("month-btn");

let todayBox = document.getElementById("today-box");
let weekBox = document.getElementById("week-box");
let monthBox = document.getElementById("month-box");

todayBtn.addEventListener("click" , ()=>{
    todayBox.style.display = "block";
    weekBox.style.display = "none";
    monthBox.style.display = "none";

    if(todayBtn.classList.contains("active")){
    }
    else{
        todayBtn.classList.add("active");
    }
    weekBtn.classList.remove("active");
    monthBtn.classList.remove("active");
})

weekBtn.addEventListener("click" , ()=>{
    weekBox.style.display = "block";
    todayBox.style.display = "none";
    monthBox.style.display = "none";

    weekBtn.classList.add("active");
    todayBtn.classList.remove("active");
    monthBtn.classList.remove("active");
})

monthBtn.addEventListener("click" , ()=>{
    monthBox.style.display = "block";
    todayBox.style.display = "none";
    weekBox.style.display = "none";

    monthBtn.classList.add("active");
    todayBtn.classList.remove("active");
    weekBtn.classList.remove("active");
})


// Genres Show Links

let moreLinks = document.querySelectorAll(".hidden-links");
let showMoreBtn = document.getElementById("show-more-btn");

showMoreBtn.addEventListener("click" , ()=>{
    if(moreLinks[0].classList.contains("hidden-links")){
        for(let i=0 ; i<moreLinks.length ; i++){
            moreLinks[i].classList.remove("hidden-links");
        }
        showMoreBtn.innerText = "Show Less";
    }
    else{
        for(let i=0 ; i<moreLinks.length ; i++){
            moreLinks[i].classList.add("hidden-links");
        }
        showMoreBtn.innerText = "Show More";
    }
})

// Top Anime Years Links

let linksHidden = document.querySelectorAll(".hidden");
let showBtn = document.getElementById("show-btn");

function showMore(){
    if(linksHidden[0].classList.contains("hidden")){
        for(let i=0 ; i<linksHidden.length ; i++){
            linksHidden[i].classList.remove("hidden");
        }
        showBtn.innerText = "Show Less";
    }
    else{
        for(let i=0 ; i<linksHidden.length ; i++){
            linksHidden[i].classList.add("hidden");
        }
        showBtn.innerText = "Show More";
    }
}