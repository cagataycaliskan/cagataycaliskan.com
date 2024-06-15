"use client";
import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h1>My Sidebar</h1>
          </div>
          <div className="sidebar-content">
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
          </div>
          <div className="sidebar-footer">
            <span>Footer Content</span>
          </div>
        </div>
      )}

      <div className="sidebar-toggle" onClick={toggleSidebar}>
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

export default Sidebar;
