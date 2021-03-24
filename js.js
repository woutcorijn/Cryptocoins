var name;
var randomvar = 0;
var money = 100;
var coin = 0;
var randommin;
var randommax;
var price
var days = 0;

if (localStorage.HighScoreString) {
	 document.getElementById("HighScore").innerHTML = "High score: " + localStorage.HighScoreString;
} else {
	 localStorage.HighScoreString = 0;
	 localStorage.HighScore = 0;
	 document.getElementById("HighScore").innerHTML = "High score: " + localStorage.HighScoreString;
}

function GameLoop(Time) {
	document.getElementById("money").innerHTML = "money: " + money + "$";
    name = document.getElementById("coinNameinp").value;
    document.getElementById("coinname").innerHTML = name + "coin";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
	document.getElementById("game").style.display = "block";
	document.getElementById("setup").style.display = "none";

	if(Time == Infinity) {
	document.getElementById("gamemode").innerHTML = "gamemode: infinite days";
} else {
	document.getElementById("gamemode").innerHTML = "gamemode: " + Time + " days";
}

		setInterval(function(){
			 if (days == Time) {
				 price = 0;
				 document.getElementById("game").style.display = "none";
				 document.getElementById("finalmoney").innerHTML = "money: " + money + "$";
				 document.getElementById("finalmoney").style.display = "block";
				 if(money > localStorage.HighScore) {
					  localStorage.HighScore = money;
				    localStorage.HighScoreString = money + "$ - " + Time + " Days";
				    document.getElementById("HighScore").innerHTML = "High score: " + localStorage.HighScoreString;
				}
			 } else {
			 days++;
			 price = Math.floor((Math.random() * 10000) + 0);
			 }
			  document.getElementById("value").innerHTML = "1 " + name + "coin = " + price + "$";
			  document.getElementById("day").innerHTML = "day: " +  days;
			}, 2000);
}

function buy() {
	if (money - price >= -15000) {
	money -= price;
	coin += 1;
	}
	document.getElementById("money").innerHTML = "money: " + money + "$";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
}

function sell() {
	if (coin > 0) {
	money += price;
	coin -= 1;
	}
	document.getElementById("money").innerHTML = "money: " + money + "$";
	document.getElementById("coin").innerHTML = name + "coins: " + coin;
}
