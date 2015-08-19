var sap = angular.module('myApp', []);

sap.controller('SapCtrl', function($scope, $location, $window) {

	$scope.palindrome = {}
	$scope.isPalindrome = function () {
		
		
		//Just to check if the word is empty
		if ($scope.word) {
			var newWord = "";
			for (i = $scope.word.length; i > 0; i--) {
				newWord += $scope.word.charAt(i-1);
			}
			
			if (newWord == $scope.word) {
				$scope.palindrome.result = "Congratulations, this is a palindrome!";
			} else {
				$scope.palindrome.result = "Nope :(";
			}
		}
	}

});