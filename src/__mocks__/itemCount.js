const meals = document.createElement('label');

const countMeals = (container) => {
  const mealsNumber = Array.from(container.childNodes).length;
  meals.innerText = `${mealsNumber} Meals`;
  return parseInt(Array.from(container.childNodes).length, 10);
};

export default countMeals;