const meals = document.createElement('p');

const countMeals = (container) => {
  const mealsNumber = Array.from(container.childNodes).length;
  meals.innerText = `${mealsNumber} Meals`;
};

export default countMeals;