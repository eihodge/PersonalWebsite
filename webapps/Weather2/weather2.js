openWeatherAPI_key = "64de9007d7ef805ae77090f4a2c0e809";
      openWeatherAPI_base = "https://api.openweathermap.org/data/2.5/weather?q=";
      city = "Raleigh"; // Default
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      getWeatherDefault(city);
      
      function getWeatherDefault(cityName) {    
        fetch(openWeatherAPI_base + cityName + "&appid=" + openWeatherAPI_key)
        .then((response) => response.json())
        .then((data) => setWeather(data) );
        
      }

      function getWeather(cityName) {    
        if (document.getElementById('search-bar').value == "") {
          alert("Enter a city name.");
          return;
        }

        cityName = cityName.replace(/  +/g, ' ');
        cityName = cityName.trim();
        
        if(document.getElementById('state-select').value != "") {
          fetch(openWeatherAPI_base + cityName +"," + document.getElementById("state-select").value + ",1&appid=" + openWeatherAPI_key)
          .then((response) => response.json())
          .then((data) => setWeather(data) );
        } else {
          fetch(openWeatherAPI_base + cityName + "&appid=" + openWeatherAPI_key)
          .then((response) => response.json())
          .then((data) => setWeather(data) );
        }
      }

      function setWeather(data) {
        const date = new Date();
        if (!data.name) {
          alert('Invalid city name');
          getWeather(city);
        } else {
          document.getElementById("city").innerHTML = data.name;
          document.getElementById("temperature").innerHTML = Math.round(kToF(parseFloat(data.main.temp))) + "° F";
          document.getElementById("temperature-min").innerHTML = Math.round(kToF(parseFloat(data.main.temp_min))) + "° F";
          document.getElementById("temperature-max").innerHTML = Math.round(kToF(parseFloat(data.main.temp_max))) + "° F";
          document.getElementById("temperature-feels").innerHTML = Math.round(kToF(parseFloat(data.main.feels_like))) + "° F";
          document.getElementById("weather").innerHTML = data.weather[0].main;
          document.getElementById("humidity").innerHTML = data.main.humidity + "%";
          document.getElementById("pressure").innerHTML = data.main.pressure + " hPa";
          document.getElementById("wind").innerHTML = data.wind.speed + " MPH";
          document.getElementById("date").innerHTML = days[date.getDay()] + " " + date.getDate() + " " + months[date.getMonth()];

          

          if (data.weather[0].main == "Rain" || data.weather[0].main == "Drizzle" || data.weather[0].main == "Mist" || data.weather[0].main == "Thunderstorm") {
            document.getElementById("weather-icon-img").src = "https://ethaningramh.github.io/PersonalWebsite/resources/images/weather/rain.png";
            document.getElementById("window").style.backgroundImage = "url(rain.jpeg)";
            document.getElementById("window").style.backgroundSize = "100%";
          } else if (data.weather[0].main == "Clear") {
            document.getElementById("weather-icon-img").src = "https://ethaningramh.github.io/PersonalWebsite/resources/images/weather/sunny.png";
            document.getElementById("window").style.backgroundImage = "url(clear.jpeg)";
            document.getElementById("window").style.backgroundSize = "100%";
          } else if (data.weather[0].main == "Clouds") {
            document.getElementById("weather-icon-img").src = "https://ethaningramh.github.io/PersonalWebsite/resources/images/weather/cloudy.png";
            document.getElementById("window").style.backgroundImage = "url(clouds.webp)";
            document.getElementById("window").style.backgroundSize = "100%";
          } else if (data.weather[0].main == "Snow") {
            document.getElementById("weather-icon-img").src = "https://ethaningramh.github.io/PersonalWebsite/resources/images/weather/snow.png";
            document.getElementById("window").style.backgroundImage = "url(snow.jpeg)";
            document.getElementById("window").style.backgroundSize = "100%";
          }
        }
      }

      function kToF(temp) {
        return (((temp-273.15)*9.0)/5.0)+32.0;
      }