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
          <div className="text-orange-400 font-medium text-2xl text-center">
            MY NAME IS
          </div>
          <div className="text-orange-400 font-medium text-4xl text-center my-3">
            ÇAĞATAY ÇALIŞKAN
          </div>
          <div className="text-orange-400 font-medium text-2xl text-center">
            I AM A FRONT-END DEVELOPER
          </div>
        </motion.div>
      </div>
    </>
  );
}
