import BotLayout from "./BotLayout";
import { BrowserRouter } from "react-router-dom";
// import BotCollection from "./components/BotCollection"

function App() {
  return (
    <div>
      {/* <BotCollection /> */}
      <BrowserRouter>
        <BotLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
