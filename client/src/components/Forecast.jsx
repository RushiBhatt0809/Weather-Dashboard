function Forecast({ Weekday, iconUrl, description, temp, Time }) {

    return (
        <div className="flex flex-col p-4 items-center hover:scale-105 transition rounded-xl">
            <p className="">{Weekday}, {Time}</p>
            <img className="w-25 h-25"
                src={iconUrl} alt={description} />
            <h1 className="text-2xl font-bold">{temp} °C</h1>
            <p>{description}</p>

        </div>
    );
}


export default Forecast;