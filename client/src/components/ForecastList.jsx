import Forecast from "./Forecast";

function ForecastList({ data }) {
    const date = new Date(data.list[0].dt_txt);
    const time = date.toLocaleTimeString("en-IN", {
        timeStyle: "short"
    });
    console.log(time);


    function dateTime(fullTime) {
        const date = new Date(fullTime);
        const weekday = date.toLocaleDateString('en-IN', {
            weekday: "short",
        });
        const time = date.toLocaleTimeString('en-IN', {
            timeStyle: "short",
        });

        return { weekday, time }
    }

    const a = [8, 16, 24, 30, 38];
    const mapping = a.map(x => {
        const { weekday, time } = dateTime(data.list[x].dt_txt);
        return (

            <Forecast
                key={data.list[x].dt}
                Weekday={weekday}
                iconUrl={`https://openweathermap.org/img/wn/${data.list[x].weather[0].icon}@2x.png`}
                description={data.list[x].weather[0].description}
                temp={data.list[x].main.temp.toFixed(1)}
                Time={time}
            />
        )
    });


    return (
        <div className="bg-slate-800 rounded-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-4 shadow-xl hover:-translate-y-1 hover:scale-100 transition" >
            {mapping}
        </div>
    );
}

export default ForecastList;