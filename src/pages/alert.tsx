import React from "react";
import type { NextPage } from "next";
import { IonButton, useIonAlert } from "@ionic/react";

export async function getStaticProps() {
  return {
    props: {
      title: "Alert",
    }, // will be passed to the page component as props
  };
}

const Alert: NextPage = () => {
  const [present] = useIonAlert();

  return (
    <>
      <IonButton
        expand="block"
        onClick={() =>
          present({
            cssClass: "my-css",
            header: "Alert",
            message: "alert from hook",
            buttons: [
              "Cancel",
              { text: "Ok", handler: (d) => console.log("ok pressed") },
            ],
            onDidDismiss: (e) => console.log("did dismiss"),
          })
        }
      >
        Show Alert
      </IonButton>
      <IonButton
        expand="block"
        onClick={() => present("hello with params", [{ text: "Ok" }])}
      >
        Show Alert using params
      </IonButton>
    </>
  );
};

export default Alert;
