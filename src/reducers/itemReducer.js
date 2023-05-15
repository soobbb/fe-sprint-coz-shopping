import { DELETE, ADD } from "../actions";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const addgeneralProducts = {
        id: state.generalProducts,
        img: "../images/Rectangle 4-25.png",
      };
      return {
        ...state,
        generalProducts: [addgeneralProducts, ...state.generalProducts],
      };
    case DELETE:
      return {
        ...state,
        generalProducts: state.counselorList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default itemReducer;