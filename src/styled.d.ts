import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    gap: number;

    colors: {
      primary: string;
      secondary: string;

      font: string;
      bgElem: string;
    };

    sizes: {
      container: { width: number };
      header: { height: number };
    };
  }
}
