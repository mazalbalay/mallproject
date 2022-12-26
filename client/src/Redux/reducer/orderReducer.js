const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATEORDER":
      console.log(action.payload);
      return { state: action.payload };
    default:
      return state;
  }
};

export default orderReducer;
