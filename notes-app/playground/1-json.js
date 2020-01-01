


const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');

const dataJson = dataBuffer.toString();

const data = JSON.parse(dataJson);

data.name = "Lovepreet";
data.age = 28;

fs.writeFileSync('1-json.json', JSON.stringify(data));
