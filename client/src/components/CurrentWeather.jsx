import { FiMapPin } from "react-icons/fi";

function CurrentWeather({ data }) {
    const now = new Date();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    // console.log(data.weather[0]);
    const formattedDate = now.toLocaleDateString('en-GB', {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    return (
        <div className="flex flex-col shadow-xl rounded-2xl bg-linear-to-r from-amber-400 to-[#f17d10] hover:scale-105 transition duration-300">
            <div className="flex w-full justify-between px-2 my-2">
                <div className="flex gap-1.5">
                    <FiMapPin className="w-5 h-5 translate-1" />
                    <p className="font-bold text-xl">{data.name}</p>
                </div>
                <p>{formattedDate}</p>
            </div>
            <div className="flex justify-evenly p-4">

                <img
                    className="w-30 h-30"
                    src={iconUrl}
                    alt={`{main.weathr[0].description}`}
                />
                <div>

                    <h1 className=" text-4xl font-bold">{data.main.temp.toFixed(1)} °C</h1>
                    <p className="text-md font-bold">Feels like {data.main.feels_like.toFixed(0)} °C</p>
                    <p className="text-lg font-bold pb-4">{data.weather[0].description}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather