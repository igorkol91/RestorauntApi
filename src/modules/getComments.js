const getComments = async (url) => {
  const result = await fetch(url);
  const finalResult = await result.json();
  return finalResult;
};

export default getComments;