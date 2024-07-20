"use client";
import React from "react";
import ReusableCard from "./ReusableCard";

function ActivePageCards() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="reusable-card-container">
        <ReusableCard
          text="The Ultimate React Course 2024: React, Redux & More"
          onClick={() =>
            handleClick(
              "https://ude.my/UC-a32a2086-9fac-44da-90ba-147073bce8ae"
            )
          }
        />
        <ReusableCard
          text="The Modern Javascript Bootcamp Course"
          onClick={() =>
            handleClick(
              "https://www.udemy.com/certificate/UC-db2e4c83-0a2f-4089-af85-2eca28a10285/"
            )
          }
        />
      </div>
    </>
  );
}

export default ActivePageCards;
