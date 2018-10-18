//Weather Widget
// Docs at http://simpleweatherjs.com


$(document).ready(function() {

      getWeather(); //calls initial weather function
      setInterval(getWeather, 600000); //Updates the weather every 10 minutes

});

    //Writes function into the Weather Div
    function getWeather() {
  $.simpleWeather({
    location: 'Wollongong, NSW',
    woeid: '91695064',
    unit: 'C',
    success: function(weather) {

      //City

      html = '<h1>Wollongong, NSW</h1>';
      html += '<div id\="currentTemp"><span>' + weather.temp + '&deg;</span>';
      //Current conditions text e.g. 'Mostly Sunny' and high and low
      html += '<p class="currentWeatherConditions">' + weather.currently + ' ' + weather.low + '&deg; / ' + weather.high + '&deg; </p></div>';
      html += '<div id\="conditionsThumbnail"><img src="' + weather.image + '" align="middle" alt=""> </div><div class="clear"></div>';
      //4 Day Forecast
      html += '<div class="forecastTable"><table>';
      //Row with days of the week (Tomorrow, the next day and the day after and the day after that)
      html += '<tr><td class="weatherDay">' + weather.forecast[1].day + '</td>' + '<td class="weatherDay">'  + weather.forecast[2].day + '</td><td class="weatherDay">' + weather.forecast[3].day + '</td>' + '<td class="weatherDay">' + weather.forecast[4].day + '</td></tr>';
      //Row with the conditions image thumbnails
      html += '<tr><td><img src\="' + weather.forecast[1].thumbnail + '"></td>';
      html += '<td><img src\="' + weather.forecast[2].thumbnail + '"></td>';
      html += '<td><img src\="' + weather.forecast[3].thumbnail + '"></td>';
      html += '<td><img src\="' + weather.forecast[4].thumbnail + '"></td>';

      html += '</tr>';
      //High and low for 3 day forecast
      html += '<tr>';
      html += '<td>' + weather.forecast[1].low + '&deg; / ' + weather.forecast[1].high  + '&deg;' + '</td>';
      html += '<td>' + weather.forecast[2].low + '&deg; / ' + weather.forecast[2].high  + '&deg;' + '</td>';
      html += '<td>' + weather.forecast[3].low + '&deg; / ' + weather.forecast[3].high  + '&deg;' + '</td>';
      html += '<td>' + weather.forecast[4].low + '&deg; / ' + weather.forecast[4].high  + '&deg;' + '</td>';
      html += '</tr>';
      //End table
      html += '</table></div><div class=\"clear"></div>';
      //Last updated
        html += '<p><span class="updated">Updated: ' + weather.updated + '</span></p>';
        //Link to BOM website
        html += '<p id="bom"><a href="http://www.bom.gov.au/nsw/forecasts/wollongong.shtml" target="_blank">View the Bureau of Meterology website</a></p>';


      $("#weather").html(html);
    },
    //If there is an error
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

    }

