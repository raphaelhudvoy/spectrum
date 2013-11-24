Grids.controller('colorsController', ['$scope', function($scope) {
	var vm		=	{};
	$scope.vm	=	vm;
	
	vm.getColors	=	function() {
		
		var array = [];
		for (var i = 0; i < 200; i++) {
			array.push({});
		}
		return array;
	}
}]);