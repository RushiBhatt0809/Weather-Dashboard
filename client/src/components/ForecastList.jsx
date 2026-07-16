function ForecastList({ data }) {
    return (
        <div>
            <>

                {data.list[0].main.temp}<br />
                {data.list[1].main.temp}<br />
                {data.list[2].main.temp}<br />
                {data.list[3].main.temp}<br />
                {data.list[4].main.temp}<br />
            </>
        </div>
    );
}

export default ForecastList