let username;
let userresult;
username = prompt("お名前を教えてください。");

document.getElementById('name').innerHTML = username;
if (username == ""){
	document.getElementById('name').innerHTML = "名無し";
}
let rand = Math.floor(Math.random()*5);
//let omikujiRslt = ['大吉', '中吉', '小吉', '吉', '凶'];
//userresult = omikujiRslt[rand];

if(rand == 0){
	userresult = "大吉";
}
if(rand == 1){
	userresult = "中吉";
}
if(rand == 2){
	userresult = "小吉";
}
if(rand == 3){
	userresult = "吉";
}
if(rand == 4){
	userresult = "凶";
}

document.getElementById("result").innerHTML = userresult;