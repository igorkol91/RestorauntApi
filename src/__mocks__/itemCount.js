const meals = document.createElement('main');
meals.id = 'mealsID';

const countMeals = () => {
  const container = `<main class='main-container'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </main>`;
  const mealsNumber = Array.from(container.childNodes).length;
  meals.innerText = `${mealsNumber} Meals`;
  console.log(mealsNumber);
  return mealsNumber;
};

export default countMeals;