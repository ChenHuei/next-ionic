import React from "react";
import type { NextPage } from "next";

import Tabs from "@/components/tabs";

const TabsAboutPage: NextPage = () => {
  console.log("%cabout.tsx line:7 about", "color: #007acc;");

  return (
    <>
      <h1>Tabs About</h1>
      <Tabs />
    </>
  );
};

export default TabsAboutPage;
