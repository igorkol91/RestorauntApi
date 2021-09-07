const main = document.querySelector('main');

// I left this one for you. Here you can take the id from the object we are displaying
// data.categories[0].idCategory

const displayData = (data) => {
  // create elements for a menu item
  const menuDiv = document.createElement('div');
  const menuImg = document.createElement('img');
  const menuHeadline = document.createElement('h3');
  const menuText = document.createElement('p');
  // put classes
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-4';
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  menuText.innerHTML = data.strCategoryDescription;
  menuDiv.append(menuImg, menuHeadline, menuText);
  main.appendChild(menuDiv);
};

const getData = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((response) => response.json())
  .then((data) => data.categories.forEach((element) => {
    displayData(element);
  }));

export default getData;