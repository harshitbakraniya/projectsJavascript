const email = sessionStorage.getItem("email");
const username = `${sessionStorage.getItem("firstname")} ${sessionStorage.getItem("lastname")}`;

if(!email){
    window.location.href = "index.html";
}

document.querySelector(".title").textContent = `Welcome ${username}`;
document.querySelector(".logout").addEventListener("click",()=>{
    sessionStorage.clear();
    window.location.href = "index.html";
})  