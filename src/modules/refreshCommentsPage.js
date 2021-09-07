import getComments from './getComments.js';

const refreshCommentsPage = async (a, b, c) => {
  await getComments(a, b, c);
};

export default refreshCommentsPage;