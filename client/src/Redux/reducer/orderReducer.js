const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATEORDER":
      return { state: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
