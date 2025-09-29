import React from "react";
import type { RoundTypes } from "../types";

function StarContent({ left, time, color }: RoundTypes) {
  return (
    <div
      className="star-item"
      style={{
        left: left + "%",
        animationDelay: time + "ms",
        backgroundColor: color,
      }}
    ></div>
  );
}

export default StarContent;
