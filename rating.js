angular.module('FundooDirectiveTutorial', [])
    .controller('FundooCtrl', function($scope, $window) {
		$scope.rating = 5;
		$scope.saveRatingToServer = function(rating) {
		  $window.alert('Rating selected - ' + rating);
		};
	  })
  .directive('fundooRating', function () {
    return {
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
	  scope: {
        ratingValue: '=',
		max: '=',
		readonly: '@',
		onRatingSelected: '&'
      },
      link: function (scope, elem, attrs) {
        var updateStars = function() {
			  scope.stars = [];
			  for(var i = 0; i < scope.max; i++) {
			     var det = {filled: i < scope.ratingValue};
				 scope.stars.push(det);
				//scope.stars.push({filled: i < scope.ratingValue});
       
			  }
		  };
		  
		  scope.toggle = function(index) {
			    if(scope.readonly && scope.readonly === 'true') {
 				   return;
			    }	
			   scope.ratingValue = index + 1;
			   scope.onRatingSelected({newRating: index + 1});
			};
		  
 		//updateStars();  
		scope.$watch('ratingValue', function(oldVal, newVal) {
			 if(newVal) {
			   updateStars();
			 }
		 });
      }
    }
  });
  
  
  