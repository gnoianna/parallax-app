import styled from "styled-components";
import useLazyLoadingObserver from "../../hooks/useLazyLoadingObserver";

const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Parallax = ({ children }) => {
  const [containerRef, isVisible] = useLazyLoadingObserver();

  return (
    <StyledWrapper ref={containerRef}>{isVisible && children}</StyledWrapper>
  );
};

export default Parallax;
