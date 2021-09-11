const updateComments = async (
  idCategory,
  getComments,
  commentsContainer,
  numberOfCommentsContainer,
  commentsCounter,
  createTableRow,
  commentsObject,
) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/?item_id=${idCategory}`;

  const allComments = await getComments(url);

  if (!allComments.error) {
    commentsContainer.innerHTML = '';
    commentsContainer.appendChild(
      createTableRow('headerRow', 'Date', 'Name', 'Comment'),
    );
    commentsObject.numberOfComments = commentsCounter(allComments);

    allComments.forEach((each) => {
      numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments})`;
      commentsContainer.appendChild(
        createTableRow('row', each.creation_date, each.username, each.comment),
      );
    });
  } else {
    commentsContainer.innerHTML = '';
    numberOfCommentsContainer.innerHTML = 'Comments(0)';
  }
};

export default updateComments;
