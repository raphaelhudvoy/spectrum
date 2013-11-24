$('.system').delegate('.test', 'mouseenter', function(e) {
	e.stopPropagation();
	$(this).append('<div class="system">'+
				   '	<div>'+
				   '		<div class="case-tl test"></div>'+
				   '		<div class="case-tr test"></div>'+
				   '		<div class="case-bl test"></div>'+
				   '		<div class="case-br test"></div>'+
				   '	</div>'+
				   '</div>');
});

Grids.directive('broken', function($compile) {

	return {
		restrict : 'C',
		replace : true,
		template : '<div class="system">'+
				   '	<div>'+
				   '		<div class="case-tl" brake></div>'+
				   '		<div class="case-tr" brake></div>'+
				   '		<div class="case-bl" brake></div>'+
				   '		<div class="case-br" brake></div>'+
				   '	</div>'+
				   '</div>',
		link : function (scope, ielmt, $attrs) {
			ielmt.on('click', function () {
				$compile(iElement)(scope);
				alert('broken');
			});
		}
	}
});

Grids.directive('brake', function($compile) {

	return {
		restrict : 'A',
		terminal : true,
		link : function (scope, iElement) {
			iElement.on('click', function () {
				iElement.addClass('broken');
				$compile(iElement)(scope);
				//alert('allo');
			});  
		}

	}
});


