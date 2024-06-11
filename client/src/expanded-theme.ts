// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "@mui/material/styles/createPalette";
import "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        /* Extending Palette so tertiary can have color as well*/
        tertiary: PaletteColor;
    }
}

declare module "@mui/material/styles" {
    interface TypeBackground {
      light: string;
    }
}