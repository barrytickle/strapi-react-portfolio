const pages = (state = [], action) => {
  // console.log("Does this hit?", action);

  switch (action.type) {
    case "LIST_PAGES":
      if (action.payload) {
        return [action.payload, ...state];
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default pages;
