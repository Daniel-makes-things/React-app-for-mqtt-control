import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const MqttButton = ({ topic, message }) => {
  const [client, setClient] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const brokerAddress = 'mqtt://10.0.0.17'; 
    const connect = async () => {
      try {
        const newClient = mqtt.connect(brokerAddress);
        newClient.on('connect', () => {
          setIsConnected(true);
          console.log('Connected to MQTT broker');
        });
        newClient.on('error', (err) => {
          console.error('Error connecting to MQTT broker:', err);
        });
        setClient(newClient);
      } catch (error) {
        console.error('Error establishing MQTT connection:', error);
      }
    };

    connect();

    return () => {
      if (client) {
        client.end();
      }
    };
  }, []);

  const handleClick = () => {
    if (client && isConnected) {
      client.publish(topic, message);
      console.log('Message published to MQTT topic:', topic);
    } else {
      console.log('MQTT client not connected, cannot publish message');
    }
  };

  return (
    <button onClick={handleClick} disabled={!isConnected}>
      {isConnected ? 'Publish to MQTT' : 'Connecting...'}
    </button>
  );
};

export default MqttButton;