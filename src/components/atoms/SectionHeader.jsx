import styled from "styled-components";

export const SectionHeader = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 88px;
  text-align: center;
  color: ${({ color }) => color || "white"};
  margin: 0px auto;
  padding-bottom: ${({ simple }) => (simple ? "" : "50px")};
  grid-column: 1 / 3;

  @media (max-width: 1024px) {
    padding-bottom: 0px;
  }
`;
