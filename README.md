# 🌤️ Weather Dashboard

A full-stack weather dashboard built with **React**, **Node.js**, and the **OpenWeather API**. Search any city to view current weather conditions and a 5-day forecast.

---

## Features

- 🔍 **Search Cities** — look up weather for any city worldwide
- 🌡️ **Current Weather** — temperature, condition, humidity, wind speed, and icon
- 📅 **5-Day Forecast** — daily breakdown of upcoming weather
- ⚠️ **Error Handling** — graceful messages for invalid cities or network issues

---

## Tech Stack

| Layer      | Technology              |
|------------|--------------------------|
| Frontend   | React (Vite)             |
| Backend    | Node.js + Express        |
| API        | OpenWeather API          |
| HTTP Client| Axios                    |


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- A free [OpenWeather API key](https://openweathermap.org/api)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
OPENWEATHER_API_KEY=your_actual_api_key_here
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

The server will run at `http://localhost:3000`.

### 3. Set up the frontend

```bash
cd ../client
npm install
npm run dev
```

The React app will run at `http://localhost:5173` (default Vite port).

---

## License

This project is open source and available under the [MIT License](LICENSE).