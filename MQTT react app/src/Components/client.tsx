import * as Paho from "paho-mqtt";

const hostname = "1234";
const websocketport = "9999";
const clientId = "Dan";
const client = new Paho.Client("hostname", websocketport, clientId);

client.connect({
  userName: "user",
  password: "passwd",
  onSuccess() {
    console.log("Connection established");
    client.subscribe("topic/test");
    message = new Paho.Message("Hello testing 1 2 3");
    message.destinationName = "topic/test";
    client.send(message);
  },
  onFailure(error) {
    console.error(error);
  },
});

client.onConnectionLost = (responseObject) => {
  if (responseObject.errorCode !== 0) {
    console.error("onConnectionLost:" + responseObject.errorMessage);
  }
};

client.onMessageArrived = (message) => {
  console.log("onMessageArrived:" + message.payloadString);
};
