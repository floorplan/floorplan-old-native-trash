import styledWeb from "styled-components";
import styledNat from "styled-components/native";
import {Platform} from "react-native";

let styled = styledWeb;
if (
  Platform &&
  (Platform.OS === "ios" ||
    Platform.OS === "android")
) {
  styled = styledNat;
}

export default styled;
