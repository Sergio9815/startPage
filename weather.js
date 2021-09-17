// A huge thanks to https://github.com/fahadhassan1213/Weather-Teller

const key = 'CXhPk82ZAZgV0ngVUWdVBVGePc4qMGqf';

const getCity = async(city) =>
{
    const   url = 'https://dataservice.accuweather.com/locations/v1/cities/search',
            query = `?apikey=${key}&q=${city}`,
            response = await fetch(url+query),
            data = await response.json();

    return data[0];
}


const getWeather = async(id) =>
{
    const   url = 'https://dataservice.accuweather.com/currentconditions/v1/',
            query = `${id}?apikey=${key}`,
            response = await fetch(url+query),
            data = await response.json();

    return data[0];
}

// user_requested is FALSE if the function is called by the page itself
// If the user calls this function to change his/her preferred city, then user_requested is TRUE
function refreshWeather()
{
        const city = 'Panama';

        updateCity(city)
            .then(data => updateUI(data))
            .catch(err =>
            {
                refreshWeather();
            });
    
}

let updateCity = async (city) =>
{
    let cityName = await getCity(city),
        weatherDetail = await getWeather(cityName.Key);

    return{cityName,weatherDetail};
}

var temp = document.getElementById('temperature'),
    condition = document.getElementById('weather-condition'),
    city = document.getElementById('city');

const updateUI = (data) =>
{
    temp.innerHTML = data.weatherDetail.Temperature.Metric.Value + '&deg C ';
    condition.innerHTML = data.weatherDetail.WeatherText;
    city.innerHTML = '<i class="fa fa-map-marker"></i> '+data.cityName.EnglishName+', ';
}
