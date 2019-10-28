
        var state =localStorage.getItem('st');
        var city = localStorage.getItem('ci');
        var lati = 0;
        var longi = 0;
        var weather;
        var temp;
        var winddeg;
        var des1;
        var body1;
        var pressure;
        const weather_url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=3edbb24a1ba7481c9260f2ecbb609ddc&units=metric';
        
        home = function(){
            
              window.location.href="index.html";
        }
        async function getWeatherData(){
            const response = await fetch(weather_url);
            const data = await response.json();
            console.log(data);
            lati  =  data.coord.lat;
            longi  =  data.coord.lon;
            weather = data.weather[0].main;
            temp = data.main.temp;
            windspeed = data.wind.speed;
            pressure = data.main.pressure;
         
            document.getElementById("cityName").innerHTML = city;
               
            document.getElementById("info1").innerHTML = "temperature: "+temp+" &#x2103";
               
            document.getElementById("info2").innerHTML = "longitude: "+longi+" &#176";
               
            document.getElementById("info3").innerHTML = "latitude: "+lati +" &#176";
               
            document.getElementById("info4").innerHTML = "wind: "+windspeed+" mph";
            document.getElementById("info5").innerHTML = "pressure: "+pressure+" Pa";
            
            
            if(weather=="Clouds"){
                //alert("cloi");
                document.getElementById("i1").src="cloud.png";
            }
            else if(weather=="Clear"){
                document.getElementById("i1").src = 'sun.png';
            }
            
                        
          initMap(lati,longi);          
        }
        
      
        function initMap(a,b) {
              // The location of Uluru
              var uluru = {lat: a, lng: b};
              // The map, centered at Uluru
              var map = new google.maps.Map(
                  document.getElementById('map'), {zoom: 4, center: uluru});
              // The marker, positioned at Uluru
              var marker = new google.maps.Marker({position: uluru, map: map});
            }

           async function getCityData(){
               if(state != "global"){
                    const response = await fetch('https://kgsearch.googleapis.com/v1/entities:search?query='+city+','+state+'&key=AIzaSyBI-9YFG1gGP6W0jx_PJuxlOUdkXsRZF8s&limit=1&indent=True');
                    const cityData = await response.json();
                    des1 = cityData.itemListElement[0].result.description;
                    body1= cityData.itemListElement[0].result.detailedDescription.articleBody;
               }
                else{
                    const response = await fetch('https://kgsearch.googleapis.com/v1/entities:search?query='+city+'&key=AIzaSyBI-9YFG1gGP6W0jx_PJuxlOUdkXsRZF8s&limit=1&indent=True');
                    const cityData = await response.json();
                    des1 = cityData.itemListElement[0].result.description;
                    body1= cityData.itemListElement[0].result.detailedDescription.articleBody;
               }

           document.getElementById("info6").innerHTML = des1;
               
            document.getElementById("info7").innerHTML = body1;
        }
        
  getWeatherData();
  getCityData();

