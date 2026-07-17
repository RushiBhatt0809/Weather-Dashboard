import HighlightCard from "./HighlightCard";

function WeatherHighlights({ data }) {

    return (
        <div className="bg-[#1e293b] rounded-2xl p-4">
            <h1 className="text-xl font-bold p-2">Today's Highlight</h1>

            <div className="grid grid-cols-2 ">
                <HighlightCard title={"Wind"} value={`${data.wind.speed} m/s`} />
                <HighlightCard title={"Humiidity"} value={`${data.main.humidity} %`} />
                <HighlightCard title={"Visibility"} value={`${data.visibility / 1000} km`} />
                <HighlightCard title={"Pressure"} value={`${data.main.pressure} hPa`} />

            </div>
        </div>
    );
}

export default WeatherHighlights;