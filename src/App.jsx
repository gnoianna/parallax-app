import { createGlobalStyle } from "styled-components";
import PageHeader from "./components/organisms/PageHeader";
import Hero from "./components/pages/Hero";
import Footer from "./components/pages/Footer";
import Hiking from "./components/pages/Hiking";
import Skiing from "./components/pages/Skiing";
import Relax from "./components/pages/Relax";
import NavigationProvider from "./context/NavigationContext";

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
      <Hero />
      <Skiing />
      <Hiking />
      {/* <Relax /> */}
      <Footer />
      <GlobalStyle />
    </NavigationProvider>
  );
}

export default App;
