import styled from "styled-components";
import { BLACK_COLOR } from "../../constants";

const StyledButton = styled.button`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  width: fit-content;
  padding: 18px 40px;
  background-color: ${({ color }) => color || BLACK_COLOR};
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.85;
  }
`;

const Button = ({ text, color }) => {
  return <StyledButton color={color}>{text}</StyledButton>;
};

export default Button;
