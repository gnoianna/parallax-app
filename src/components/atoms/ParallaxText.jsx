import styled from "styled-components";
import { ORANGE_COLOR } from "../../constants";
import useParallaxEffect from "../../hooks/useParallaxEffect";

const Text = styled.h1`
  font-family: "Playfair Display", serif;
  text-transform: lowercase;
  font-size: 164px;
  line-height: 0.7;
  text-align: center;
  text-shadow: 4px 4px 9px rgb(69 69 80 / 30%);
  color: ${ORANGE_COLOR};
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding-top: 25vh;
  width: 100%;
  z-index: ${({ order }) => order};
`;

const ParallaxText = ({ order, children }) => {
  const textRef = useParallaxEffect(order);
  return (
    <Text ref={textRef} order={order}>
      {children}
    </Text>
  );
};

export default ParallaxText;
