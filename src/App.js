import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext/Product.Context";
import Remove from "./components/Remove/Remove";
import Create from "./components/Create/Create";
import EditBudgete from "./components/EditBudgete/EditBudget";
import CampaignInfo from "./components/CampaingInfo/CampaignInfo";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/remove/:id">
              <Remove></Remove>
            </Route>
            <Route path="/create/">
              <Create></Create>
            </Route>
            <Route path="/editbudgete/">
              <EditBudgete></EditBudgete>
            </Route>
            <Route path="/info/:id">
              <CampaignInfo></CampaignInfo>
            </Route>
            <Route path="/edit/:id">
              <Edit></Edit>
            </Route>
          </Switch>
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
