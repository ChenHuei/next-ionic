import React, { useState } from "react";
import type { NextPage } from "next";
import { IonButton, useIonModal } from "@ionic/react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const [present, dismiss] = useIonModal(
    <div>
      count: {count}
      <IonButton expand="block" onClick={() => handleIncrement()}>
        Increment Count
      </IonButton>
      <IonButton expand="block" onClick={() => handleDismiss()}>
        Close
      </IonButton>
    </div>
  );

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDismiss = () => {
    dismiss();
  };

  return (
    <>
      <IonButton
        expand="block"
        onClick={() => {
          present({
            cssClass: "my-class",
          });
        }}
      >
        Show Modal
      </IonButton>
      <div>Count: {count}</div>
    </>
  );
};

export default Home;
