import COLORS from './style/colors';
import FONTS from './style/fonts';
import GAPS from './style/gaps';
import SIZES from './style/sizes';
import { ITheme } from './types';

const THEME: ITheme = {
    colors: {
        ...COLORS,
    },
    fonts: {
        ...FONTS,
    },
    gaps: {
        ...GAPS,
    },
    sizes: {
        ...SIZES,
    },
};

export default THEME;
