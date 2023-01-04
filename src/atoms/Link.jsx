import { ORANGE_COLOR, BLACK_COLOR } from "../constants";
import styled from "styled-components";

const Link = styled.li`
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
