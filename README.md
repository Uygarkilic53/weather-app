Features
Instant Weather Lookup: Get current weather conditions for any city worldwide.
User-Friendly Basic Interface: Simple input field for city name and clear display of weather information.
Real-time Data: Fetches up-to-date weather details directly from the OpenWeatherMap API.
Single-Page Experience: All information displayed on the same page for convenience.

Technologies Used
ReactJS: Frontend library for building user interfaces.
HTML5: Structure of the web pages.
CSS3: Styling and layout.
JavaScript (ES6+): Application logic.
OpenWeatherMap API: For fetching weather data.

Installation
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm (Node Package Manager) or yarn installed on your machine.

Node.js & npm: Download Node.js (npm is included with Node.js installation).

Steps
1-Clone the repository:

```
    git clone https://github.com/uygarkilic53/weather-app.git
    cd weather-app

2- Install dependencies:

Using npm:
```

    npm install

Configure API Key:

This application requires an API key from OpenWeatherMap to fetch weather data.

Go to OpenWeatherMap and sign up for a free account.

Once signed in, navigate to the "API keys" tab in your profile to find or generate your API key.

Add your API key to the line 5 in src folder (App.js) 

Usage
After completing the installation and API key configuration steps:

1-Start the development server:

Using npm:

```
    npm run start

2- Open your browser:

The application will automatically open in your default web browser at http://localhost:3000.


3- Enter a City:

Type the name of a city into the input field and press Enter or click the "Search" button. The weather information for that city will be displayed on the page.
```

License
Distributed under the MIT License. See LICENSE for more information.
