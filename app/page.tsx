"use client";

import { useAppStore } from "@/lib/hooks";
import { useEffect, useRef, useState } from "react";
import { initialize } from "@/lib/features/languageSlice";
import { Navbar, Hero, Statistics, Goals, Organizers, PrizeFund, Winners, Gallery, Footer } from "./_components";
import WinnerList from "./_components/Winners/WinnerList";
import { WinnersDota, WinnersCS } from "./_components/Winners/createWinners"
import { carouselGalleryImages, carouselPrizeFundImages, teamObj1, teamObj2, teamObj3, teamObj4 } from "@/utils/staticVariables";
import { Spin } from "antd";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    store.dispatch(initialize())
    initialized.current = true
  }

  return (
    <div className="page">
      {
        loading && (
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        )
      }
      <Navbar />
      <Hero />
      <Statistics />
      <Goals />
      <Organizers />
      <PrizeFund
        images={carouselPrizeFundImages}
      />
      <Winners>
        <WinnerList type="dotaTeams" teams={[teamObj1, teamObj2, teamObj3]}>
          <WinnersDota />
        </WinnerList>
        <WinnerList type="csTeams" teams={[teamObj1, teamObj4, teamObj3]}>
          <WinnersCS />
        </WinnerList>
      </Winners>
      <Gallery images={carouselGalleryImages} />
      <Footer />
    </div>
  );
}
