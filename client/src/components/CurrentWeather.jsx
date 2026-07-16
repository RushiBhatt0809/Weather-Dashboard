function CurrentWeather({ data }) {
    const now = new Date();
    // console.log(data.weather[0]);
    const formattedDate = now.toLocaleDateString('en-GB', {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

    return (
        <div className="flex flex-col h-auto w-full md:w-1/2 lg:w-1/4 shadow-xl mx-1 rounded-xl bg-linear-to-r from-amber-400 to-[#f17d10] ">
            <div className="flex w-full justify-between px-4 my-2">
                <p className="font-bold text-xl">{data.name}</p>
                <p>{formattedDate}</p>
            </div>
            <img
                className=" aspect-square w-25 h-25"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={`{main.weathr[0].description}`}
            />
            <h1 className=" text-4xl font-bold">{data.main.temp.toFixed(1)} °C</h1>
            <p className="text-lg font-bold">{data.weather[0].description}</p>
            {/* <p>{data.wind.speed}</p> */}
            {/* <p>{data.sys.sunrise}</p> */}
        </div>
    );
}

export default CurrentWeather