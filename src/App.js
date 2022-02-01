import "./App.css";
import ButtonsVotes from "./components/buttonVote/ButtonsVote";
import TotalVotos from "./components/totalVotos/TotalVotos";
import VotosIndividuales from "./components/votosIndividuales/VotosIndividuales";
import Filtro from "./components/filtro/Filtro";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const [idval, setIdval] = useState(0);
  const candidatos = useSelector((state) => state.candidatos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [fetchTodos]);
  return (
    <div className="App">
      <div className="content-header">
        {candidatos.map((candidato) => (
          <ButtonsVotes
            key={candidato.id}
            id={candidato.id}
            name={candidato.name}
          />
        ))}
      </div>
      <div className="content-aside">
        <h3>Ver</h3>
        <Filtro setIdval={setIdval} />
      </div>
      <div className="content-main">
        <TotalVotos />

        <VotosIndividuales idval={idval} />
      </div>
    </div>
  );
}

export default App;
