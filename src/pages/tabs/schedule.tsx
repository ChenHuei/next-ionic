import React from "react";
import type { NextPage } from "next";

import Tabs from "@/components/tabs";

const TabsSchedulePage: NextPage = () => {
  console.log("%cschedule.tsx line:7 schedule", "color: #007acc;");

  return (
    <>
      <h1>Tabs Schedule</h1>
      <Tabs />
    </>
  );
};

export default TabsSchedulePage;
