import { useState } from "react";
import PropTypes from "prop-types";
import styledWeb from "styled-components";
import styledNat from "styled-components/native";
import {Platform} from "react-native";
import styled from "./styled";
import { THEME } from "./Theme";

function getInputBorderColor({
  color,
  theme,
  variant,
}: {
        color?: any;
        theme?: any;
        variant?: any;
      }) {
  if (
    Input.VARIANTS.CONTAINED ===
      variant ||
    Input.VARIANTS.OUTLINE === variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }`;
  }
  if (Input.VARIANTS.TEXT === variant) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }00`;
  }
  return `${
    theme[
      THEME.COLORS[theme.mode][color]
    ]
  }`;
}
function getInputBackgroundColor({
  color,
  theme,
  variant,
}: {
        color?: any;
        theme?: any;
        variant?: any;
      }) {
  return `${
    theme[
      THEME.COLORS[theme.mode].BACKGROUND
    ]
  }`;
}

function getInputTextColor({
  color,
  theme,
  variant,
}: {
        color?: any;
        theme?: any;
        variant?: any;
      }) {
  return `${
    theme[
      THEME.COLORS[theme.mode].TEXT_DARK
    ]
  }`;
}

let Component;
  function onChangeNOOP(event) {}
if (
  Platform &&
  (Platform.OS === "ios" ||
    Platform.OS === "android")
) {
  Component = styledNat.TextInput``;
  const ComponentShell = styledNat.TextInput``;
  Component = ({
    onChange = onChangeNOOP,
    color,
    ...props
  }) => {
    return (
      <ComponentShell
        onChangeText={(text) =>
          onChange({
            target: { value: text },
          })
        }
        {...props}
      />
    );
  };
} else {
  Component = styledWeb.input`
  outline: none;
  &:focus {
    outline: none;
    border: 2px solid
    ${({ color, theme, variant }: {
        color?: any;
        theme?: any;
        variant?: any;
      }) => {
      return getInputBorderColor({
        color,
        theme,
        variant,
      });
    }};
  }`;
}
const Comp = styled(Component)`
  /* height: 40px; */
  width: 100%;
  border-radius: 4px;
  padding: 8px 12px;
  border: 2px solid
    ${({ color, theme, variant }: {
        color?: any;
        theme?: any;
        variant?: any;
      }) => {
      return getInputBorderColor({
        color,
        theme,
        variant,
      });
    }};
  background: ${({ color, theme, variant }: {
        color?: any;
        theme?: any;
        variant?: any;
      }) => {
    return getInputBackgroundColor({
      color,
      theme,
      variant,
    });
  }};
  color: ${({ color, theme, variant }: {
        color?: any;
        theme?: any;
        variant?: any;
      }) => {
    return getInputTextColor({
      color,
      theme,
      variant,
    });
  }};

`;

export default function Input({
  color=THEME.COLORS.PRIMARY,
  variant= Input.VARIANTS.CONTAINED,
  onFocus: onFocusProp = (event)=>{},
  onBlur: onBlurProp = (event)=>{},
  ...props
}) {
  const [
    hasFocus,
    setHasFocus,
  ] = useState(false);
  return (
    <Comp
      color={
        hasFocus
          ? color
          : THEME.COLORS.TEXT_DARK
      }
      variant={variant}
      onFocus={(e) => {
        setHasFocus(true);
        onFocusProp(e)
      }}
      onBlur={(e) => {
        setHasFocus(false);
        onBlurProp(e)
      }}
      {...props}
    />
  );
}

Input.VARIANTS = {
  CONTAINED: "CONTAINED",
  OUTLINE: "OUTLINE",
  TEXT: "TEXT",
};

Input.MASS = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE ",
};

Input.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
};

Input.defaultProps = {
  color: THEME.COLORS.PRIMARY,
  variant: Input.VARIANTS.CONTAINED,
};
