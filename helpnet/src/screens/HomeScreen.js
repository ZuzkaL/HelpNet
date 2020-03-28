import React from "react";

export default function Home() {
  return (
    <div
      style={{
        backgroundSize: "absolute",
        width: "100vw",
        height: "88vh",
        position: "absolute",
        left: 0,
        right: 0
      }}
    >
      <p
        style={{
          position: "absolute",
          left: 50,
          top: 250,
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
          top: 500,
          width: 500,
          textAlign: "left"
        }}
      >
        nejaky sumny neskor
      </p>
    </div>
  );
}
