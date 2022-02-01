import { useSelector } from "react-redux";

const TotalVotos = () => {
  const candidatos = useSelector((state) =>
    state.candidatos.reduce((acc, cur) => acc + cur.votes, 0)
  );
  const radio = useSelector((state) => state.radio);

  return (
    <div className="content-main__total">
      {radio === "porcentaje" ? (
        <h3>Votos en Porcentaje% </h3>
      ) : (
        <h3>Total de Votos : {candidatos}</h3>
      )}
    </div>
  );
};

export default TotalVotos;
