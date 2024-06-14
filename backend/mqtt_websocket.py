import paho.mqtt.client as mqtt
import websockets
import asyncio


class MqttWebSocketSub:

  def __init__(self, broker_address, topic):
    self.broker_address = broker_address
    self.topic = topic
    self.websocket = None

    self.client = mqtt.Client()
    self._setup_callbacks()

  async def handle_message(self, client, userdata, msg):
    topic = msg.topic
    payload = msg.payload.decode()
    print("received message on topic:", topic)
    print("Payload:", payload)

    if self.websocket:
      await self.websocket.send(payload)

    async def run(self):
      async with websockets.serve(self.handle_connection, "localhost", 8765):
        #creat mqtt client instance
        client = mqtt.client()
        client.on_message = self.handle_message

        client.connect(self.broker_address)

        async def mqtt_loop():
          while True:
            await asyncio.sleep(1)
            client.loop_once()
        asyncio.ensure_future(mqtt_loop())

        await asyncio.future()


  async def handle_connection(self, websocket, path):
    self.websocket = websocket 
    #handle message from frontend
    async for message in websocket:
      print("received message from frontend:", message)

    client.disconnect()
    self.websocket = None
    print("disconnected")

if __name__ == "__main__":    
  broker_address = "localhost"
  topic = "test"
  client = MqttWebSocketSub(broker_address, topic)
  asyncio.run(client.run())
