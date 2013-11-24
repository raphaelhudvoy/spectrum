Grids.controller('colorsController', ['$scope', function($scope) {
	var vm		=	{};
	$scope.vm	=	vm;
	
	vm.getColors	=	function() {
		
		return Array(100);
	}
}]);