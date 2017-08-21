AOS.init();

$('#scroll-top').click(function() {
	$('html, body').animate({scrollTop:0 
	}, 1500);
});

$('#About1').click(function() {
	$('html, body').animate({
		scrollTop: $('#About2').offset().top},
		1500);
});

$('#Project1').click(function() {
	$('html, body').animate({
		scrollTop: $('#Project2').offset().top},
		2000);
});

$('#Contact1').click(function() {
	$('html, body').animate({
		scrollTop: $('#Contact2').offset().top},
		2500);
});
