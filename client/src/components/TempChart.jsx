import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

function TempChart({ data }) {

    const chartData = data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item) => ({
            day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
            }),
            temperature: Number(item.main.temp.toFixed(1)),
        }));

    return (
        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">
                Temperature Trend
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />

                    <XAxis
                        dataKey="day"
                        stroke="#cbd5e1"
                    />

                    <YAxis
                        stroke="#cbd5e1"
                        unit="°C"
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#f59e0b"
                        strokeWidth={4}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TempChart;