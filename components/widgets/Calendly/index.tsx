"use client";
import React, { useState, useEffect } from "react";
import styles from "@/components/sections/WelcomeBanner/welcome.module.css";

const CalendlyWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-wrapper">
      {!isLoaded ? (
        <div className={`${styles.skeleton_shimmer}`}></div>
      ) : (
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/newweborderhr"
        ></div>
      )}
    </div>
  );
};

export default CalendlyWidget;
