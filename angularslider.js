angular.module('AngularSlider', [])
  .directive('imageSlider', function () {
    return {
      restrict: 'A',
	  scope: {
        timeInterval: '=',
		myDirection: '=',
		sliderId: '='
      },
      link: function (scope, elem, attrs) {
		$('#'+scope.sliderId).plainSlider(scope.myDirection,scope.timeInterval);
      }
    }
  });
  
  
  