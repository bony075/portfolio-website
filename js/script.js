const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact', { delay: 200, origin: 'bottom' });
// lock inspect



/**
	* Disable right-click of mouse, F12 key, and save key combinations on page
	*/
	document.addEventListener("contextmenu", function(e){
		e.preventDefault(); 
 }, false);
	document.addEventListener("keydown", function(e) {
 //document.onkeydown = function(e) { 
 // "I" key 
 if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		disabledEvent(e); 
 }
	// "J" key 
	if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
		disabledEvent(e); 
 }
	// "S" key + macOS 
	if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
		disabledEvent(e); 
 }
	// "U" key 
	if (e.ctrlKey && e.keyCode == 85) {
		disabledEvent(e); 
 }
	// "F12" key 
	if (event.keyCode == 123) {
		disabledEvent(e); 
 }
	// "C" key 
	if (e.ctrlKey && event.keyCode == 67) {
		disabledEvent(e); 
 } 
 }, false);
	function disabledEvent(e){ 
 if (e.stopPropagation){
		e.stopPropagation(); 
 } else if (window.event){
		window.event.cancelBubble = true; 
 }
	e.preventDefault();
	return false; 
 }