import styled from "styled-components";
import { ParallaxImage } from "../atoms/ParallaxImage";
import { ParallaxText } from "../atoms/ParallaxText";
import useLazyLoadingObserver from "../hooks/useLazyLoadingObserver";

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const options = { root: null, rootMargin: "500px", threshold: 0.25 };

const Parallax = () => {
  const [containerRef, isVisible] = useLazyLoadingObserver(options);

  return (
    <StyledWrapper ref={containerRef}>
      {isVisible && (
        <>
          <ParallaxText>let's go</ParallaxText>
          <ParallaxImage order={2} src="./first-section/skier.png" />
          <ParallaxImage order={1} src="./first-section/background.png" />
        </>
      )}
    </StyledWrapper>
  );
};

export default Parallax;
