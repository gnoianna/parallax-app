import PageHeader from "./components/organisms/PageHeader";
import Hiking from "./components/pages/Hiking";
import Relax from "./components/pages/Relax";
import Skiing from "./components/pages/Skiing";
import NavigationProvider from "./context/NavigationContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 400;
    box-sizing: border-box;
    background-color: #322d2d;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <NavigationProvider>
      <PageHeader />
      <Skiing></Skiing>
      <Hiking></Hiking>
      {/* <Relax></Relax> */}
      <GlobalStyle />
    </NavigationProvider>
  );
}

export default App;
