function getAllPages(request) {
  return {
    type: "DISPLAY_NAVIGATION",
    payload: request,
  };
}

export default getAllPages;
