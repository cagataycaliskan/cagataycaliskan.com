"use client";
import React from "react";
import ReusableCard from "./ReusableCard";

function ActivePageCards() {
  const myCertificates = [
    {
      certificateName: "The Ultimate React Course 2024: React, Redux & More",
      certificateUrl: "https://ude.my/UC-a32a2086-9fac-44da-90ba-147073bce8ae",
      imageurl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-a32a2086-9fac-44da-90ba-147073bce8ae.jpg?v=1715675488000",
    },
    {
      certificateName: "The Modern Javascript Bootcamp Course",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-db2e4c83-0a2f-4089-af85-2eca28a10285/",
      imageurl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-db2e4c83-0a2f-4089-af85-2eca28a10285.jpg?v=1679665277000",
    },
    {
      certificateName: "Go - The Complete Guide",
      certificateUrl:
        "https://www.udemy.com/certificate/UC-6a05c8fe-59fe-4808-8c71-24507ad425bb/",
      imageurl:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-6a05c8fe-59fe-4808-8c71-24507ad425bb.jpg?v=1726752175000",
    },
  ];

  return (
    <>
      <div className="reusable-card-container">
        {myCertificates.map((certificate) => (
          <ReusableCard
            key={certificate.certificateName}
            text={certificate.certificateName}
            imageUrl={certificate.imageurl}
            linkUrl={certificate.certificateUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ActivePageCards;
