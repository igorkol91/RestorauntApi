import countMeals from './itemCount.js';

const main = document.querySelector('main');

// I left this one for you. Here you can take the id from the object we are displaying
// data.categories[0].idCategory

const displayData = (data) => {
  // create elements for a menu item
  const menuDiv = document.createElement('div');
  const menuImg = document.createElement('img');
  const menuHeadline = document.createElement('h3');
  const menuText = document.createElement('p');
  const likesAndComments = document.createElement('div');
  const commentsBtn = document.createElement('button');
  const likesCount = document.createElement('p');
  const likesBtn = document.createElement('button');
  // put classes and values
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-4 my-4';
  menuText.classList = 'menuText';
  likesAndComments.classList = 'likesComments';
  commentsBtn.classList = 'comment-btn';
  commentsBtn.innerText = 'Comment';
  likesCount.classList = 'likesCountP';
  likesCount.innerText = '0';
  likesBtn.classList = 'px-5';
  likesBtn.innerText = 'Like';
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  menuText.innerHTML = data.strCategoryDescription;
  likesAndComments.append(commentsBtn, likesCount, likesBtn);
  menuDiv.append(menuImg, menuHeadline, menuText, likesAndComments);
  main.appendChild(menuDiv);
};

const getData = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((response) => response.json())
  .then((data) => data.categories.forEach((element) => {
    displayData(element);
    countMeals(main);
  }));

export default getData;