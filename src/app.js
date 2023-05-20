import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Pepsi from "./Pepsi";
import MountainDew from "./MountainDew";
import Dasani from "./Dasani";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/pepsi">
          <Pepsi />
        </Route>
        <Route exact path="/mountain-dew">
          <MountainDew />
        </Route>
        <Route exact path="/dasani">
          <Dasani />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;