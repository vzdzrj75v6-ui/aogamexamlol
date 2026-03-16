const validKey="ENGINE-2026";

function login(){

let key=document.getElementById("keyInput").value;

if(key===validKey){

startLoading();

}else{

alert("Key không hợp lệ");

}

}

function startLoading(){

document.getElementById("loading").classList.remove("hidden");

setTimeout(()=>{

document.getElementById("loading").classList.add("hidden");

document.getElementById("done").classList.remove("hidden");

showProfile();

},2000);

}

function showProfile(){

document.getElementById("profile").classList.remove("hidden");

document.getElementById("user").innerText="User: Premium";

document.getElementById("expire").innerText="Key Expire: 30 Days";

}

function openGame(){

window.location="freefire://";

}
