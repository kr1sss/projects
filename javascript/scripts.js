AOS.init({
	disable: window.innerWidth < 1024
});

$('#scroll-top').click(function() {
	$('html, body').animate({scrollTop:0 
	}, 1000);
});

$('#About1').click(function() {
	$('html, body').animate({
		scrollTop: $('#About2').offset().top},
		600);
});

$('#Project1').click(function() {
	$('html, body').animate({
		scrollTop: $('#Project2').offset().top},
		700);
});

$('#Contact1').click(function() {
	$('html, body').animate({
		scrollTop: $('#Contact2').offset().top},
		700);
});
