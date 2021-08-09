import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,

    colors: {
      background: string,
      cardBackground: string,

      primary: string,
      primaryFaded: string,
      primaryTotaltFaded: string,

      brightBlue: string,
      white: string,
    },

    images: {
      bgImage: string,
      iconTheme: string,
    }
  }
}