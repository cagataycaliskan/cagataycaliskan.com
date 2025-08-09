import React from "react";
import Link from "next/link";

interface FooterProps {
  locale: string;
  translations?: {
    homePage?: string;
    aboutMe?: string;
    contactMe?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ locale, translations }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Çağatay Çalışkan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;