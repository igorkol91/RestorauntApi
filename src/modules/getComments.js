const getComments = async (url) => {
  const result = await fetch(url);
  const finalResult = await result.json();
  console.log(9999999);
  return finalResult;
};

export default getComments;