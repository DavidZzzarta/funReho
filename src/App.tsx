import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { Mision } from "./pages/Mision";
import { Recorrido } from "./pages/Recorrido";
import { Plan } from "./pages/Plan";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mision" component={Mision} />
        <Route path="/recorrido" component={Recorrido} />
        <Route path="/plan" component={Plan} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
}

export default App;
