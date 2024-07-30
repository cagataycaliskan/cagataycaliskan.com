"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HomePageProps {
  translations: {
    welcomeUC: string;
    welcomeText: string;
    technologiesIUse: string;
  };
}

const HomePage: React.FC<HomePageProps> = ({ translations }) => {
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
              transition={{ duration: 1.7, ease: "easeOut" }}
            >
              <div className="text-orange-400 font-medium text-center text-3xl sm:text-4xl">
                {translations?.welcomeUC}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="animated-text flex flex-col justify-center items-center"
          initial={{ y: "60vh", opacity: 0 }}
          animate={{ y: "0vh", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl">
            {translations?.welcomeText}
          </div>

          <div className="text-orange-400 font-medium text-center text-xl sm:text-3xl mt-8">
            {translations?.technologiesIUse}
          </div>

          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl mt-2">
            JavaScript - React - Next.js
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
