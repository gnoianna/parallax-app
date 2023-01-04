import PageHeader from "./organisms/PageHeader";
import Hiking from "./pages/Hiking";
import Relax from "./pages/Relax";
import Skiing from "./pages/Skiing";
import NavigationProvider from "./contexts/NavigationContext";

const BLOCK_TYPES = {
  SKIING: "skiing",
  HIKING: "hiking",
  RELAX: "relax",
};

function App() {
  return (
    <NavigationProvider>
      <PageHeader />
      <Skiing></Skiing>
      <Hiking></Hiking>
      <Relax></Relax>
    </NavigationProvider>
  );
}

export default App;
