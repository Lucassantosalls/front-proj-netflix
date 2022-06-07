import { SigIn } from '../components/SigIn';
import { SigUp } from '../components/SigUp';
import { Switch, Route } from "react-router-dom";
import { Filmes } from '../components/Filmes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/sigup" exact component={SigUp} />
      <Route path="/signin" exact component={SigIn} />
      <Route path="/titulo" exact component={Filmes}></Route>
    </Switch>
  );
}