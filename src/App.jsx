import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
