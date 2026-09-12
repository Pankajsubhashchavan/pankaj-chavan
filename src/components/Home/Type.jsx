import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React & React Native Developer",
          "Cross-Platform Mobile App Developer",
          "React.js & Next.js Frontend Engineer",
          "Mobile App Deployment (Play Store & App Store)",
          "TypeScript & Modern JavaScript Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
