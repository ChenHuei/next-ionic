import React from "react";
import type { NextPage } from "next";
import { IonButton, useIonActionSheet } from "@ionic/react";

const ActionSheetPage: NextPage = () => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <>
      <IonButton
        expand="block"
        onClick={() =>
          present({
            buttons: [{ text: "Ok" }, { text: "Cancel" }],
            header: "Action Sheet",
          })
        }
      >
        Show ActionSheet
      </IonButton>
      <IonButton
        expand="block"
        onClick={() =>
          present([{ text: "Ok" }, { text: "Cancel" }], "Action Sheet")
        }
      >
        Show ActionSheet using params
      </IonButton>
      <IonButton
        expand="block"
        onClick={() => {
          present([{ text: "Ok" }, { text: "Cancel" }], "Action Sheet");
          setTimeout(dismiss, 3000);
        }}
      >
        Show ActionSheet, hide after 3 seconds
      </IonButton>
    </>
  );
};

export default ActionSheetPage;
