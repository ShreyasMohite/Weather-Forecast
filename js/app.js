const getdata = (city) => {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43ee602cd3f013c1a0c2fa793155236e`;
    fetch(api).then((data) => {
        //console.log(data);
        return data.json();
    }).then((weather) => {

        let city = document.getElementById("cityname");

        //console.log(whe);
        const cityname = weather.name;
        city.innerHTML = cityname;

        let kelvin = weather.main.temp;
        let celcius = kelvin - 273.15;
        let deg = celcius.toFixed(0);

        const degree = document.getElementById("degree");
        degree.innerHTML = deg + "<sup>o</sup>C";

        let descricption = document.getElementById("description");
        let desc = weather.weather[0].description;
        descricption.innerHTML = desc;

        let icons = document.getElementById("icon");

        if (desc == "haze") {
            icons.setAttribute("class", "fas fa-cloud-sun fa-5x");

        }
        if (desc == "smoke") {

            icons.setAttribute("class", "fas fa-smog fa-5x");
        }
        if (desc == "clear sky") {

            icons.setAttribute("class", "fas fa-sun fa-5x");
        }
        if (desc == "overcast clouds") {
            icons.setAttribute("class", "fas fa-cloud fa-5x");

        }
        if (desc == "broken clouds") {
            icons.setAttribute("class", "fas fa-cloud-sun fa-5x");
        }
        if (desc == "few clouds") {
            icons.setAttribute("class", "fas fa-cloud fa-5x");
        }
        if (desc == "light rain" | desc == "moderate rain" | desc == "heavy intensity rain" |
            desc == "very heavy rain" | desc == "extreme rain") {
            icons.setAttribute("class", "fas fa-cloud-rain fa-5x");
        }

        if (desc == "fog") {
            icons.setAttribute("class", "fas fa-smog fa-5x");
        }
        if (desc == "scattered clouds") {
            icons.setAttribute("class", "fas fa-cloud fa-5x");
        }
        if (desc == "thunderstorm" | desc == "thunderstorm") {
            //<i class="fas fa-poo-storm"></i>
            icons.setAttribute("class", "fas fa-poo-storm fa-5x");
        }
        if (desc == "mist" | desc == "sand/ dust whirls" | desc == "dust" |
            desc == "sand" | desc == "volcanic ash" | desc == "squalls" |
            desc == "tornado") {
            icons.setAttribute("class", "fas fa-wind fa-5x");
        }
        if (desc == "light snow" | desc == "Snow" | desc == "Heavy snow" | desc == "Sleet" |
            desc == "Light shower sleet" | desc == "Shower sleet" | desc == "Light rain and snow" |
            desc == "Rain and snow" | desc == "Light shower snow" | desc == "Shower snow" |
            desc == "Heavy shower snow" | desc == "freezing rain") {

            icons.setAttribute("class", "fas fa-snowflake fa-5x");

        }


    }).catch((error) => {
        console.log(error);
    })
}

//getdata("mumbai");

const getweather = () => {
    let search = document.getElementById("search").value;
    getdata(search);
}