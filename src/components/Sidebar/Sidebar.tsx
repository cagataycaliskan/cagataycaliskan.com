"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import HeaderLi from "../../utils/HeaderLi";
import LocalSwitcher from "../local-switcher";
import { ThemeToggle } from "../ui/ThemeToggle";
import { usePathname } from "next/navigation";

interface SidebarProps {
  locale: string;
  translations: {
    homePage: string;
  };
}

export default function Sidebar({
  locale,
  translations,
}: Readonly<SidebarProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    
    if (isLeftSwipe && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Pathname değiştiğinde menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Overlay for mobile devices */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        ref={sidebarRef} 
        className={`sidebar ${isOpen ? "open" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="sidebar-header">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center text-white font-bold text-sm">
              CC
            </div>
            <span className="bg-gradient-primary bg-clip-text text-transparent font-display font-bold text-base group-hover:scale-105 transition-transform duration-200">
              Çağatay Çalışkan
            </span>
          </div>
          <button 
            className="sidebar-close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        <div className="sidebar-content">
          <div className="sidebar-nav-items">
            <HeaderLi href={`/${locale}`} sidebar={true}>{translations.homePage}</HeaderLi>
          </div>
          
          <div className="sidebar-controls">
            <div className="sidebar-control-item">
              <LocalSwitcher />
            </div>
            <div className="sidebar-control-item">
              <ThemeToggle size="default" variant="outline" />
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          {/* Footer space for future content */}
        </div>
      </div>

      <button
        className={`sidebar-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </svg>
      </button>
    </>
  );
}
