const navigation = (state = [], action) => {
  switch (action.type) {
    case "DISPLAY_NAVIGATION":
      if (action.payload) {
        return [action.payload, ...state];
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default navigation;
