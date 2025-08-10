"use client";
import { motion } from "framer-motion";
import { memo } from "react";

interface ProfileCardProps {
  translations: {
    personal: {
      fullName: string;
      jobTitle: string;
    };
    welcomeText: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = memo(({ translations }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="lg:sticky lg:top-8 mb-8 lg:mb-0"
    >
      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/80 dark:hover:bg-gray-900/80 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 will-change-transform">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block py-2">
              {translations?.personal?.fullName}
            </span>
          </h1>
          
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-200 cursor-default">
              {translations?.personal?.jobTitle}
            </span>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {translations?.welcomeText}
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/cagataycaliskan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile - View my code repositories"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-110 hover:shadow-lg transition-all duration-200 group focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-200" aria-hidden="true">
                <path d="M10,0 C15.523,0 20,4.59 20,10.253 C20,14.782 17.138,18.624 13.167,19.981 C12.66,20.082 12.48,19.762 12.48,19.489 C12.48,19.151 12.492,18.047 12.492,16.675 C12.492,15.719 12.172,15.095 11.813,14.777 C14.04,14.523 16.38,13.656 16.38,9.718 C16.38,8.598 15.992,7.684 15.35,6.966 C15.454,6.707 15.797,5.664 15.252,4.252 C15.252,4.252 14.414,3.977 12.505,5.303 C11.706,5.076 10.85,4.962 10,4.958 C9.15,4.962 8.295,5.076 7.497,5.303 C5.586,3.977 4.746,4.252 4.746,4.252 C4.203,5.664 4.546,6.707 4.649,6.966 C4.01,7.684 3.619,8.598 3.619,9.718 C3.619,13.646 5.954,14.526 8.175,14.785 C7.889,15.041 7.63,15.493 7.54,16.156 C6.97,16.418 5.522,16.871 4.63,15.304 C4.63,15.304 4.101,14.319 3.097,14.247 C3.097,14.247 2.122,14.234 3.029,14.87 C3.029,14.87 3.684,15.185 4.139,16.37 C4.139,16.37 4.726,18.2 7.508,17.58 C7.513,18.437 7.522,19.245 7.522,19.489 C7.522,19.76 7.338,20.077 6.839,19.982 C2.865,18.627 0,14.783 0,10.253 C0,4.59 4.478,0 10,0"></path>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/cagataycaliskan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile - Connect with me professionally"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-110 hover:shadow-lg transition-all duration-200 group focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                <path fill="#0A66C2" d="M13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"/>
                <path fill="white" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727z"/>
              </svg>
            </a>
            
            <a
              href="mailto:cagataycaliskan98@gmail.com"
              aria-label="Send email - Contact me via email"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-110 hover:shadow-lg transition-all duration-200 group focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#D14836" className="group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
                <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.6 4.99c-.21.14-.49.14-.7 0L4.4 8.25c-.31-.2-.4-.59-.2-.9.2-.31.59-.4.9-.2L12 11.75l7.8-4.91c.31-.2.7-.11.9.2.2.31.11.7-.2.91z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ProfileCard;

ProfileCard.displayName = 'ProfileCard';