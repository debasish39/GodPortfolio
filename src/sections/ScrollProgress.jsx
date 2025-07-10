// components/ScrollProgress.jsx
import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / windowHeight) * 100;
    setScrollWidth(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-red-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
}
