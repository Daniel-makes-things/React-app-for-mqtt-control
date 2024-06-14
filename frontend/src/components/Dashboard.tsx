import {
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
//import MqttSubscriber from "./mqttSubscriber";

function Dashboard() {
  const [selectedTopic, setSelectedTopic] = useState("test"); //intial
  const [message, setmessage] = useState("");
  const handleMqttMessage = (message: string) => {
    console.log("received", message);
  };

  return (
    /* <div>
      <MqttSubscriber
        brokerUrl=" mqtt://10.0.0.17"
        topic="test"
        onMessage={handleMqttMessage}
      />
    </div> */
    <>
      <h2>Dashboard</h2>
      <IonList>
        <IonItem>
          <IonSelect
            label="Topic Select"
            labelPlacement="floating"
            value={selectedTopic}
            onIonChange={(event) => setSelectedTopic(event.detail.value)}
          >
            <IonSelectOption value="test">test</IonSelectOption>
            <IonSelectOption value="sensor1">sensor1</IonSelectOption>
            <IonSelectOption value="sensor2">sensor2</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
      <Link to="/">Back to Login </Link>
    </>
  );
}

export default Dashboard;
