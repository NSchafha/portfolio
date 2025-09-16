import React from "react";

export default function Tree({ variant }) {
    return <div className={`tree-${variant}`}></div>;
}

// src/components/Rock.jsx
import React from "react";
import "./Rock.css";

const sizeMap = {
    s: { width: "12px", height: "6px", borderRadius: "6px 6px 0 0" },
    m: { width: "40px", height: "20px", borderRadius: "20px 20px 0 0" },
    l: { width: "74px", height: "38px", borderRadius: "74px 74px 0 0" },
};

const positionMap = {
    front: { zIndex: 3 },
    middle: { zIndex: 2, opacity: 0.8 },
    back: { zIndex: 1, opacity: 0.6 },
};

export default function Rock({ size = "m", position = "front", x = 0, y = 0 }) {
    const sizeStyles = sizeMap[size] || sizeMap.m;
    const positionStyles = positionMap[position] || positionMap.front;

    const style = {
        ...sizeStyles,
        ...positionStyles,
        left: `${x}px`,
        bottom: `${y}px`,
    };

    return <div className="rock" style={style}></div>;
}
