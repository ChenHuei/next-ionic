import { IonApp, IonPage } from "@ionic/react";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <IonApp>
      <IonPage>
        <Story />
      </IonPage>
    </IonApp>
  ),
];
