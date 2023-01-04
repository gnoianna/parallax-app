import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto repeat(5, 1fr);
  column-gap: 40px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    gap: 20px;
  }
`;

const SectionHeader = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 88px;
  text-align: center;
  color: white;
  margin: 0px auto;
  padding-bottom: 50px;
  grid-column: 1 / 3;
  @media (max-width: 1024px) {
    padding-bottom: 0px;
  }
`;

const Paragraph = styled.p`
  margin: 0 auto;
  padding: 40px 0px;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ParallaxContent = () => {
  return (
    <StyledWrapper>
      <SectionHeader>Skiing</SectionHeader>
      <Image src="./first-section/background.png" style={{ gridColumn: "1/2", gridRow: "2/5" }}></Image>
      <Paragraph style={{ gridColumn: "2/3", gridRow: "2/4" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi atque neque, natus nostrum illum molestias
        facilis aperiam, a amet nihil vel quo ipsam dicta nam perspiciatis velit molestiae odit. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Suscipit ratione natus obcaecati voluptate, tempore modi a cum, nostrum ea
        dolores mollitia atque voluptates. Voluptatibus deleniti fuga ipsum ad. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nihil eaque vel eligendi? Nisi quibusdam nemo unde non molestiae quisquam quos enim, illum
        vitae nobis debitis consequuntur, voluptates aliquam pariatur rerum.
      </Paragraph>
      <Image src="./first-section/background.png" style={{ gridColumn: "2/3", gridRow: "4/6" }}></Image>
      <Paragraph style={{ gridColumn: "1/3", gridRow: "6/7" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi atque neque, natus nostrum illum molestias
        facilis aperiam, a amet nihil vel quo ipsam dicta nam perspiciatis velit molestiae odit. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Suscipit ratione natus obcaecati voluptate, tempore modi a cum, nostrum ea
        dolores mollitia atque voluptates. Voluptatibus deleniti fuga ipsum ad. Aperiam, voluptatum? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Natus nisi voluptate mollitia ab eius consequuntur quas, animi sint!
        Deserunt dolorum expedita commodi deleniti odit blanditiis similique vitae quibusdam est obcaecati? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eos quo nisi excepturi quia veritatis dolor ab, voluptate
        consequuntur placeat explicabo earum rem hic a quos temporibus blanditiis illum nesciunt esse.
      </Paragraph>
    </StyledWrapper>
  );
};

export default ParallaxContent;
