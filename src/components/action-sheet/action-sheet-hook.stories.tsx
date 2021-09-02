import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { IonButton, useIonActionSheet } from "@ionic/react";
import ActionSheet, { ActionSheetProps } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Hook/ActionSheet",
  component: ActionSheet,
} as Meta<ActionSheetProps>;

const HookComponentTemplate: Story<ActionSheetProps> = (props) => {
  const [present, dismiss] = useIonActionSheet();

  return (
    <IonButton expand="block" onClick={() => present(props)}>
      Show ActionSheet
    </IonButton>
  );
};
export const DefaultHook = HookComponentTemplate.bind({});
DefaultHook.args = {
  header: "Action Sheet",
  buttons: [{ text: "Ok" }, { text: "Cancel" }],
};
