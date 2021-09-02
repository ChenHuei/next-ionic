import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonRouterOutlet,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

interface TabsProps {
  list?: {
    link: string;
    icon: string;
    name: string;
    tab: string;
    badge?: number;
  }[];
}

const TABS_LIST = [
  {
    link: "/tabs/schedule",
    icon: calendar,
    tab: "Schedule",
    name: "Schedule",
    badge: 6,
  },
  {
    link: "/tabs/speakers",
    icon: personCircle,
    tab: "speakers",
    name: "Speakers",
  },
  {
    link: "/tabs/map",
    icon: map,
    tab: "map",
    name: "Map",
  },
  {
    link: "/tabs/about",
    icon: informationCircle,
    tab: "about",
    name: "About",
  },
];

const Tabs = (props: TabsProps) => {
  const { list = TABS_LIST } = props;

  return (
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        {list.map((item) => (
          <IonTabButton key={item.link} tab={item.tab} href={item.link}>
            <IonIcon icon={item.icon} />
            <IonLabel>{item.name}</IonLabel>
            {item.badge && <IonBadge>{item.badge}</IonBadge>}
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
export type { TabsProps };
