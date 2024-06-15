import { useEffect, useState } from "react";
/* import { Connector, Message, subscribe } from "react-mqtt-client"; */
import mqtt from "mqtt";

const MqttClient = mqtt.Client;

interface Data {
  name: string;
  temp: number;
}
const mqttClient = new MqttClient();

const MqttDataFeeder = ({ topic }: { topic: string }) => {
  const [dataToDisplay, setDataToDisplay] = useState<Data>({
    name: "",
    temp: 0,
  });

  const options = {
    broker: "mqtt// 24.203.236.176",
    clientID: "testClient",
  };
  const handleIncomingMessage = (topic: string, message: string) => {
    const parsedData = JSON.parse(message);

    if (!isValidData(parsedData)) {
      console.error("wrong data type");
      return;
    }

    setDataToDisplay(parsedData);
  };

  const isValidData = (data: any): data is Data => {
    return typeof data.name === "string" && typeof data.temp === "number";
  };

  useEffect(() => {
    const connectAndSubscribe = async () => {
      await new Promise((resolve) => mqttClient.on("connect", resolve));

      await mqttClient.subscribe(topic);
    };

    connectAndSubscribe();

    return () => {
      mqttClient.off("message", handleIncomingMessage);
      mqttClient.end();
    };
  }, [topic]);

  return (
    <div>
      <p>Data: {dataToDisplay.name}</p>
      <p>temp: {dataToDisplay.temp}</p>
    </div>
  );
};

export default MqttDataFeeder;
