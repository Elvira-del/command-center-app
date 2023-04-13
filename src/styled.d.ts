import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      success: string;

      lightFont: string;
      darkFont: string;

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
  }
}
