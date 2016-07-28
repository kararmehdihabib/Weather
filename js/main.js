$(document).ready(function () {
            var search = $('input').searchMeme({ onSearch: function (searchText) {
                setTimeout(function () {
                    search.searchMeme({ searchComplete: true });
					alert(cityName);
                }, 1);
            }
            , buttonPlacement: 'left', button: 'black'
            });
		$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
        });
  var URL;
 
  var app = angular.module("Weather", [])
	
.controller('myCtrl', ['$scope', '$http', function($scope, $http ) {
	var divOne = document.getElementById('image');
     divOne.style.visibility = 'hidden';
	
    $(".watchInput").on("change keyup",function(){
	
	setTimeout(function () {
		var cityName=$scope.city;
		/*console.log(cityName);*/
	if(cityName!==undefined){
  $http.get("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=aa211f0d77a1bb42ddcdc492fa881c63&type=like&units=metric")
  .then(function(response) {
      $scope.icon = response.data.weather[0].icon;
	  $scope.temp = response.data.main.temp+"°C";
	  $scope.content = response.data;
	  divOne.style.visibility = 'visible';
	  $('#animate').animateCss('fadeIn');
	  document.getElementById('image').src = "http://openweathermap.org/img/w/"+$scope.icon+".png";
	  console.log($scope.content);
  }, function(response) {
      $scope.content = "Something went wrong";
  });
        $scope.$apply();


	}
    }, 3000);
    });

   

}])