import React from "react";

export default function Home() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        right: 0
      }}
    >
      <p
        style={{
          position: "absolute",
          left: 50,
          top: 270,
          font: "Roboto 80 bold",
          fontSize: 80,
          width: 490,
          textAlign: "left"
        }}
      >
        HelpNet
      </p>
      <p
        style={{
          position: "absolute",
          left: 50,
          font: "Roboto",
          fontSize: 32,
          top: 600,
          width: 500,
          textAlign: "left"
        }}
      >
        nejaky sumny neskor
      </p>
    </div>
  );
}
