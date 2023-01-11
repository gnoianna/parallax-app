import styled, { css } from "styled-components";
import { ORANGE_COLOR } from "../../constants";

export const Header = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 88px;
  text-align: center;
  color: white;
  margin: 0px auto;
  padding-bottom: 50px;
  grid-column: 1 / 3;
  &::first-letter {
    text-transform: uppercase;
  }

  ${({ footer }) =>
    footer &&
    css`
      padding-bottom: 0px;
      color: ${ORANGE_COLOR};
      &::first-letter {
        text-transform: none;
      }
    `}

  @media (max-width: 1024px) {
    padding-bottom: 0px;
  }
`;
