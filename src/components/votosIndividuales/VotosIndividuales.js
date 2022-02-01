import { useSelector } from "react-redux";
const VotosIndividuales = ({ idval }) => {
  console.log(idval);
  const candidatos = useSelector((state) =>
    state.candidatos.reduce((acc, cur) => acc + cur.votes, 0)
  );
  const state = useSelector((state) => state);
  return (
    <div className="content-main__votos">
      {state.candidatos.map((candidato) => {
        if (candidato.id === parseInt(idval))
          return state.radio === "porcentaje" ? (
            <h4>
              {candidato.name} :
              {((candidato.votes * 100) / candidatos).toFixed(0)}%
            </h4>
          ) : (
            <h4>
              {candidato.name} : {candidato.votes}
            </h4>
          );

        if (parseInt(idval) === 0)
          return state.radio === "porcentaje" ? (
            <h4>
              {candidato.name} :
              {((candidato.votes * 100) / candidatos).toFixed(0)}%
            </h4>
          ) : (
            <h4>
              {candidato.name} : {candidato.votes}
            </h4>
          );
      })}
    </div>
  );
};

export default VotosIndividuales;
