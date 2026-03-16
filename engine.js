const key="Soclodaide";

function login(){

let k=document.getElementById("key").value;

if(k===key){

document.getElementById("login").style.display="none";

document.getElementById("profile").classList.remove("hidden");

document.getElementById("engine").classList.remove("hidden");

document.getElementById("user").innerText="User: Premium";

document.getElementById("expire").innerText="Expire: 30 Days";

}else{

alert("Key Sai");

}

}

function runEngine(){

document.getElementById("loader").classList.remove("hidden");

setTimeout(()=>{

document.getElementById("loader").classList.add("hidden");

alert("Đã Xong");

},2000)

}

function openGame(){

window.location="freefire://";

}
