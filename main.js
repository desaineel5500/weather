function GetInfo() {
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--" + newName.value + "--";
  
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=8be148478365bad280e02984464e4867')
    .then(response => response.json())
    .then(data => {
  
      // Getting the min and max values for each day
      for (i = 0; i < 7; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
      }
  
      for (i = 0; i < 7; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
      }
  
      // Commented out the part that changes weather icons
      // for (i = 0; i < 7; i++) {
      //   document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
      //     data.list[i].weather[0].icon +
      //     ".png";
      // }
    })
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Connection"))
  }
  
  function DefaultScreen() {
    document.getElementById("cityInput").defaultValue = "London";
    GetInfo();
  }
  
  var d = new Date();
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  function CheckDay(day) {
    if (day + d.getDay() > 6) {
      return day + d.getDay() - 7;
    } else {
      return day + d.getDay();
    }
  }
  
  // Setting the days of the week text
  for (i = 0; i < 7; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
  }
  
  