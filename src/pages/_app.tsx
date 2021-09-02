import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AppProps } from "next/dist/shared/lib/router/router";
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const MENU_LIST = [
  {
    name: "index",
    link: "",
  },
  {
    link: "action-sheet",
  },
  {
    link: "alert",
  },
  {
    link: "checkbox",
  },
  {
    link: "date-time",
  },
  {
    link: "modal",
  },
  {
    link: "picker",
  },
  {
    link: "toast",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  const { title = "Next.js with Ionic", ...otherPageProps } = pageProps;

  return (
    <IonApp>
      <IonMenu side="start" content-id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {MENU_LIST.map((menu) => (
              <IonMenuToggle key={menu.link}>
                <IonItem>
                  <Link href={`/${menu.link}`}>
                    <a>
                      <IonLabel>{menu.name ?? menu.link}</IonLabel>
                    </a>
                  </Link>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
      <div className="ion-page" id="main-content">
        <IonHeader translucent>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <Component {...otherPageProps} />
        </IonContent>
      </div>
    </IonApp>
  );
}
/* This controls if SSR is on or not. Enabling it works but with warnings at the moment */
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
