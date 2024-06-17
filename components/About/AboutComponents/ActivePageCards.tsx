"use client";
import React from "react";
import ReusableCard from "./ReusableCard";

function ActivePageCards() {
  const handleClick = (text: string) => {
    console.log(text);
  };

  return (
    <>
      <div className="reusable-card-container">
        <ReusableCard text="Deneme1" onClick={() => handleClick("Deneme1")} />
        <ReusableCard text="Deneme2" onClick={() => handleClick("Deneme2")} />
        <ReusableCard text="Deneme3" onClick={() => handleClick("Deneme3")} />
        <ReusableCard text="Deneme4" onClick={() => handleClick("Deneme4")} />
      </div>
    </>
  );
}

export default ActivePageCards;
