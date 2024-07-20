"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import HeaderLi from "../../utils/HeaderLi";

const Sidebar: React.FC = () => {
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
          <HeaderLi href="/">HOME</HeaderLi>
          <HeaderLi href="/about">ABOUT ME</HeaderLi>
          <HeaderLi href="/contact">CONTACT ME</HeaderLi>
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
};

export default Sidebar;
