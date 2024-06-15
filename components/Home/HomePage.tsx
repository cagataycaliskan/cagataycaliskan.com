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
              initial={{ y: "-30vh", opacity: 1 }}
              animate={{ y: "-30vh", opacity: 0 }}
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
          animate={{ y: "-20vh", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl">
            MY NAME IS
          </div>
          <div className="text-orange-400 font-medium text-center my-3 text-2xl sm:text-4xl">
            ÇAĞATAY ÇALIŞKAN
          </div>
          <div className="text-orange-400 font-medium text-center text-lg sm:text-2xl">
            I AM A FRONT-END DEVELOPER
          </div>
        </motion.div>
      </div>
    </>
  );
}
