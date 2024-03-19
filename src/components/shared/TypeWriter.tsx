"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        loop: true,
        delay: 75,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("MERN Stack Development")
          .pauseFor(1000) // Pause for 1 second after the first string
          .deleteAll() // Delete all text
          .typeString("Technical Content Writing")
          .start()
          .pauseFor(1000)
          .deleteAll()
          .typeString("React Native App Development")
          .start();
      }}
    />
  );
}
