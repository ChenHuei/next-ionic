import React, { useState } from "react";
import type { NextPage } from "next";
import {
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
} from "@ionic/react";

const checkboxList = [
  { val: "Pepperoni", isChecked: true },
  { val: "Sausage", isChecked: false },
  { val: "Mushroom", isChecked: false },
];

const Alert: NextPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <IonList>
      <IonItemDivider>Default Checkbox</IonItemDivider>
      <IonItem>
        <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
        <IonCheckbox
          checked={checked}
          onIonChange={(e) => setChecked(e.detail.checked)}
        />
      </IonItem>

      <IonItemDivider>Disabled Checkbox</IonItemDivider>
      <IonItem>
        <IonCheckbox slot="end" disabled={true} />
      </IonItem>

      <IonItemDivider>Checkbox Colors</IonItemDivider>
      <IonItem>
        <IonCheckbox slot="end" color="primary" />
        <IonCheckbox slot="end" color="secondary" />
        <IonCheckbox slot="end" color="danger" />
        <IonCheckbox slot="end" color="light" />
        <IonCheckbox slot="end" color="dark" />
      </IonItem>
      <IonItemDivider>Checkboxes in a List</IonItemDivider>

      {checkboxList.map(({ val, isChecked }, i) => (
        <IonItem key={i}>
          <IonLabel>{val}</IonLabel>
          <IonCheckbox slot="end" value={val} checked={isChecked} />
        </IonItem>
      ))}
    </IonList>
  );
};

export default Alert;
