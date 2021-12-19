export const initialState = {
  toggle: true,
};

const reducer = (state, action) => {
  switch (action.type) {
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
