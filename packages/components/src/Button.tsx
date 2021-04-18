import React, {
  useContext,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import styledWeb from "styled-components";
import styledNat from "styled-components/native";
import styled from "./styled";
import Typography from "./Typography";
import {
  THEME,
  ThemeContext,
} from "./Theme";

function getButtonHover({
  color,
  theme,
  variant,
}) {
  if (
    Button.VARIANTS.CONTAINED ===
    variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }99`;
  }
  if (
    Button.VARIANTS.OUTLINE ===
      variant ||
    Button.VARIANTS.TEXT === variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }1a`;
  }
}

function getButtonBorderColor({
  color,
  theme,
  variant,
}) {
  if (
    Button.VARIANTS.CONTAINED ===
      variant ||
    Button.VARIANTS.OUTLINE === variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }`;
  }
  if (
    Button.VARIANTS.TEXT === variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }00`;
  }
}

function getButtonBackgroundColor({
  color,
  theme,
  variant,
}) {
  if (
    Button.VARIANTS.CONTAINED ===
    variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }`;
  }
  if (
    Button.VARIANTS.OUTLINE ===
      variant ||
    Button.VARIANTS.TEXT === variant
  ) {
    return `${
      theme[
        THEME.COLORS[theme.mode][color]
      ]
    }00`;
  }
}

const Platform = Platform || {};

let Component;
if (
  Platform &&
  (Platform.OS === "ios" ||
    Platform.OS === "android")
) {
  const ComponentShell = styledNat.TouchableHighlight``;
  Component = ({
    onClick,
    ...props
  }) => {
    const theme = useContext(
      ThemeContext
    );
    const getUnderLayColor = useCallback(
      function (color, variant) {
        return getButtonHover({
          color,
          theme,
          variant,
        });
      },
      []
    );
    return (
      <ComponentShell
        onPress={onClick}
        activeOpacity={1}
        underlayColor={getUnderLayColor(
          props.color,
          props.variant
        )}
        {...props}
      />
    );
  };
} else {
  Component = styledWeb.button`
    &:hover {
      cursor:pointer;
      background-color:${({
        theme,
        color,
        variant,
      }) => {
        return getButtonHover({
          color,
          theme,
          variant,
        });
      }};
    }
  `;
}
const Comp = styled(Component)`
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid
    ${({ color, theme, variant }) => {
      return getButtonBorderColor({
        color,
        theme,
        variant,
      });
    }};
  background-color: ${({
    color,
    theme,
    variant,
  }) => {
    return getButtonBackgroundColor({
      color,
      theme,
      variant,
    });
  }};
`;
function getTypographyColor(
  variant,
  color
) {
  if (
    Button.VARIANTS.CONTAINED ===
    variant
  ) {
    return THEME.COLORS.TEXT_LIGHT;
  }
  if (
    Button.VARIANTS.OUTLINE ===
      variant ||
    Button.VARIANTS.TEXT === variant
  ) {
    return color;
  }
}

export default function Button({
  children,
  color,
  variant,
  ...props
}) {
  return (
    <Comp
      color={color}
      title={children}
      variant={variant}
      {...props}
    >
      <Typography
        color={getTypographyColor(
          variant,
          color
        )}
      >
        {`${children}`.toUpperCase()}
      </Typography>
    </Comp>
  );
}

Button.VARIANTS = {
  CONTAINED: "CONTAINED",
  OUTLINE: "OUTLINE",
  TEXT: "TEXT",
};

Button.MASS = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE ",
};

Button.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  color: THEME.COLORS.PRIMARY,
  variant: Button.VARIANTS.CONTAINED,
};
