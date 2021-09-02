import React from "react";
import type { NextPage } from "next";
import { IonButton, useIonToast } from "@ionic/react";

const Home: NextPage = () => {
  const [present, dismiss] = useIonToast();

  return (
    <>
      <IonButton
        expand="block"
        onClick={() =>
          present({
            buttons: [{ text: "hide", handler: () => dismiss() }],
            message: "toast from hook, click hide to dismiss",
            onDidDismiss: () => console.log("dismissed"),
            onWillDismiss: () => console.log("will dismiss"),
          })
        }
      >
        Show Toast
      </IonButton>
      <IonButton
        expand="block"
        onClick={() => present("hello from hook", 3000)}
      >
        Show Toast using params, closes in 3 secs
      </IonButton>
      <IonButton expand="block" onClick={dismiss}>
        Hide Toast
      </IonButton>
    </>
  );
};

export default Home;
