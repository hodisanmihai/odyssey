"use client";

import React from "react";

const Footer = () => {
  return (
    <footer
      className="no-copy"
      style={{
        backgroundColor: "#222222",
        color: "#ffffff",
        padding: "20px",
        textAlign: "center",
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>&copy; 2025 Odyssey. All rights reserved.</p>
      <div>
        <p>
          Created by{" "}
          <a href="https://hm-design.com" style={{ color: "#0056b3" }}>
            HM-Design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
