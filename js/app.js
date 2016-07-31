  /*city,country serachbox*/
  $(document).ready(function () {
    var search = $('#input').searchMeme({ onSearch: function (searchText) {
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

  /*anugular app*/
  var app = angular.module("Weather", [])
  /*Controller*/
  .controller('weatherCtrl', ['$scope', '$http', function($scope, $http ) {
    setTimeout(function () {
      $http.get("http://ip-api.com/json")
      .then(function(response) {
        currentLocationInfo=response.data;
        console.log(currentLocationInfo);
        currentLatitude = currentLocationInfo.lat;
        currentLongitude = currentLocationInfo.lon;

        $http.get("http://api.geonames.org/timezoneJSON?lat="+currentLatitude+"&lng="+currentLongitude+"&username=kararha")
        .then(function(response) {
            var dateAndTime = response.data.time;
          $scope.currentTime = dateAndTime.slice(10,16);
          country = response.data.countryName;
          console.log(response.data);

          $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+currentLocationInfo.regionName+"&mode=json&appid=56c89ec82c5dc251f6c37dc7d752e0d8&units=metric")
          .then(function(response) {
            console.log(response.data);
            $scope.content = response.data;
            $scope.weatherIcon = $scope.content.list[0].weather[0].icon;
            var roundedTemperature_currentloc= Math.round($scope.content.list[0].main.temp);
            console.log(roundedTemperature_currentloc)
            $scope.finalTempView= roundedTemperature_currentloc+"°C";   
            $scope.windSpeed= $scope.content.list[0].wind.speed+" m/s";
            $scope.humidity= $scope.content.list[0].main.humidity+"%";
            $scope.pressure= $scope.content.list[0].main.pressure+" hpa";
            $scope.tempMax = Math.round($scope.content.list[0].main.temp_max);
            $scope.maxTemp= $scope.tempMax+"°C";
            $scope.tempMin= Math.round($scope.content.list[0].main.temp_min);
            $scope.minTemp= $scope.tempMin+"°C";
            $scope.weatherDescription= $scope.content.list[0].weather[0].description;
            //3 hour interval weather forecast
            for(var j=0;j<8;j++){
              switch(j){
                case 1:
                $scope.roundedTemp3hour_currentloc_first = Math.round(response.data.list[1].main.temp);
                $scope.finalTemperature_first= $scope.roundedTemp3hour_currentloc_first+"°C";
                $scope.descriptionWeather= $scope.content.list[1].weather[0].description;
                dateTime = $scope.content.list[1].dt_txt;
                $scope.Time_3hr = "At "+dateTime.slice(10,16);
                $scope.weatherIcon = response.data.list[1].weather[0].icon;
                document.getElementById('3hr_firstTime').innerHTML =$scope.Time_3hr;
                document.getElementById('3hr_firstWDescription').innerHTML =$scope.descriptionWeather;
                document.getElementById('3hr_firstWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
                 break;
                case 2:
                $scope.roundedTemp3hour_currentloc_second = Math.round(response.data.list[2].main.temp);
                $scope.finalTemperature_second= $scope.roundedTemp3hour_currentloc_second+"°C";
                $scope.descriptionWeather= $scope.content.list[2].weather[0].description;
                $scope.weatherIcon = response.data.list[2].weather[0].icon;
                dateTime = $scope.content.list[2].dt_txt;
                $scope.Time_3hr = "At "+dateTime.slice(10,16);
                document.getElementById('3hr_secondTime').innerHTML =$scope.Time_3hr;
                document.getElementById('3hr_secondWDescription').innerHTML =$scope.descriptionWeather;
                document.getElementById('3hr_secondWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
                break;
                case 3:
                $scope.roundedTemp3hour_currentloc_third = Math.round(response.data.list[3].main.temp);
                $scope.finalTemperature_third= $scope.roundedTemp3hour_currentloc_third+"°C";
                $scope.descriptionWeather= $scope.content.list[3].weather[0].description;
                $scope.weatherIcon = $scope.content.list[3].weather[0].icon;
                dateTime = $scope.content.list[3].dt_txt;
                $scope.Time_3hr = "At "+dateTime.slice(10,16);
                document.getElementById('3hr_thirdTime').innerHTML =$scope.Time_3hr;
                document.getElementById('3hr_thirdWDescription').innerHTML =$scope.descriptionWeather;
                document.getElementById('3hr_thirdWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
                break;
                case 4:
                $scope.roundedTemp3hour_currentloc_fourth = Math.round(response.data.list[4].main.temp);
                $scope.finalTemperature_fourth= $scope.roundedTemp3hour_currentloc_fourth+"°C";
                $scope.descriptionWeather= $scope.content.list[4].weather[0].description;
                $scope.weatherIcon = response.data.list[4].weather[0].icon;
                dateTime = $scope.content.list[4].dt_txt;
                $scope.Time_3hr = "At "+dateTime.slice(10,16);
                document.getElementById('3hr_fourthTime').innerHTML =$scope.Time_3hr;
                document.getElementById('3hr_fourthWDescription').innerHTML =$scope.descriptionWeather;
                document.getElementById('3hr_fourthWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
                break;
                case 5:
                $scope.roundedTemp3hour_currentloc_fifth = Math.round(response.data.list[5].main.temp);
                $scope.finalTemperature_fifth= $scope.roundedTemp3hour_currentloc_fifth+"°C";
                $scope.descriptionWeather= $scope.content.list[5].weather[0].description;
                $scope.weatherIcon = response.data.list[5].weather[0].icon;
                dateTime = $scope.content.list[5].dt_txt;
                $scope.Time_3hr = "At "+dateTime.slice(10,16);
                document.getElementById('3hr_fifthTime').innerHTML =$scope.Time_3hr;
                document.getElementById('3hr_fifthWDescription').innerHTML =$scope.descriptionWeather;
                document.getElementById('3hr_fifthWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
                 break;
            }
            $scope.fahrenheit = function() {
              $scope.fahrenheitCoverter=roundedTemperature_currentloc*(9/5)+32;
              $scope.fahrenheitCoverter_maxTemp=$scope.tempMax*(9/5)+32;
              $scope.fahrenheitCoverter_minTemp=$scope.tempMin*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_first=$scope.roundedTemp3hour_currentloc_first*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_second=$scope.roundedTemp3hour_currentloc_second*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_third=$scope.roundedTemp3hour_currentloc_third*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_fourth=$scope.roundedTemp3hour_currentloc_fourth*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_fifth=$scope.roundedTemp3hour_currentloc_fifth*(9/5)+32;
              $scope.finalTempView= Math.round($scope.fahrenheitCoverter)+"°F";
              $scope.finalTemperature_first= Math.round($scope.fahrenheitCoverter_3hr_first)+"°F";
              $scope.finalTemperature_second= Math.round($scope.fahrenheitCoverter_3hr_second)+"°F";
              $scope.finalTemperature_third= Math.round($scope.fahrenheitCoverter_3hr_third)+"°F";
              $scope.finalTemperature_fourth= Math.round($scope.fahrenheitCoverter_3hr_fourth)+"°F";
              $scope.finalTemperature_fifth= Math.round($scope.fahrenheitCoverter_3hr_fifth)+"°F";
              $scope.maxTemp=Math.round($scope.fahrenheitCoverter_maxTemp) + "°F"; 
              $scope.minTemp=Math.round($scope.fahrenheitCoverter_minTemp) + "°F"; 
            }
            $scope.celsius = function() {
              $scope.celsiusConverter=($scope.fahrenheitCoverter-32)*(5/9);
              $scope.celsiusConverter_maxTemp=($scope.fahrenheitCoverter_maxTemp-32)*(5/9);
              $scope.celsiusConverter_minTemp=($scope.fahrenheitCoverter_minTemp-32)*(5/9);
              $scope.celsiusConverter_3hr_first=($scope.fahrenheitCoverter_3hr_first-32)*(5/9);
              $scope.celsiusConverter_3hr_second=($scope.fahrenheitCoverter_3hr_second-32)*(5/9);
              $scope.celsiusConverter_3hr_third=($scope.fahrenheitCoverter_3hr_third-32)*(5/9);
              $scope.celsiusConverter_3hr_fourth=($scope.fahrenheitCoverter_3hr_fourth-32)*(5/9);
              $scope.celsiusConverter_3hr_fifth=($scope.fahrenheitCoverter_3hr_fifth-32)*(5/9);
              $scope.finalTempView= Math.round($scope.celsiusConverter)+"°C";
              $scope.finalTemperature_first= Math.round($scope.celsiusConverter_3hr_first)+"°C";
              $scope.finalTemperature_second= Math.round($scope.celsiusConverter_3hr_second)+"°C";
              $scope.finalTemperature_third= Math.round($scope.celsiusConverter_3hr_third)+"°C";
              $scope.finalTemperature_fourth= Math.round($scope.celsiusConverter_3hr_fourth)+"°C";
              $scope.finalTemperature_fifth= Math.round($scope.celsiusConverter_3hr_fifth)+"°C";
              $scope.maxTemp=Math.round($scope.celsiusConverter_maxTemp) + "°C"; 
              $scope.minTemp=Math.round($scope.celsiusConverter_minTemp) + "°C";
            }
          } 
          //for different background at different weather     
          switch($scope.content.list[0].weather[0].main){
            case "Rain":
              $('#body').css('background-image', 'url(rain.jpg)');
              $('#body').css('background-size', 'auto auto');
              break;
            case "Clear":
              $('#body').css('background-image', 'url(clear.jpg)');
              $('#body').css('background-size', 'auto auto');
              break;
            case "Clouds":
              $('#body').css('background-image', 'url(clouds.png)');
              $('#body').css('background-size', 'auto auto');
              break;
              }
        current_weather_icon.style.visibility = 'visible';
        $('#body').animateCss('flipInX');
        $('#animate').animateCss('fadeInRightBig');
        document.getElementById('weatherIcon_current').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
    /* $scope.url1 = "http://localtimes.info/clock.php?country="+country+"&city="+ct+"&cp1_Hex=000000&cp2_Hex=FFFFFF&cp3_Hex=000000&fwdt=200&ham=0&hbg=0&hfg=0&sid=0&mon=0&wek=0&wkf=0&sep=0&widget_number=2000";
    var container = document.getElementById("script");
var content = document.createElement("script");
content.src = $scope.url1;
container.appendChild(content);*/

    //document.getElementById("script").innerHTML
        }, function(response) {
          $scope.content = "OOPS Something went wrong";
        });
      }, function(response) {
        $scope.content = "OOPS Something went wrong";
      });
    }, function(response) {
      $scope.content = " OOPS Something went wrong";
    });
  }, 0);
  var current_weather_icon = document.getElementById('weatherIcon_current'); //identifying current weather icon in the html
  current_weather_icon.style.visibility = 'hidden';

//finding weatherforecasts for different locations

  $(".watchInput").on("change keydown",function(){
    setTimeout(function () {
    var cityName=$scope.city;
    if(cityName!==undefined){
      $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&mode=json&appid=56c89ec82c5dc251f6c37dc7d752e0d8&units=metric")
      .then(function(response) {
        $scope.weatherIcon = response.data.list[0].weather[0].icon;
        var roundedTemperature_searchedLoc = Math.round(response.data.list[0].main.temp);
        console.log(roundedTemperature_searchedLoc)
        $scope.finalTempView= roundedTemperature_searchedLoc+"°C";
        $scope.content = response.data;
        $scope.windSpeed= $scope.content.list[0].wind.speed+" m/s";
        $scope.humidity= $scope.content.list[0].main.humidity+"%";
        $scope.pressure= $scope.content.list[0].main.pressure+" hpa";
        $scope.tempMax = Math.round($scope.content.list[0].main.temp_max);
        $scope.maxTemp= $scope.tempMax+"°C";
        $scope.tempMin= Math.round($scope.content.list[0].main.temp_min);
        $scope.minTemp= $scope.tempMin+"°C";
        $scope.weatherDescription= $scope.content.list[0].weather[0].description;
        var latitude = $scope.content.city.coord.lat;
        var longitude = $scope.content.city.coord.lon;
        $http.get("http://api.geonames.org/timezoneJSON?lat="+latitude+"&lng="+longitude+"&username=kararha")
        .then(function(response) {
          dateAndTime = response.data.time;
          $scope.currentTime = dateAndTime.slice(10,16);
          console.log(response.data);     
        }, function(response) {
          $scope.content = "OOPS Something went wrong";
        });
        for(var i=0;i<8;i++){
          switch(i){
            case 1:
              $scope.roundedTemp3hour_first = Math.round(response.data.list[1].main.temp);
              $scope.finalTemperature_first= $scope.roundedTemp3hour_first+"°C";
              $scope.descriptionWeather= response.data.list[1].weather[0].description;
              $scope.weatherIcon = response.data.list[1].weather[0].icon;
              dateTime = $scope.content.list[1].dt_txt;
              $scope.Time_3hr = "At "+dateTime.slice(10,16);
              document.getElementById('3hr_firstTime').innerHTML =$scope.Time_3hr;
              document.getElementById('3hr_firstWDescription').innerHTML =$scope.descriptionWeather;
              document.getElementById('3hr_firstWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
              break;
            case 2:
              $scope.roundedTemp3hour_second = Math.round(response.data.list[2].main.temp);
              $scope.finalTemperature_second= $scope.roundedTemp3hour_second+"°C";
              $scope.descriptionWeather= response.data.list[2].weather[0].description;
              $scope.weatherIcon = response.data.list[2].weather[0].icon;
              dateTime = $scope.content.list[2].dt_txt;
              $scope.Time_3hr = "At "+dateTime.slice(10,16);
              document.getElementById('3hr_secondTime').innerHTML =$scope.Time_3hr;
              document.getElementById('3hr_secondWDescription').innerHTML =$scope.descriptionWeather;
              document.getElementById('3hr_secondWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
              break;
            case 3:
              $scope.roundedTemp3hour_third = Math.round(response.data.list[3].main.temp);
              $scope.finalTemperature_third= $scope.roundedTemp3hour_third+"°C";
              $scope.descriptionWeather= response.data.list[3].weather[0].description;
              $scope.weatherIcon = response.data.list[3].weather[0].icon;
              dateTime = $scope.content.list[3].dt_txt;
              $scope.Time_3hr = "At "+dateTime.slice(10,16);
              document.getElementById('3hr_thirdTime').innerHTML =$scope.Time_3hr;
              document.getElementById('3hr_thirdWDescription').innerHTML =$scope.descriptionWeather;
              document.getElementById('3hr_thirdWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
              break;
            case 4:
              $scope.roundedTemp3hour_fourth = Math.round(response.data.list[4].main.temp);
              $scope.finalTemperature_fourth= $scope.roundedTemp3hour_fourth+"°C";
              $scope.descriptionWeather= response.data.list[4].weather[0].description;
              $scope.weatherIcon = response.data.list[4].weather[0].icon;
              dateTime = $scope.content.list[4].dt_txt;
              $scope.Time_3hr = "At "+dateTime.slice(10,16);
              document.getElementById('3hr_fourthTime').innerHTML =$scope.Time_3hr;
              document.getElementById('3hr_fourthWDescription').innerHTML =$scope.descriptionWeather;
              document.getElementById('3hr_fourthWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
              break;
            case 5:
              $scope.roundedTemp3hour_fifth = Math.round(response.data.list[5].main.temp);
              $scope.finalTemperature_fifth= $scope.roundedTemp3hour_fifth+"°C";
              $scope.descriptionWeather= response.data.list[5].weather[0].description;
              $scope.weatherIcon = response.data.list[5].weather[0].icon;
              dateTime = $scope.content.list[5].dt_txt;
              $scope.Time_3hr = "At "+dateTime.slice(10,16);
              document.getElementById('3hr_fifthTime').innerHTML =$scope.Time_3hr;
              document.getElementById('3hr_fifthWDescription').innerHTML =$scope.descriptionWeather;
              document.getElementById('3hr_fifthWeather').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
              break;
          }
          $scope.fahrenheit_C = function() {
              $scope.fahrenheitCoverter=roundedTemperature_searchedLoc*(9/5)+32;
              $scope.fahrenheitCoverter_maxTemp=$scope.tempMax*(9/5)+32;
              $scope.fahrenheitCoverter_minTemp=$scope.tempMin*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_first=$scope.roundedTemp3hour_first*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_second=$scope.roundedTemp3hour_second*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_third=$scope.roundedTemp3hour_third*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_fourth=$scope.roundedTemp3hour_fourth*(9/5)+32;
              $scope.fahrenheitCoverter_3hr_fifth=$scope.roundedTemp3hour_fifth*(9/5)+32;
              $scope.finalTempView= Math.round($scope.fahrenheitCoverter)+"°F";
              $scope.finalTemperature_first= Math.round($scope.fahrenheitCoverter_3hr_first)+"°F";
              $scope.finalTemperature_second= Math.round($scope.fahrenheitCoverter_3hr_second)+"°F";
              $scope.finalTemperature_third= Math.round($scope.fahrenheitCoverter_3hr_third)+"°F";
              $scope.finalTemperature_fourth= Math.round($scope.fahrenheitCoverter_3hr_fourth)+"°F";
              $scope.finalTemperature_fifth= Math.round($scope.fahrenheitCoverter_3hr_fifth)+"°F";
              $scope.maxTemp=Math.round($scope.fahrenheitCoverter_maxTemp) + "°F"; 
              $scope.minTemp=Math.round($scope.fahrenheitCoverter_minTemp) + "°F"; 
            }
            $scope.celsius_C = function() {
              $scope.celsiusConverter=($scope.fahrenheitCoverter-32)*(5/9);
              $scope.celsiusConverter_3hr_first=($scope.fahrenheitCoverter_3hr_first-32)*(5/9);
              $scope.celsiusConverter_3hr_second=($scope.fahrenheitCoverter_3hr_second-32)*(5/9);
              $scope.celsiusConverter_3hr_third=($scope.fahrenheitCoverter_3hr_third-32)*(5/9);
              $scope.celsiusConverter_3hr_fourth=($scope.fahrenheitCoverter_3hr_fourth-32)*(5/9);
              $scope.celsiusConverter_3hr_fifth=($scope.fahrenheitCoverter_3hr_fifth-32)*(5/9);
              $scope.finalTempView= Math.round($scope.celsiusConverter)+"°C";
              $scope.finalTemperature_first= Math.round($scope.celsiusConverter_3hr_first)+"°C";
              $scope.finalTemperature_second= Math.round($scope.celsiusConverter_3hr_second)+"°C";
              $scope.finalTemperature_third= Math.round($scope.celsiusConverter_3hr_third)+"°C";
              $scope.finalTemperature_fourth= Math.round($scope.celsiusConverter_3hr_fourth)+"°C";
              $scope.finalTemperature_fifth= Math.round($scope.celsiusConverter_3hr_fifth)+"°C";
              $scope.maxTemp=Math.round($scope.celsiusConverter_maxTemp) + "°C"; 
              $scope.minTemp=Math.round($scope.celsiusConverter_minTemp) + "°C";
            }
      } 
      //background at different weather forecast of searched location
      switch($scope.content.list[0].weather[0].main){
        case "Rain":
          $('#body').css('background-image', 'url(rain.jpg)');
          $('#body').css('background-size', 'auto auto');
          break;
        case "Clear":
          $('#body').css('background-image', 'url(clear.jpg)');
          $('#body').css('background-size', 'auto auto');
          break;
        case "Clouds":
          $('#body').css('background-image', 'url(clouds.png)');
          $('#body').css('background-size', 'auto auto');
          break;
      }
        current_weather_icon.style.visibility = 'visible';
        $('#body').animateCss('fadeIn');
        $('#animate').animateCss('fadeInRightBig');
        document.getElementById('weatherIcon_current').src = "http://openweathermap.org/img/w/"+$scope.weatherIcon+".png";
        console.log($scope.content);
      }, function(response) {
        $scope.content = " OOPS Something went wrong";
      });
      $scope.$apply();
      }
    }, 3000);
  })
}])