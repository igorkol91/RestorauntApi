const meals = document.querySelector('#mealsID');

const countMeals = (container) => {
  const mealsNumber = Array.from(container.childNodes).length;
  meals.innerText = `${mealsNumber} Meals`;
  return mealsNumber;
};

export default countMeals;