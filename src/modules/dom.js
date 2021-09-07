import newCommentPopUp from './newCommentPopUp.js';

// import countMeals from './itemCount.js';

const main = document.querySelector('main');

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
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-3 my-4';
  menuText.classList = 'menuText';
  likesAndComments.classList = 'likesComments';
  commentsBtn.classList = 'comment-btn';
  commentsBtn.innerText = 'Comment';

  likesCount.classList = 'likesCountP';
  likesCount.innerText = '0 likes';
  // likesBtn.classList = 'px-5';
  likesBtn.innerText = 'Like';
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  menuText.innerHTML = `${data.strCategoryDescription.split('.')[0]}.`;
  likesAndComments.append(commentsBtn, likesCount, likesBtn);
  menuDiv.append(menuImg, menuHeadline, menuText, likesAndComments);
  main.appendChild(menuDiv);
  commentsBtn.addEventListener('click', async () => {
    const overlay = await newCommentPopUp(data, main, menuDiv);
    main.appendChild(overlay);
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('body').classList.add('stop-scrolling');
    menuDiv.classList.add('hide');
  });
};

const getData = () => {
  main.innerHTML = '';
  return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => data.categories.forEach((element, index) => (index < 7 && element.strCategory !== 'Miscellaneous') && displayData(element)));
};

export default getData;