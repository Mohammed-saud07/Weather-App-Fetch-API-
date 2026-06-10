# 🌦️ Weather App

A responsive Weather Application built using HTML, CSS, JavaScript, and the OpenWeatherMap API. The application provides real-time weather information for any city, including temperature, weather conditions, humidity, and wind speed.

## 📌 Features

* Search weather by city name
* Real-time weather data using OpenWeatherMap API
* Display temperature, humidity, and wind speed
* Dynamic weather condition display
* Celsius ↔ Fahrenheit temperature conversion
* Error handling for invalid city names and network issues
* Responsive design for mobile, tablet, and desktop devices
* Clean and modern user interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* OpenWeatherMap API
* DOM Manipulation
* Responsive Web Design

## 📂 Project Structure

weather-app/

├── index.html

├── style.css

├── script.js

└── assets/

    └── icons/

## 🚀 How It Works

1. User enters a city name.
2. The application sends a request to the OpenWeatherMap API.
3. Weather data is retrieved in JSON format.
4. The application extracts:

   * Temperature
   * Weather Description
   * Humidity
   * Wind Speed
5. The information is displayed dynamically on the webpage.
6. Users can switch between Celsius and Fahrenheit units.

## 🔗 API Used

OpenWeatherMap Current Weather API

Example Request:

https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}

## ⚠️ Error Handling

The application displays appropriate error messages when:

* An invalid city name is entered
* Internet connectivity is unavailable
* API requests fail

## 📱 Responsive Design

The application is optimized for:

* Mobile Devices
* Tablets
* Desktop Screens

## 🧪 Testing

The application was tested using:

* Valid city names
* Invalid city names
* Network disconnection scenarios
* Different screen sizes and devices

## 🔮 Future Enhancements

* 5-Day Weather Forecast
* Current Location Weather
* Dark Mode
* Weather Maps
* Air Quality Index Information
* Search History

## ▶️ How to Run

1. Clone this repository.
2. Open the project in VS Code.
3. Add your OpenWeatherMap API key in `script.js`.
4. Open `index.html` using Live Server.
5. Enter a city name and view weather information.

## 👨‍💻 Author

Developed as part of a Web Development Internship Project.
