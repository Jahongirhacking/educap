"use client";

import { useAppSelector, useAppStore } from "@/lib/hooks";
import { useRef } from "react";
import { initialize } from "@/lib/features/languageSlice";
import { Navbar, Hero, Statistics } from "./_components";

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
    </div>
  );
}
