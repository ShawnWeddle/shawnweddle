/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#000073",
        second: "#ff6f69",
        third: "#7fe5ba",
        fourth: "#def8ff",
      },
      animation: {
        arrowPulse: "arrowPulse 4s ease-in-out infinite",
        leftBlob: "leftBlobPulse 7s ease-in-out infinite, leftBlobTransform 28s ease infinite",
        rightBlob: "rightBlobPulse 7s ease-in-out infinite, rightBlobTransform 28s ease infinite",
        middleBlob: "middleBlobPulse 7s ease-in-out infinite, middleBlobTransform 28s ease infinite",
        
      },
      keyframes: {
        arrowPulse: {
          "0%": {"opacity": "1"},
          "50%": {"opacity": "0.75"},
          "100%": {"opacity": "1"},
        },
        leftBlobPulse: {
          "0%":{ "border-radius": "33% 67% 45% 55% / 43% 50% 50% 57% "},
          "30%":{ "border-radius": "40% 60% 62% 38% / 65% 54% 46% 35% "},
          "65%":{ "border-radius": "50% 50% 58% 42% / 33% 42% 58% 66% "},
          "100%":{ "border-radius": "33% 67% 45% 55% / 43% 50% 50% 57% "},
        },
        rightBlobPulse: {
          "0%":{ "border-radius": "49% 51% 58% 42% / 34% 42% 58% 66% "},
          "31%":{ "border-radius": "33% 67% 45% 55% / 43% 50% 50% 57% "},
          "62%":{ "border-radius": "40% 60% 62% 38% / 65% 54% 46% 35% "},
          "100%":{ "border-radius": "50% 50% 58% 42% / 33% 42% 58% 66% "},
        },
        middleBlobPulse: {
          "0%":{ "border-radius": "40% 60% 62% 38% / 65% 54% 46% 35% "},
          "34%":{ "border-radius": "50% 50% 58% 42% / 33% 42% 58% 66% "},
          "68%":{ "border-radius": "33% 67% 45% 55% / 43% 50% 50% 57% "},
          "100%":{ "border-radius": "40% 60% 62% 38% / 65% 54% 46% 35% "},
        },
        leftBlobTransform: {
          "0%":{transform: "translate(0%, 0%) scale(1)"},
          "22%":{transform: "translate(10%, 5%) scale(1.1)"},
          "48%":{transform: "translate(15%, 15%) scale(1.2)"},
          "73%":{transform: "translate(5%, 10%) scale(1.1)"},
          "100%":{transform: "translate(0%, 0%) scale(1)"},
        },
        rightBlobTransform: {
          "0%":{transform: "translate(0%, 0%) scale(1)"},
          "20%":{transform: "translate(-10%, 0%) scale(0.9)"},
          "40%":{transform: "translate(-17%, 5%) scale(1)"},
          "60%":{transform: "translate(-10%, 10%) scale(1.1)"},
          "80%":{transform: "translate(-5%, 8%) scale(1)"},
          "100%":{transform: "translate(0%, 0%) scale(1)"},
        },
        middleBlobTransform: {
          "0%":{transform: "translate(0%, 0%) scale(1)"},
          "18%":{transform: "translate(-1%, -19%) scale(0.95)"},
          "35%":{transform: "translate(8%, -18%) scale(1)"},
          "49%":{transform: "translate(-1%, 1%) scale(1.1)"},
          "66%":{transform: "translate(-9%, 19%) scale(1.25)"},
          "84%":{transform: "translate(2%, 16%) scale(1.1)"},
          "100%":{transform: "translate(0%, 0%) scale(1)"},
        },
      }
    },
  },
  plugins: [],
}
