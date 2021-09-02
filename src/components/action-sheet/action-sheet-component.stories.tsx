import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { IonButton } from "@ionic/react";
import ActionSheet, { ActionSheetProps } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/ActionSheet",
  component: ActionSheet,
} as Meta<ActionSheetProps>;

const ComponentTemplate: Story<ActionSheetProps> = (props) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <>
      <IonButton expand="block" onClick={() => setShowActionSheet(true)}>
        Show ActionSheet
      </IonButton>
      <ActionSheet
        {...props}
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
      />
    </>
  );
};

export const DefaultComponent = ComponentTemplate.bind({});
DefaultComponent.args = {
  buttons: [
    {
      text: "Delete",
      role: "destructive",
      handler: () => {
        console.log("Delete clicked");
      },
    },
    {
      text: "Share",
      handler: () => {
        console.log("Share clicked");
      },
    },
    {
      text: "Play (open modal)",
      handler: () => {
        console.log("Play clicked");
      },
    },
    {
      text: "Favorite",
      handler: () => {
        console.log("Favorite clicked");
      },
    },
    {
      text: "Cancel",
      role: "cancel",
      handler: () => {
        console.log("Cancel clicked");
      },
    },
  ],
};
