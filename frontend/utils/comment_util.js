
export const fetchArtistComments = (artistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}/comments`
  });
};

export const createComment = (comment,artistId) => {
  return $.ajax({
    method: "POST",
    url: `/api/artists/${artistId}/comments`,
    data: {comment}
  });
};

export const updateComment = (comment,artistId) => {
  return $.ajax({
    method: "POST",
    url: `/api/artists/${artistId}/comments`,
    data: {comment}
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`

  });
};
