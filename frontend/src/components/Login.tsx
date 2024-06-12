import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { logIn } from "ionicons/icons";
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    await present({ message: "Loading...." });

    setTimeout(() => {
      dismiss();
      navigate("/app/dashboard");
    }, 1500);
  };

  return (
    /*     <main style={{ textAlign: "center" }}>
      <h2>Login Page</h2>
      <form onSubmit={onSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div>
            {" "}
            <label> Email:</label>
            <input type="text"></input>
          </div>
          <div>
            {" "}
            <label> Password:</label>
            <input type="password"></input>
          </div>
        </div>
        {loading ? (
          <div> loading...</div>
        ) : (
          <button type="submit">Click here</button>
        )}
      </form>
    </main> */

    <IonCard>
      <IonCardContent>
        <form onSubmit={onSubmit}>
          <IonItem>
            <IonLabel position="floating"> Email</IonLabel>
            <IonInput type="email"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating"> Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <div className="Ion-margin-top">
            <IonButton expand="full" type="submit" color="secondary">
              <IonIcon icon={logIn} slot="start" />
              Login
            </IonButton>
          </div>
        </form>
      </IonCardContent>
    </IonCard>
  );
}
export default Login;
