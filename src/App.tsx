import { BrowserRouter as Router, Route } from "react-router-dom";
import { SigIn } from "./components/SigIn";
import { SigUp } from "./components/SigUp";
import { Filmes } from "./components/Filmes";
import { Categorias } from "./components/Filmes_categorias";
import { CrudFilme } from "./components/Crud"; 
import { FilmesAssistidos } from "./components/FilmesAssistidos";
import { FilmesFavoritos } from "./components/FilmesFavoritos";

export function App() {

  return (
    <>
    <Router>
        <Route path="/sigup" exact component={SigUp} />
          <Route path="/signin" exact component={SigIn} />
          <Route path="/titulo" exact component={Filmes}></Route>
          <Route path="/categoria" exact component={Categorias}></Route>
          <Route path="/crudFilme" exact component={CrudFilme}></Route>
          <Route path="/assistidos" exact component={FilmesAssistidos}></Route>
          <Route path="/favoritos" exact component={FilmesFavoritos}></Route>
        </Router>
    </>
  )
}
