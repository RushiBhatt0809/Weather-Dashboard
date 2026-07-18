import { WiHumidity } from "react-icons/wi";
import { MdOutlineAir, MdOutlineTireRepair } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import HighlightCard from "./HighlightCard";

function WeatherHighlights({ data }) {
    const wind = <MdOutlineAir className="w-6 h-6" />;
    const visible = <FaRegEye className="w-6 h-6" />;
    const humid = <WiHumidity className="w-6 h-6" />;
    const pressure = <MdOutlineTireRepair className="w-6 h-6" />;

    return (
        <div className="bg-[#1e293b] rounded-2xl p-4">
            <h1 className="text-xl font-bold p-2">Today's Highlight</h1>

            <div className="grid grid-cols-2 ">
                <HighlightCard title={"Wind"} value={`${data.wind.speed} kph`} icon={wind} />
                <HighlightCard title={"Humiidity"} value={`${data.main.humidity} %`} icon={humid} />
                <HighlightCard title={"Visibility"} value={`${data.visibility / 1000} km`} icon={visible} />
                <HighlightCard title={"Pressure"} value={`${data.main.pressure} hPa`} icon={pressure} />

            </div>
        </div>
    );
}

export default WeatherHighlights;