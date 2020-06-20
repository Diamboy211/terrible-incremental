var money = 10;
var gens = 0;
var cost = 10;

function update() {
	if (money <= 1e10) document.querySelector('#money').textContent = `u hev ${money.toFixed(1)}$`
}

function buy() {
	if (money >= cost) {
		money -= cost;
		gens++;
	} else {
		document.querySelector('#buy').textContent = 'stoopid u'
		setTimeout(() => {document.querySelector('#buy').textContent = 'bai a generater'}, 1000)
	}
}

function buyMax() {
	if (money >= cost) {
		let am = Math.floor(money / cost);
		let c = am * 10;
		money -= c;
		gens += am
	}
}

function gameLoop() {
	money += gens/(1000/30);
	update()
	if (money >= 1e10) {
		cost = Infinity
		gens = 10;
		document.body.innerHTML = 'Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans<br>Comic Sans Comic Sans Comic Sans Comic Sans Comic Sans '
		document.body.style.fontSize = ((Math.sin(money)+1)*64) + 'px'
		document.body.style.backgroundColor = `#00ffff`
		setTimeout(() => {document.body.style.backgroundColor = `#ff00ff`}, 10)
		setTimeout(() => {document.body.style.backgroundColor = `#ffff00`}, 20)
	}
}

setInterval(gameLoop, 30)