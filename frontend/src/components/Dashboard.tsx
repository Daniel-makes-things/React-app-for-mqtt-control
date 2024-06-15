import {
  IonInput,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MqttDataFeeder from "./MqttDataFeeder";

function Dashboard() {
  const selectedTopic = "test";

  return (
    <div>
      <MqttDataFeeder topic={selectedTopic} />
      {/* 
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
 */}
      <Link to="/">Back to Login </Link>
    </div>
  );
}

export default Dashboard;
