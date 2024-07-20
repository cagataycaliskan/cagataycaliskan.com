import React from "react";
import ActivePageCards from "./AboutComponents/ActivePageCards";
function AboutPage() {
  return (
    <>
      <div className="container sm:px-24 md:px-32 lg:px-36 xl:px-48 text-orange-400 font-medium text-center text-lg sm:text-2xl lg:text-3xl">
        <div className="mt-12">My Certificates</div>

        <div>
          <ActivePageCards />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
