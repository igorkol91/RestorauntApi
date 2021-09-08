const meals = document.querySelector('#mealsID');

const countMeals = (container) => {
  const mealsNumber = Array.from(container.childNodes).length;
  meals.innerText = `${mealsNumber + 1} Meals`;
};

export default countMeals;