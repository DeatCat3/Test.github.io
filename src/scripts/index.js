var On = document.getElementById('darkthemeOn');
var body = document.getElementById('body')
On.addEventListener('click', func);
var Off = document.getElementById('darkthemeOff')
Off.addEventListener('click', func1)
function func() {
	body.style.background = 'black'
	body.style.color = 'green'
}
function func1(){
	body.style.backgroundColor = 'white'
	body.style.color = 'black'
}