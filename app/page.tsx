"use client";

import { useState } from "react";
import LandingPopup from "./components/LandingPage/Popup";
import { Button } from "./components/Base";
import CoachSlider from "./components/CoachSlider";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className='space-y-11 py-2'>
        <CoachSlider />
        <div className='max-w-md mx-auto text-center pt-5'>
          <h2 className='font-sf-pro-display font-bold text-brand-primary text-3xl leading-8 tracking-wide md:px-14'>
            You were never meant to do this alone!
          </h2>
          <p className='text-body leading-6 tracking-tight mt-3.5 px-2'>
            Let's make the most of your NDIS journey. Choose Kindship as your
            Plan Manager and we'll walk with you every step of the way.
          </p>

          <div className='max-w-sm mx-auto space-y-4 mt-7 md:mt-11 md:px-3.5'>
            <Button onClick={() => setOpen(true)}>Learn More</Button>
            <p className='text-brand-gray-primary text-[19px] leading-7 tracking-tight px-3'>
              Kindship Premium fees are fully funded by NDIS life choices.
            </p>
          </div>
        </div>
      </div>

      <LandingPopup {...{ open, setOpen }} />
    </>
  );
}
