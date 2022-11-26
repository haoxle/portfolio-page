import React, { useState } from "react";

export default function ShowButtonHover() {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div className="App">
      <h2>Hidden message in the box. Move mouse in the box</h2>
      <div
        style={{
          border: "1px solid gray",
          width: 300,
          height: 300,
          padding: 10,
          margin: 100,
        }}
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
        }}
      >
        hi
        <div style={style}>This was hidden</div>
      </div>
    </div>
  );
}
