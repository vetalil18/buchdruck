var open = document.querySelector('.mainNav__open');
var close = document.querySelector('.mainNav__close')
var menu = document.querySelector('.mainMenu');

open.addEventListener('click', function(e) {
	e.preventDefault();
	menu.style.display = 'block';
	open.style.display = 'none';
});

close.addEventListener('click', function(e) {
	e.preventDefault();
	menu.style.display = 'none';
	open.style.display = 'block';
});