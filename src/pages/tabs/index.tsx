import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { IonSpinner } from "@ionic/react";

import Tabs from "@/components/tabs";

const TabsPage: NextPage = () => {
  const router = useRouter();

  router.push("/tabs/schedule");

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <IonSpinner />
      </div>
      <Tabs />
    </>
  );
};

/* This controls if SSR is on or not. Enabling it works but with warnings at the moment */
export default dynamic(() => Promise.resolve(TabsPage), {
  ssr: false,
});
