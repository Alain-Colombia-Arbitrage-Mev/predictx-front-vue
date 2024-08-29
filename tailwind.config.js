/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        royalblue: "#457eff",
        blueviolet: {
          "100": "#872cff",
          "200": "#5010c0",
        },
        "primary-contrast": "#fff",
        "light-border": "#e2e4ea",
        gray: "#777",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "25xl": "44px",
        mini: "15px",
        "default-border-raius": "4px",
      },
    },
    fontSize: {
      "6xl-1": "25.1px",
      "9xl-3": "28.3px",
      "3xl": "22px",
      "11xl-2": "30.2px",
      base: "16px",
      "4xl": "23px",
      "5xl": "24px",
      lg: "18px",
      lgi: "19px",
      "21xl": "40px",
      "13xl": "32px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq338: {
        raw: "screen and (max-width: 338px)",
      },
      mq337: {
        raw: "screen and (max-width: 337px)",
      },
      mq322: {
        raw: "screen and (max-width: 322px)",
      },
      mq295: {
        raw: "screen and (max-width: 295px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
