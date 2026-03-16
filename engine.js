const validKey="aqpkgtxgtrr666axjop";

let logged=false;

function login(){

let key=document.getElementById("keyInput").value;

if(key===validKey){

logged=true;

document.getElementById("loginBox").classList.add("hidden");

document.getElementById("profile").classList.remove("hidden");

document.getElementById("engineBox").classList.remove("hidden");

document.getElementById("user").innerText="User: Premium";

document.getElementById("expire").innerText="Expire: 30 Days";

}else{

alert("Key không hợp lệ");

}

}

function runCode(){

if(!logged){

alert("Bạn chưa login key");

return;

}

startLoading();

}

function startLoading(){

document.getElementById("loading").classList.remove("hidden");

setTimeout(()=>{

document.getElementById("loading").classList.add("hidden");

document.getElementById("success").classList.remove("hidden");

},2000);

}

function openGame(){

window.location="freefire://";

}
