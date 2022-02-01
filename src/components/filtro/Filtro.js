import { useDispatch, useSelector } from "react-redux";

const Filtro = ({ setIdval }) => {
  const dispatch = useDispatch();
  const candidatos = useSelector((state) => state.candidatos);
  const handleChange = (e) => {
    dispatch({ type: "UPDATE_RADIO", payload: e.target.value });
  };
  const handleChangeOption = (e) => {
    setIdval(e.target.value);
  };
  return (
    <>
      <label htmlFor="porcentaje">
        <input
          type="radio"
          id="porcentaje"
          onChange={handleChange}
          name="radio1"
          value="porcentaje"
        />
        %
      </label>
      <label htmlFor="total">
        <input
          type="radio"
          id="total"
          value="total"
          onChange={handleChange}
          name="radio1"
        />
        Total
      </label>
      <label htmlFor="todos">
        <select onChange={handleChangeOption}>
          <option value={0} selected>
            Todos ...
          </option>
          {candidatos.map((candidato) => (
            <option value={candidato.id}>{candidato.name}</option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Filtro;
