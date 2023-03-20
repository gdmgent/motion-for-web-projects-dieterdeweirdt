function getWeather() {
    // Get the value of the input field with id="city"
    var city = document.getElementById("city").value;
    // Your code here
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=YOUR_API_KEY";
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onload = function() {
        var data = JSON.parse(req.responseText);
        var temp = data.main.temp;
        var weather = data.weather[0].description;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("weather").innerHTML = weather;
    };
    req.send();
}

function getUserName() {
    var name = document.getElementById("name").value;
    document.getElementById("user").innerHTML = name;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}