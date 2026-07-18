import { useState } from "react";
import axios from 'axios';
import CurrentWeather from "./components/CurrentWeather"
import ForecastList from "./components/ForecastList"
import SearchBar from "./components/SearchBar"
import WeatherHighlights from "./components/WeatherHighlights";
import SunriseSunset from "./components/SunriseSunset";
import TempChart from "./components/TempChart";

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchedCity) => {
    setCity(searchedCity);
    setLoading(true);
    setError(null);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`http://localhost:3000/api/weather?city=${searchedCity}`),
        axios.get(`http://localhost:3000/api/forecast?city=${searchedCity}`)
      ]);

      setWeatherData(weatherRes.data);
      setForecastData(forecastRes.data);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.error || "Something went wrong.");
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  console.log("THis is weahter data", weatherData);
  console.log("This is forecast data", forecastData);

  return (
    <div className="min-h-screen bg-[#0f172a]">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weatherData && forecastData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

          <div className="space-y-6">
            <CurrentWeather data={weatherData} />
            <WeatherHighlights data={weatherData} />
            <SunriseSunset data={weatherData} />
          </div>

          <div className=" -translate-y-1 lg:col-span-2 space-y-6">
            <ForecastList data={forecastData} />
            <TempChart data={forecastData} />
          </div>

        </div>
      )}
    </div>
  )
}

export default App
