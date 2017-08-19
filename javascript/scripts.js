AOS.init();

$(window).scroll(function() {
	if($(this).scrollTop() !== 0) {
		$('#scroll-top').fadeIn();	
	} else {
		$('#scroll-top').fadeOut();
	}
});

$('#scroll-top').click(function() {
	$('html, body').animate({ scrollTop:0 } , 1500);
	});
