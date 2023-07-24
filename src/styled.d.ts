import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      blue: string;

      primary: string;
      secondary: string;
      success: string;

      white: string;
      black: string;

      bgElem: string;
      bgFilter: string;
    };

    fonts: {
      fontFam: string;
      medium: number;
      semiBold: number;
    };

    sizes: {
      container: { width: number };
      header: { height: number };
    };

    gap: {
      elem: number;
      block: number;
    };

    breakpoints: {
      laptops: string;
      tablets: string;
      mobile: string;
    };
  }
}
