import styled from "styled-components";
import useParallaxEffect from "../../hooks/useParallaxEffect";

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: ${({ horizontal }) => (horizontal ? "" : "100%")};
  object-fit: cover;
  z-index: ${({ order }) => order};
`;

const ParallaxImage = ({ order, src, horizontal = false }) => {
  const imageRef = useParallaxEffect(order, horizontal);
  return <Image ref={imageRef} order={order} src={src} horizontal={horizontal} />;
};

export default ParallaxImage;
