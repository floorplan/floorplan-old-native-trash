import React from "react";
import PropTypes from "prop-types";
import styledWeb from "styled-components";
import styledNat from "styled-components/native";
import styled from "./styled";

const Platform = Platform || {};

let Component;
if (
  Platform &&
  (Platform.OS === "ios" ||
    Platform.OS === "android")
) {
  Component = styledNat.View``;
} else {
  Component = styledWeb.div``;
}
const Comp = styled(Component)`
  /* order: ${({ order }) => order}; */
  flex-grow: ${({ flexGrow }) =>
    flexGrow};
  flex-shrink: ${({ flexShrink }) =>
    flexShrink};
  flex-basis: ${({ flexBasis }) =>
    flexBasis};
  /* flex: ${({ flex }) => flex}; */
  /* align-self: ${({ alignSelf }) =>
    alignSelf}; */
`;

export default function Box(props) {
  return <Comp {...props} />;
}

Box.propTypes = {
  // order: PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.string,
  // ]) /* default is 0 */,
  flexGrow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]) /* default 0 */,
  flexShrink: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]) /* default 1 */,
  flexBasis: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]) /* default auto */,
  // flex: PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.string,
  // ]),
  // alignSelf: PropTypes.oneOf([
  //   "auto",
  //   "flex-start",
  //   "flex-end",
  //   "center",
  //   "baseline",
  //   "stretch",
  // ]),
};

Box.defaultProps = {
  // order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
};
