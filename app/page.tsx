"use client";

import { useAppStore } from "@/lib/hooks";
import { useRef } from "react";
import { initialize } from "@/lib/features/languageSlice";
import { Navbar, Hero, Statistics, Goals, Organizers, PrizeFund, Winners, Gallery } from "./_components";
import WinnerList from "./_components/Winners/WinnerList";
import { WinnersDota, WinnersCS } from "./_components/Winners/createWinners"
import { carouselGalleryImages, carouselPrizeFundImages, teamObj1, teamObj2, teamObj3, teamObj4 } from "@/utils/staticVariables";

export default function Home() {
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    store.dispatch(initialize())
    initialized.current = true
  }

  return (
    <div className="page">
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
    </div>
  );
}
