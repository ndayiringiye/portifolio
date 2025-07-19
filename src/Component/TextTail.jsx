import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextTrail = ({ text = "Hello from GSAP!", className = "" }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <h1 className={`text-4xl font-bold flex gap-1 ${className}`}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          className="inline-block"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default TextTrail;
