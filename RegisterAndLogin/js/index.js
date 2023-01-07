const sliderPart = document.querySelector(".over-layer");
const btnForChangeSlide = document.querySelector(".btn-card .btn");
let titlOfCards = document.querySelector(".btn-card .btn .text");
let active = true;
// console.log(titlOfCards.textContent = "Sign In");
btnForChangeSlide.addEventListener('click',()=>{
    if(!active){
        sliderPart.classList.add("active");
        titlOfCards.textContent = "Sign Up";
        active = true;
        // console.log(active);
    }else{

        sliderPart.classList.remove("active");
        titlOfCards.textContent = "Sign In";
        active = false;
        console.log(active);
    }
})
const signUpBtn = document.querySelector(".signUp");
const signInBtn = document.querySelector(".signIn");

signInBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let oldEmail = document.querySelector("#email-login");
    let oldPassword = document.querySelector("#password-login");
    let newEmail = sessionStorage.getItem("email");
    let newPassword = sessionStorage.getItem("password"); 
    console.log(newEmail + newPassword);
    if(oldEmail.value === newEmail && oldPassword.value === newPassword){
        location.href = "home.html";
        oldEmail.value = "";
        oldPassword.value = "";
    }else{
        alert("invalid information");   
        oldEmail.value = "";
        oldPassword.value = "";
    }
})

signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let firstName = document.querySelector("#firstname");
    let lastName = document.querySelector("#lastname");
    let email = document.querySelector("#email-register");
    let password = document.querySelector("#password-register");
    let cPassword = document.querySelector("#cpassword");

    if(password.value === cPassword.value){
        sessionStorage.setItem("email",email.value);
        sessionStorage.setItem("password",password.value);
        sessionStorage.setItem("firstname",firstName.value);
        sessionStorage.setItem("lastname",lastName.value);
        sliderPart.classList.add("active");
        titlOfCards.textContent = "Sign Up";
        active = true;
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        cPassword.value = "";
    }else{
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        cPassword.value = "";
        alert("Password does't match");
    }
    
})

