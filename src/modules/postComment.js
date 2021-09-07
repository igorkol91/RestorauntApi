const postComment = async (body, url) => {
  console.log(body, '>>><<<', url);
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
};

export default postComment;
