const request = require('request');
const forecast = require('../weather-app/util/forecast');
const geocode = require('../weather-app/util/geocode');


const search = process.argv[2];
geocode(search, (error, data)=>{

        forecast(data.latitude, data.longitude, (error, forecastdata) => {
                console.log('Error', error)
                console.log('coordinates', data)
                //console.log('Location', forecastdata.location)
                console.log('Data', forecastdata)
              });
})




 //
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

