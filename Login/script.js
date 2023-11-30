let password = document.getElementById("password");
let passDisplayed = document.getElementById("pass-displayed");
let passNotDisplayed = document.getElementById("pass-notDisplayed");

passDisplayed.addEventListener('click', ()=>{
    password.type = 'text';
    passDisplayed.style.display = 'none';
    passNotDisplayed.style.display = 'inline';
});

passNotDisplayed.addEventListener('click', ()=>{
    password.type = 'password';
    passNotDisplayed.style.display = 'none';
    passDisplayed.style.display = 'inline';
});


function login() {
    let pop = document.getElementById("login_page");
    pop.style.visibility = "visible";
}
function login_reverse() {
    let pop = document.getElementById("login_page");
    pop.style.visibility = "hidden";
}
window.onload = login();
