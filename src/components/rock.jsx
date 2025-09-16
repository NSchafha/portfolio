import React from "react";

export default function Rock({ type }) {
    return <div className={`rock-${type}`}></div>;
}

// src/components/Tree.jsx
import React from "react";
import "./Tree.css"; // keep your base styles (colors, shapes, etc.)

const sizeMap = {
    s: { borderLeftWidth: "6px", borderRightWidth: "6px", borderBottomWidth: "32px" },
    m: { borderLeftWidth: "6px", borderRightWidth: "6px", borderBottomWidth: "56px" },
    l: { borderLeftWidth: "8px", borderRightWidth: "8px", borderBottomWidth: "72px" },
};

const positionMap = {
    front: { zIndex: 3 },
    middle: { zIndex: 2, opacity: 0.8 },
    back: { zIndex: 1, opacity: 0.6 },
};

export default function Tree({ size = "m", position = "front", x = 0, y = 0 }) {
    const sizeStyles = sizeMap[size] || sizeMap.m;
    const positionStyles = positionMap[position] || positionMap.front;

    const style = {
        ...sizeStyles,
        ...positionStyles,
        left: `${x}px`,
        bottom: `${y}px`,
    };

    return <div className="tree" style={style}></div>;
}
