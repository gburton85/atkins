//angular for data to demonstrate getting data from a js file
var app = angular.module('app', []);

app.controller('ctrl', ['$scope', function($scope) {
  $scope.data = [
    14,
    31
  ];
}]);

//bounce in for data
//typing animation
$(function(){
    $(".graph h3").typed({
      strings: ["<b>Emissions fall by 20%</b> with smooth travel"],
      typeSpeed: 1
    });
    $(".bounce").effect("bounce", { times:3 }, 1500);
});
