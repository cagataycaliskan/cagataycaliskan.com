import React from "react";
import ActivePageCards from "./AboutComponents/ActivePageCards";
function AboutPage() {
  return (
    <>
      <div className="container sm:px-24 md:px-32 lg:px-36 xl:px-48 text-orange-400 font-medium text-center text-lg sm:text-2xl lg:text-3xl">
        <div>
          Despite not having a degree in a software-related field, I have a keen
          interest in software development and I am progressing in the software
          industry. I love learning new technologies. I strive to deliver my
          tasks in the best possible way in the projects I work on. My goal is
          to be a lifetime learner and to create successful projects.
        </div>

        <div className="mt-12">My Certificates</div>

        <div>
          <ActivePageCards />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
