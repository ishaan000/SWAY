//This file defines the main color keys for dark theme, using colors defined in the colors.tsx token file. When dark theme is triggered, these values will replace the existing ones.

export const darkTheme = {
  ".dark-theme": {
    "--colors-text-primary": "var(--colors-sway-yellow)",
    "--colors-text-secondary": "var(--colors-sway-black)",
    "--colors-btn-primary": "var(--colors-sway-medium-green)",
    "--colors-btn-primary-accent": "var(--colors-sway-green)",
    "--colors-btn-secondary": "var(--colors-sway-dark-orange)",
    "--colors-btn-secondary-accent": "var(--colors-sway-orange)",
    "--colors-primary": "var(--colors-sway-dark-green)",
    "--colors-primary-accent": "var(--colors-sway-yellow)",
    "--colors-card-background": "var(--colors-sway-yellow)",
    "--colors-background": "var(--colors-sway-black)",
  },
};
