import styled from "styled-components";
import useBlurEffect from "../../hooks/useBlurEffect";

const StyledParagraph = styled.p`
  margin: 0;
  padding: 40px 0px;
  color: white;

  &.blur {
    filter: blur(2px);
  }
`;

const Paragraph = ({ style }) => {
  const ref = useBlurEffect();

  return (
    <StyledParagraph ref={ref} style={style}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi atque neque, natus nostrum illum molestias
      facilis aperiam, a amet nihil vel quo ipsam dicta nam perspiciatis velit molestiae odit. Lorem ipsum, dolor sit
      amet consectetur adipisicing elit. Suscipit ratione natus obcaecati voluptate, tempore modi a cum, nostrum ea
      dolores mollitia atque voluptates. Voluptatibus deleniti fuga ipsum ad. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nihil eaque vel eligendi? Nisi quibusdam nemo unde non molestiae quisquam quos enim, illum vitae
      nobis debitis consequuntur, voluptates aliquam pariatur rerum. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Quibusdam nesciunt atque, distinctio sed et consequatur facere ducimus odio necessitatibus non animi eius
      commodi eum ut architecto debitis porro saepe aspernatur? Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Dolore dolores consequuntur quas consectetur incidunt labore eius ratione aut laboriosam doloribus eaque,
      ad, unde eos porro qui obcaecati in nisi dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </StyledParagraph>
  );
};

export default Paragraph;
