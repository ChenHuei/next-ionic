import React from "react";
import type { NextPage } from "next";
import { IonButton } from "@ionic/react";
import { menuController } from "@ionic/core";

const Home: NextPage = () => {
  const openMenu = () => {
    menuController.open();
  };

  return (
    <IonButton expand="block" onClick={() => openMenu()}>
      Open Menu
    </IonButton>
  );
};

export default Home;
