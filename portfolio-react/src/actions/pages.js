function getAllPages(request) {
  return {
    type: "LIST_PAGES",
    payload: request,
  };
}

export default getAllPages;
