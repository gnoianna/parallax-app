import { useContext } from "react";
import styled from "styled-components";
import Link from "../atoms/Link";
import { scrollToElement } from "../constants";
import { NavigationContext } from "../contexts/NavigationContext";

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
`;

const Navigation = () => {
  const { loadedSections, activeNavLink, setActiveNavLink } = useContext(NavigationContext);

  return (
    <nav>
      <List>
        {[...loadedSections].map(({ sectionName, sectionId }, index) => (
          <Link
            key={index}
            onClick={() => {
              setActiveNavLink(sectionName);
              scrollToElement(sectionId);
            }}
            className={activeNavLink === sectionName ? "active" : ""}
          >
            {sectionName}
          </Link>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
