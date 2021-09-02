import React from "react";
import { IonActionSheet, ActionSheetOptions } from "@ionic/react";

interface ActionSheetProps extends ActionSheetOptions {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const ActionSheet = (props: ActionSheetProps) => {
  const { isOpen, ...rest } = props;

  return <IonActionSheet isOpen={isOpen} {...rest}></IonActionSheet>;
};

export default ActionSheet;
export type { ActionSheetProps };
