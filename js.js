var name;
var price = 0;
var money = 100;
var coin = 0;


function nameupdate() {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";
}

setInterval(function(){ 
price = Math.floor((Math.random() * 10000) + 0);
document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
}, 2000);

function buy() {
	if (money <= -10000) {
	money = money;	
	coin =  coin;
	} else {
	money -= price;
	coin += 1;
	}
	document.getElementById("money").innerHTML = "money: " + money + "$";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
}

function sell() {
	if (coin <= 0) {
	money = money;	
	coin =  0;
	} else {
	money += price;
	coin -= 1;
	}
	document.getElementById("money").innerHTML = "money: " + money + "$";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
}