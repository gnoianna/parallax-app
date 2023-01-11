import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import Link from "../atoms/Link";
import { ORANGE_COLOR, scrollToElement } from "../../constants";
import { NavigationContext } from "../../context/NavigationContext";

const Nav = styled.nav`
  height: 80px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;
  display: flex;
  gap: 75px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    background-color: white;
    gap: 0px;
  }
`;

const HamburgerContainer = styled.div`
  display: none;
  height: 100%;
  width: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: flex;
    margin-left: auto;
    padding: 0px 20px;
  }
`;

const Hamburger = styled.div`
  &,
  &::after,
  &::before {
    position: absolute;
    display: none;
    width: 30px;
    height: 4px;
    content: "";
    background-color: ${ORANGE_COLOR};
    border-radius: 2px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      & {
        background-color: rgba(255, 255, 255, 0);
      }
    `}

  &::after {
    display: block;
    transform: translateY(-9px);
    ${({ isOpen }) =>
      isOpen &&
      css`
        margin-top: 0px;
        transform: rotate(45deg);
      `}
  }

  &::before {
    display: block;
    transform: translateY(9px);
    ${({ isOpen }) =>
      isOpen &&
      css`
        margin-top: 0px;
        transform: rotate(-45deg);
      `}
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;

const Navigation = () => {
  const { loadedSections, activeNavLink, setActiveNavLink } = useContext(NavigationContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  if (loadedSections.length === 0) return null;
  return (
    <Nav>
      <HamburgerContainer onClick={() => setMenuIsOpen((prev) => !prev)}>
        <Hamburger isOpen={menuIsOpen} />
      </HamburgerContainer>

      <List isOpen={menuIsOpen}>
        {[...loadedSections].map(({ sectionName, sectionId }, index) => (
          <Link
            key={index}
            onClick={() => {
              setActiveNavLink(sectionName);
              scrollToElement(sectionId);
              setMenuIsOpen(false);
            }}
            className={activeNavLink === sectionName ? "active" : ""}
          >
            {sectionName}
          </Link>
        ))}
      </List>
    </Nav>
  );
};

export default Navigation;
