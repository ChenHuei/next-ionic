import React, { useState } from "react";
import type { NextPage } from "next";
import { IonButton, useIonPicker } from "@ionic/react";

const PickerPage: NextPage = () => {
  const [present] = useIonPicker();
  const [value, setValue] = useState("");

  return (
    <>
      <IonButton
        expand="block"
        onClick={() =>
          present({
            buttons: [
              {
                text: "Confirm",
                handler: (selected) => {
                  setValue(selected.animal.value);
                },
              },
            ],
            columns: [
              {
                name: "animal",
                options: [
                  { text: "Dog", value: "dog" },
                  { text: "Cat", value: "cat" },
                  { text: "Bird", value: "bird" },
                ],
              },
            ],
          })
        }
      >
        Show Picker
      </IonButton>
      <IonButton
        expand="block"
        onClick={() =>
          present(
            [
              {
                name: "animal",
                options: [
                  { text: "Dog", value: "dog" },
                  { text: "Cat", value: "cat" },
                  { text: "Bird", value: "bird" },
                ],
              },
              {
                name: "vehicle",
                options: [
                  { text: "Car", value: "car" },
                  { text: "Truck", value: "truck" },
                  { text: "Bike", value: "bike" },
                ],
              },
            ],
            [
              {
                text: "Confirm",
                handler: (selected) => {
                  setValue(
                    `${selected.animal.value}, ${selected.vehicle.value}`
                  );
                },
              },
            ]
          )
        }
      >
        Show Picker using params
      </IonButton>
      {value && <div>Selected Value: {value}</div>}
    </>
  );
};

export default PickerPage;
