// $('.system').delegate('.test', 'mouseenter', function(e) {
// 	e.stopPropagation();
// 	$(this).append('<div class="system">'+
// 				   '	<div>'+
// 				   '		<div class="case-tl enable"></div>'+
// 				   '		<div class="case-tr enable"></div>'+
// 				   '		<div class="case-bl enabdample"></div>'+
// 				   '		<div class="case-br enable"></div>'+
// 				   '	</div>'+
// 				   '</div>');
// 	$(this).on('mouseleave', function () {
// 		$(this).find('.enable').addClass('test');
// 	});
// });

$('.system').delegate('.test', 'click', function(e) {
	e.stopPropagation();
	$(this).removeClass('damp');
	var color = $(this).css('background');
	$(this).append('<div class="system">'+
				   '	<div>'+
				   '		<div class="case-tl enable test"></div>'+
				   '		<div class="case-tr enable test"></div>'+
				   '		<div class="case-bl enable test"></div>'+
				   '		<div class="case-br enable test"></div>'+
				   '	</div>'+
				   '</div>');
	$(this).find('.enable', function () {
		console.log(color);
		//$(this).css('background:rgba('+color+',.03)');
	})
});

// Hover
$('.system').delegate('.test', 'mouseenter', function(e) {
	e.stopPropagation();
	$(this).addClass('damp');


	$(this).one('mouseleave', function() {
		$(this).removeClass('damp');
	} )
		//$(this).css('background:rgba('+color+',.03)');
});