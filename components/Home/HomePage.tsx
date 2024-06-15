"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <motion.div
          className="animated-text"
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

          <div className="text-orange-400 font-medium text-center my-10 text-2xl sm:text-4xl"></div>
        </motion.div>
      </div>
    </>
  );
}
