import { createStitches } from "@stitches/react";

const {
    styled,
    css,
    globalCss,
    keyframes,
    theme,
    createTheme,
    getCssText,
    config,
  } = createStitches({
    theme: {
      radii: {
        radius4: "var(radius4)",
        radius6: "var(radius6)",
        radius8: "var(radius8)",
        radius10: "var(radius10)",
        radius12: "var(radius12)",
        radius14: "var(radius14)",
      },
    },
    fontSizes: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
      ["2xl"]: "var(--font-size-2xl)",
      ["3xl"]: "var(--font-size-3xl)"
    },
    shadows: {
      shadowSkewRightSm: "var(--shadows-skew-right-sm)",
      shadowSkewRightMd: "var(--shadows-skew-right-md)",
    },
    space: {
      2: "var(--spaces-2)",
      4: "var(--spaces-4)",
      6: "var(--spaces-6)",
      8: "var(--spaces-8)",
      10: "var(--spaces-10)",
      12: "var(--spaces-12)",
      14: "var(--spaces-14)",
      16: "var(--spaces-16)",
      18: "var(--spaces-18)",
      20: "var(--spaces-20)",
      22: "var(--spaces-22)",
      24: "var(--spaces-24)",
      26: "var(--spaces-26)",
      28: "var(--spaces-28)",
      30: "var(--spaces-30)",
      32: "var(--spaces-32)",
      36: "var(--spaces-36)",
      40: "var(--spaces-40)",
      44: "var(--spaces-44)",
      48: "var(--spaces-48)",
      56: "var(--spaces-56)",
      64: "var(--spaces-64)",
      80: "var(--spaces-80)",
      96: "var(--spaces-96)",
      112: "var(--spaces-112)",
      128: "var(--spaces-128)",
      144: "var(--spaces-144)",
      160: "var(--spaces-160)",
      1200: "var(--spaces-1200)"
    },
    colors: {
      "sway-black": "hsl(52, 94%, 2%)",
      "sway-yellow": "var(----sway-yellow)",
      "sway-green": "var(--green-70)",
      "sway-medium-green": "var(--green-80)",
      "sway-dark-green": "var(--green-90)",
      "sway-light-green": "var(--green-10)",
      "sway-orange": "var(--orange-50)",
      "sway-dark-orange": "var(--orange-60)",
      "sway-gray": "var(--grey-90)"
    }
  });