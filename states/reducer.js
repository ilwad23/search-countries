export const initialState = {
  toggle: true,
  inputValue: "",
  filterValue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setFilterValue":
      console.log(action.val);
    return {
          ...state,
          filterValue: action.val,
        };
    case "setInputValue":
    return {
          ...state,
          inputValue: action.val,
        };
    case "toggle":
        return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
