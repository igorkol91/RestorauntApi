const restorauntObjects = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const main = document.querySelector('main');

// data.categories[0].idCategory
// console.log(data.categories[0].strCategory)
// data.categories.forEach((elem) => displayData(elem))

const displayData = (data) => {
  // create elements for a menu item
  const menuDiv = document.createElement('div');
  const menuImg = document.createElement('img');
  const menuHeadline = document.createElement('h3');
  const menuText = document.createElement('p');
  // put menuDiv and elements classes
  menuDiv.classList = 'menuDiv';
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  menuText.innerHTML = data.strCategoryDescription;
  menuDiv.append(menuImg, menuHeadline, menuText);
  main.appendChild(menuDiv);
};

const getData = fetch(restorauntObjects)
  .then((response) => response.json())
  .then((data) => data.categories.forEach((element) => {
    displayData(element);
  }));

export default getData;