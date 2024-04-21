import './App.css';
import { useEffect, useState } from 'react';
import * as Paho from 'paho-mqtt';
import Card from './components/Card/Card';

function App() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const client = new Paho.Client('127.0.0.1', 9001, 'clientId');
    client.connect({
      userName: 'test',
      password: 'secret',
      onSuccess() {
        client.subscribe('sensors/temperature-humidity');
      },
    });

    client.onMessageArrived = (message) => {
      const payload = JSON.parse(message.payloadString);
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, payload];
        return newMessages.length > 10 ? newMessages.slice(1) : newMessages;
      });
    };

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {messages.map((message, index) => (
          // should use the children prop but i'm lazy rn
          <div className='px-4 pt-4'>
            <Card 
              key={index}
              timestamp={new Date(message.timestamp).toLocaleDateString()}
              temp={message.temperature.toFixed(2)}
              humidity={message.humidity.toFixed(2)}
            />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
