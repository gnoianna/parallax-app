import styled from "styled-components";
import Navigation from "../molecules/Navigation";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 4px 4px 40px -4px rgba(69, 69, 80, 0.3);
`;

const PageHeader = () => {
  return (
    <Header>
      <Navigation />
    </Header>
  );
};

export default PageHeader;
