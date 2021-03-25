import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    // base colors
    primary: '#1891FF', // blue
    secondary: '#035BA2', // dark blue

    red: '#FF4134',
    lightRed: '#fff1f0',

    purple: '#6B3CE9',
    lightPurple: '#F3EFFF',

    yellow: '#FFC664',
    lightyellow: '#FFF9EC',

    black: '#1E1F20',
    white: '#FFFFFF',

    lightGray: '#E0E5EB',
    gray: '#C1C3C5',
    darkgray: '#5B5B5B',

    transparent: 'transparent',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions   
    width,
    height,
};

export const FONTS = {
    largeTitle: {
        fontFamily: 'Montserrat-regular',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: 'Montserrat-Black', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Montserrat-Bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body3_1: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body4, lineHeight: 22 },
    body4_1: { fontFamily: 'Montserrat-SemiBold', fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: 'Montserrat-Regular', fontSize: SIZES.body5, lineHeight: 22 },
    body5_1: { fontFamily: 'Montserrat-ExtraBold', fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
