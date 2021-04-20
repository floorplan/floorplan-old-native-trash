import PropTypes from "prop-types";
import styledWeb from "styled-components";
import styledNat from "styled-components/native";
import styled from "./styled";
import {Platform} from "react-native";

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
  display: flex;
  flex-direction: ${({
    flexDirection,
  }) => flexDirection};
  flex-wrap: ${({ flexWrap }) =>
    flexWrap};
  flex-flow: ${({ flexFlow }) =>
    flexFlow};
  justify-content: ${({
    justifyContent,
  }) => justifyContent};
  align-items: ${({ alignItems }) =>
    alignItems};
  align-content: ${({ alignContent }) =>
    alignContent};
`;

export default function Box(props: any) {
  return <Comp {...props} />;
}

Box.propTypes = {
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  flexWrap: PropTypes.oneOf([
    "nowrap",
    "wrap",
    "wrap-reverse",
  ]),
  flexFlow: PropTypes.string, //column wrap;
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right",
    "safe",
    "unsafe",
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline",
    "start",
    "end",
    "self-start",
    "self-end",
    "safe",
    "unsafe",
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "stretch",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline",
    "safe",
    "unsafe",
  ]),
  children: PropTypes.node,
};

Box.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "flex-start",
};
