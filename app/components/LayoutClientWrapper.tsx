"use client";
import React, { useState, useEffect } from "react";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
        style={{ 
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 139, 255, 0.12), transparent 80%)` 
        }}
      />
      {children}
    </>
  );
}