import styled from "styled-components";
import { ORANGE_COLOR } from "../constants";

export const ParallaxText = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: lowercase;
  font-size: 164px;
  line-height: 0.7;
  text-align: center;
  text-shadow: 4px 4px 9px rgb(69 69 80 / 30%);
  color: ${ORANGE_COLOR};
  position: absolute;
  top: 20%;
  left: 0;
  margin: 0;
  width: 100%;
  z-index: 10;
`;
