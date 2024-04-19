const mqtt = require("mqtt");

const brokerUrl = "";
const options = {
  username: "",
  password: "",
};

const client = mqtt.connect(brokerUrl, options);

const MIN_TEMP = 20;
const MAX_TEMP = 30;
const MIN_HUMD = 40;
const MAX_HUMD = 50;

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

client.on("connect", () => {
  setInterval(() => {
    const temperature = getRandomValue(MIN_TEMP, MAX_TEMP);
    const humidity = getRandomValue(MIN_HUMD, MAX_HUMD);
    const data = { temperature, humidity, timestamp: Date.now() };
    client.publish("sensors/temperature-humidity", JSON.stringify(data));
  }, 100);
});
