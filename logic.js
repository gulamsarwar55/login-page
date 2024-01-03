const don = document.querySelector("#kali");
const hari = document.querySelector("#sbt");

const mail = document.querySelector(".container");

don.addEventListener("click", ()=>{

    hari.innerHTML = "Submitted";

})

mail.addEventListener('click', ()=>{
    hari.innerHTML = ""
})