import { WiSunrise, WiSunset } from "react-icons/wi";

function SunriseSunset({ data }) {
    const sunriseTime = data.sys.sunrise;
    const sunsetTime = data.sys.sunset;

    function correctTime(unixTime) {

        const timezoneOffset = data.timezone;

        const utc = new Date((unixTime + timezoneOffset) * 1000);

        return new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZone: "UTC",
        }).format(utc);
    }

    return (
        <div className="flex gap-4 justify-between py-2 pl-2 pr-8 lg:flex-col xl:flex-row xl:gap-4 bg-slate-800 rounded-2xl">
            <div className="flex items-center">
                <WiSunrise className="w-25 h-25 text-[#ffa700]" />
                <div>
                    <p className="text-xl font-bold">Sunrise</p>
                    <p>{correctTime(sunriseTime)}</p>
                </div>
            </div>

            <div className="flex items-center">
                <WiSunset className="w-25 h-25 text-[#fb9062]" />
                <div>
                    <p className="text-xl font-bold">Sunset</p>
                    <p>{correctTime(sunsetTime)}</p>
                </div>
            </div>
        </div>
    );
}

export default SunriseSunset;