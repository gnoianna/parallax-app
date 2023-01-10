import styled from "styled-components";
import { BLACK_COLOR, ORANGE_COLOR } from "../../constants";

const Link = styled.li`
  color: ${BLACK_COLOR};
  padding: 10px 10px;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid ${ORANGE_COLOR};
  }
  &:hover:not(.active) {
    border-bottom: 4px solid ${BLACK_COLOR};
  }
`;

export default Link;
