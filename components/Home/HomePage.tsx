"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container flex justify-center items-center min-h-screen">
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              className="animated-text flex justify-center items-center absolute"
              initial={{ y: "-20vh", opacity: 1 }}
              animate={{ y: "-20vh", opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="text-orange-400 font-medium text-center text-3xl sm:text-4xl">
                WELCOME
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="animated-text flex flex-col justify-center items-center"
          initial={{ y: "60vh", opacity: 0 }}
          animate={{ y: "0vh", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl">
            My name is Çağatay Çalışkan and I am a Front-end Developer. I was
            born in Turkey at 1998. I studied Aviation Management. Despite not
            having a degree in a software-related field, I have a keen interest
            in software development and I am progressing in the software
            industry. I love learning new technologies. I strive to deliver my
            tasks in the best possible way in the projects I work on. My goal is
            to be a lifetime learner and to create successful projects.
          </div>

          <div className="text-orange-400 font-medium text-center text-xl sm:text-3xl mt-8">
            Technologies I Use
          </div>

          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl mt-2">
            JavaScript - React - Next.js
          </div>
        </motion.div>
      </div>
    </>
  );
}
