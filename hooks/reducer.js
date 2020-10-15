const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + payload.count
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - payload.count
      };
    case "SET_NAME":
      return {
        ...state,
        name: payload.name
      };
    case "SET_PHONE":
      return {
        ...state,
        name: payload.phone
      };
    default:
      throw new Error("Unexpected action");
  }
};

export default reducer;
