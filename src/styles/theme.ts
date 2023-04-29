import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "10px",

  colors: {
    primary: "#5d80ba",
    secondary: "#ba7a70",
    success: "#2c6e50",

    lightFont: "#f2f2f2",
    darkFont: "#1d1d1d",

    bgElem: "#555555",
    bgFilter: "rgb(93 93 93 / 70%)",
  },

  fonts: {
    fontFam: "'Montserrat', sans-serif",
    medium: 500,
    semiBold: 600,
  },

  sizes: {
    container: { width: 1440 },
    header: { height: 70 },
  },

  gap: {
    elem: 15,
    block: 45,
  },

  breakpoints: {
    laptops: "max-width: 1024px",
    tablets: "max-width: 768px",
    mobile: "max-width: 480px",
  },
};
