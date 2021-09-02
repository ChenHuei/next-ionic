import React from "react";
import type { NextPage } from "next";

import Tabs from "@/components/tabs";

const TabsMapPage: NextPage = () => {
  console.log("%cmap.tsx line:7 map", "color: #007acc;");

  return (
    <>
      <h1>Tabs Map</h1>
      <Tabs />
    </>
  );
};

export default TabsMapPage;
