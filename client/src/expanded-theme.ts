// eslint-disable-next-line
import { Palette, PaletteColor} from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        /* Extending Palette so tertiary can have color as well*/
        tertiary: PaletteColor;
    }
}