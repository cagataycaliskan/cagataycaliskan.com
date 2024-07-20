"use client";
import React from "react";
import ReusableCard from "./ReusableCard";

function ActivePageCards() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  const myCertificates = [
    {
      certificateName: "The Ultimate React Course 2024: React, Redux & More",
      certificateUrl: "https://ude.my/UC-a32a2086-9fac-44da-90ba-147073bce8ae",
    },
    {
      certificateName: "The Modern Javascript Bootcamp Course",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-db2e4c83-0a2f-4089-af85-2eca28a10285/",
    },
  ];

  return (
    <>
      <div className="reusable-card-container">
        {myCertificates.map((certificate) => (
          <ReusableCard
            text={certificate.certificateName}
            onClick={() => handleClick(certificate.certificateUrl)}
          />
        ))}
      </div>
    </>
  );
}

export default ActivePageCards;
