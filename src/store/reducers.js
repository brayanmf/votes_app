import { ADD_CONTENT, UPDATE_VOTE, UPDATE_RADIO } from "./types";

const initialState = { candidatos: [], radio: "total" };

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      const candidatos = [...state.candidatos, ...action.payload];

      return {
        ...state,
        candidatos,
      };

    case UPDATE_VOTE:
      let newArray = [...state.candidatos];
      newArray = newArray.map((e) => {
        if (e.id === action.payload) e.votes += 1;

        return e;
      });

      return {
        ...state,
        candidatos: newArray,
      };
    case UPDATE_RADIO:
      return {
        ...state,
        radio: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default reducer;
