var name;
var randomvar = 0;
var money = 100;
var coin = 0;
var randommin;
var randommax;
var price
var days = 0;
var daycount = 0;


function d20() {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";
	document.getElementById("gamemode").innerHTML = "gamemode: 20 days";
	
		setInterval(function(){
			 days += 1;
			 if (days >= 21) {
				 price = 0;
				 daycount += 0;
				 document.getElementById("game").style.display = "none";
				 document.getElementById("finalmoney").innerHTML = "money: " + money + "$";
				 document.getElementById("finalmoney").style.display = "block";
			 } else {
			 price = Math.floor((Math.random() * 10000) + 0);
			 daycount += 1;
			 }
			  document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
			  document.getElementById("day").innerHTML = "day: " + daycount;
			 }, 2000); 
}

function d50() {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";
	document.getElementById("gamemode").innerHTML = "gamemode: 50 days";
	
		setInterval(function(){
			 days += 1;
			 if (days >= 51) {
				 price = 0;
				 daycount += 0;
				 document.getElementById("game").style.display = "none";
				 document.getElementById("finalmoney").innerHTML = "money: " + money + "$";
				 	document.getElementById("finalmoney").style.display = "block";
			 } else {
			 price = Math.floor((Math.random() * 10000) + 0);
			 daycount += 1;
			 }
			  document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
			  document.getElementById("day").innerHTML = "day: " + daycount;
			 }, 2000); 
}


function d100() {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";
	document.getElementById("gamemode").innerHTML = "gamemode: 100 days";
	
		setInterval(function(){
			 days += 1;
			 if (days >= 101) {
				 price = 0;
				 daycount += 0;
				 document.getElementById("game").style.display = "none";
				 document.getElementById("finalmoney").innerHTML = "money: " + money + "$";
				 document.getElementById("finalmoney").style.display = "block";
			 } else {
			 price = Math.floor((Math.random() * 10000) + 0);
			 daycount += 1;
			 }
			  document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
			  document.getElementById("day").innerHTML = "day: " + daycount;
			 }, 2000); 
}


function dinfinite() {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";
	document.getElementById("gamemode").innerHTML = "gamemode: infinite days";
	
		setInterval(function(){
			 price = 0;
			 price = Math.floor((Math.random() * 10000) + 0);
			 daycount += 1;
			  document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
			  document.getElementById("day").innerHTML = "day: " + daycount;
			 }, 2000); 
}





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


