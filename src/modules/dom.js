import newCommentPopUp from './newCommentPopUp.js';
import { postLikes, getLikes } from './likes.js';
import countMeals from './itemCount.js';

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
  const likesBtn = document.createElement('i');
  likesBtn.classList.add('far', 'fa-thumbs-up');
  // put classes and values
  menuDiv.classList = 'menuDiv col-sm-12 col-md-6 col-lg-3 my-4';
  menuText.classList = 'menuText';
  likesAndComments.classList = 'likesComments';
  commentsBtn.classList = 'comment-btn';
  commentsBtn.innerText = 'Comment';

  likesCount.classList = 'likesCountP';
  likesCount.innerText = '0 likes';
  likesCount.id = data.idCategory;
  // put values to every element
  menuHeadline.innerHTML = data.strCategory;
  menuImg.src = data.strCategoryThumb;
  let description = data.strCategoryDescription;
  if (description.length > 70) {
    description = `${description.substr(0, 70)}...`;
  }
  menuText.innerHTML = description;
  likesAndComments.append(commentsBtn, likesCount, likesBtn);
  menuDiv.append(menuImg, menuHeadline, menuText, likesAndComments);
  main.appendChild(menuDiv);
  commentsBtn.addEventListener('click', async () => {
    const overlay = newCommentPopUp(data, main, menuDiv);
    main.appendChild(overlay);
    document.querySelector('.overlay').classList.remove('hide');
    document.querySelector('body').classList.add('stop-scrolling');
    menuDiv.classList.add('hide');
  });
  likesBtn.addEventListener('click', (e) => {
    postLikes(likesBtn);
    // set timeout to give postLikes the time to post the like value
    // one second later I get everything and the like is succesfully updated
    const increasedLike = parseInt(e.target.parentNode.childNodes[1].innerText, 10) + 1;
    e.target.parentNode.childNodes[1].innerText = `${increasedLike.toString()} Likes`;
    setTimeout(() => {
      getLikes();
    }, 1000);
  });
};

const getData = (foods) => {
  main.innerHTML = '';
  const countArray = [];
  return fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((data) => {
      foods = data;
      foods.categories.forEach((element, index) => {
        countArray.push(index);
        if (index === data.categories.length - 1) {
          document.querySelector('.header-item').innerHTML = countMeals(countArray);
        }
        return displayData(element);
      });
    });
};
export default getData;
