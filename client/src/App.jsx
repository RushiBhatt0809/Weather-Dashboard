import CurrentWeather from "./components/CurrentWeather"
import ForecastList from "./components/ForecastList"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <div className=" flex flex-row">
      <SearchBar className=" basis-64" />
      <CurrentWeather className=" basis-64" />
      <ForecastList className=" basis-2" />
    </div>
  )
}

export default App
