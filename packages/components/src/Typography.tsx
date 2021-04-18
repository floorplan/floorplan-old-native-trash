import PropTypes from "prop-types";
import styledWeb from "styled-components";
import styledNat from "styled-components/native";

import styled from './styled';
import { THEME } from "./Theme";
// let styledNat, styledWeb;
let Platform = Platform || {};

let Component;
if (
  Platform &&
  (Platform.OS === "ios" ||
    Platform.OS === "android")
) {
  Component = styledNat.Text``;
} else {
  Component = styledWeb.span``;
}
const Comp = styled(Component)`
  color: ${({ color, theme }) =>
    theme[
      THEME.COLORS[theme.mode][color]
    ]};
  `;

export default function Typography(
  props
) {
  return <Comp {...props} />;
}

Typography.propTypes = {
  color: PropTypes.string,
};

Typography.defaultProps = {
  color: THEME.COLORS.TEXT_DARK,
};