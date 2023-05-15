export const ADD = "ADD";
export const DELETE = "DELETE";

export const Bookmark = (id) => {
  return {
    type: ADD,
    payload: {
      id,
    },
  };
};
export const unBookmark = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};
