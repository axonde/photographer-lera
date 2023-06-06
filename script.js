// обработчик событий кнопок

var buttons = document.querySelector('.button');

// register mobile button
var burger = buttons;
var burgerMenu = document.querySelector('.mobile__menu')
var burgerItems = burgerMenu.querySelectorAll('.mobile__menu--element');

// logic of mobile buttons
burger.addEventListener("click", function() {
	console.log("click on burger");
	burgerMenu.classList.toggle("hidden");
	burgerMenu.classList.contains("hidden") ? burger.setAttribute('style', 'position: inherit;') : burger.setAttribute('style', 'position: fixed;');
});

for (let i=0; i < burgerItems.length; i++) {
	burgerItems[i].addEventListener("click", function() {
		burgerMenu.classList.toggle("hidden");
		burgerMenu.classList.contains("hidden") ? burger.setAttribute('style', 'position: inherit;') : burger.setAttribute('style', 'position: fixed;');
	});
}