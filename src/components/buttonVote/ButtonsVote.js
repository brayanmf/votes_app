import { useDispatch } from "react-redux";
import { sumVote } from "../../store/actions";
import "./ButtonsVote.css";

const Buttons_votes = ({ name, id }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(sumVote(e));
  };
  return (
    <button
      type="button"
      onClick={() => handleClick(id)}
      className="content-header__btn"
    >
      {name}
    </button>
  );
};

export default Buttons_votes;
