"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import HeaderLi from "../../utils/HeaderLi";
import LocalSwitcher from "../local-switcher";

interface SidebarProps {
  locale: string;
  translations: {
    homePage: string;
    aboutMe: string;
    contactMe: string;
  };
}

export default function Sidebar({
  locale,
  translations,
}: Readonly<SidebarProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>Çağatay Çalışkan</h1>
        </div>
        <div className="sidebar-content">
          <HeaderLi href={`/${locale}`}>{translations.homePage}</HeaderLi>
          <HeaderLi href={`/${locale}/about`}>{translations.aboutMe}</HeaderLi>
          <HeaderLi href={`/${locale}/contact`}>
            {translations.contactMe}
          </HeaderLi>
        </div>

        <div className="sidebar-footer">
          <LocalSwitcher />
        </div>
      </div>

      <div
        className={`sidebar-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        onTouchStart={toggleSidebar}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={"#FB923C"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
        </svg>
      </div>
    </>
  );
}
