var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1fc5f6f571bc88c4f8305edd0347f827&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return {
          location: `${res.data.name}, ${res.data.sys.country}`,
          temp: Math.floor(res.data.main.temp)
        }
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
