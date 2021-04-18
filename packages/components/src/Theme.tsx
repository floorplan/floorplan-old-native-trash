import React, { useState } from "react";
import {
  ThemeProvider,
  ThemeContext,
} from "styled-components";

export { ThemeContext };
export const THEME = {
  MODE: {
    LIGHT: "LIGHT",
    DARK: "DARK",
  },
  COLORS: {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
    SUCCESS: "SUCCESS",
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    TEXT_LIGHT: "TEXT_LIGHT",
    TEXT_DARK: "TEXT_DARK",
    BACKGROUND: "BACKGROUND",
    MUTED: "MUTED",
    LIGHT: {
      PRIMARY: "colors.light.primary",
      SECONDARY:
        "colors.light.secondary",
      SUCCESS: "colors.light.success",
      INFO: "colors.light.info",
      WARNING: "colors.light.warning",
      ERROR: "colors.light.error",
      TEXT_LIGHT:
        "colors.light.textLight",
      TEXT_DARK:
        "colors.light.textDark",
      BACKGROUND:
        "colors.light.background",
      MUTED: "colors.light.muted",
    },
    DARK: {
      PRIMARY: "colors.dark.primary",
      SECONDARY:
        "colors.dark.secondary",
      SUCCESS: "colors.dark.success",
      INFO: "colors.dark.info",
      WARNING: "colors.dark.warning",
      ERROR: "colors.dark.error",
      TEXT_LIGHT:
        "colors.dark.textLight",
      TEXT_DARK: "colors.dark.textDark",
      BACKGROUND:
        "colors.dark.background",
      MUTED: "colors.dark.muted",
    },
  },
};

/**
 * Theme is the object theme
 */
export const theme = {
  /**colors light */
  "colors.light.primary": "#663399",
  "colors.light.secondary": "#ff69b4",
  "colors.light.success": "",
  "colors.light.info": "",
  "colors.light.warning": "",
  "colors.light.error": "#dd3322",
  "colors.light.textLight": "#ffffff",
  "colors.light.textDark": "#02050a",
  "colors.light.background": "#ffffff",
  "colors.light.muted": "#eeeeee",
  /**colors dark */
  "colors.dark.primary": "#663399",
  "colors.dark.secondary": "#ff69b4",
  "colors.dark.success": "",
  "colors.dark.info": "",
  "colors.dark.warning": "",
  "colors.dark.error": "#dd3322",
  "colors.dark.textLight": "#ffffff",
  "colors.dark.textDark": "#ffffff",
  "colors.dark.background": "#111111",
  "colors.dark.muted": "#111111",
};

/**
 *
 * @param {object} props
 */
export default function Provider(
  props
) {
  const [mode, setMode] = useState(
    THEME.MODE.LIGHT
  );
  return (
    <ThemeProvider
      theme={{
        mode,
        setMode,
        ...theme,
      }}
      {...props}
    />
  );
}
