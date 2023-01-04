import styled from "styled-components";

export const ParallaxImage = styled.img`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: ${({ order }) => order};
`;
