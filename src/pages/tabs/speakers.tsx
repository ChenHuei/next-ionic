import React from "react";
import type { NextPage } from "next";

import Tabs from "@/components/tabs";

const TabsSpeakersPage: NextPage = () => {
  console.log("%cspeakers.tsx line:7 speakers", "color: #007acc;");

  return (
    <>
      <h1>Tabs Speakers</h1>
      <Tabs />
    </>
  );
};

export default TabsSpeakersPage;
