import commentsCounter from './commentsCounter.js';
import createTableRow from './createTableRow.js';
import getComments from './getComments.js';
import postComment from './postComment.js';
import updateComments from './updateComments.js';

const newCommentPopUp = (foodObject, main, menuDiv) => {
  const {
    idCategory, strCategoryThumb, strCategory, strCategoryDescription,
  } = foodObject;

  const commentsObject = {
    numberOfComment: 0,
  };
  const overlay = document.createElement('section');
  overlay.className = 'overlay';

  const popUp = document.createElement('div');
  popUp.className = 'pop-up';

  const closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.innerHTML = '&times;';

  closeButton.addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('hide');
    main.removeChild(document.querySelector('.overlay'));
    document.querySelector('body').classList.remove('stop-scrolling');
    menuDiv.classList.remove('hide');
  });

  const image = document.createElement('img');
  image.className = 'pop-up-image';
  image.src = strCategoryThumb;
  image.alt = strCategory;

  const titleContainer = document.createElement('h1');
  titleContainer.className = 'pop-up-title';
  titleContainer.textContent = strCategory;

  const descriptionContainer = document.createElement('p');
  descriptionContainer.className = 'pop-up-description';
  descriptionContainer.textContent = strCategoryDescription;

  const numberOfCommentsContainer = document.createElement('h2');
  numberOfCommentsContainer.className = 'num-of-comments';
  numberOfCommentsContainer.innerHTML = 'Comments(<span class="c-loading">Loading...</span>)';

  const commentsContainer = document.createElement('table');
  commentsContainer.className = 'comments-table';

  commentsContainer.innerHTML = '<span class="table-loading">Loading...</span>';

  updateComments(
    idCategory,
    getComments,
    commentsContainer,
    numberOfCommentsContainer,
    commentsCounter,
    createTableRow,
    commentsObject,
    { post: false },
  );

  const newCommentHeading = document.createElement('h2');
  newCommentHeading.className = 'new-comment-heading';
  newCommentHeading.textContent = 'Add a comment';

  const form = document.createElement('div');
  form.className = 'form';

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'name';
  input.placeholder = 'Your name';

  const insightBox = document.createElement('textarea');
  insightBox.className = 'insight';
  insightBox.placeholder = 'Your insights';

  const commentButton = document.createElement('button');
  commentButton.addEventListener('click', async () => {
    const nameField = document.querySelector('.name');
    const insightField = document.querySelector('.insight');
    const { value: name } = nameField;
    const { value: insight } = insightField;
    if (name && insight) {
      const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/';
      const body = {
        item_id: idCategory,
        username: name,
        comment: insight,
      };
      const day = new Date();
      let month = (day.getMonth() + 1).toString();
      if (month.length === 1) {
        month = `0${month}`;
      }
      const date = `${day.getFullYear()}-${month}-${day.getDate()}`;
      const row = createTableRow('row', date, name, insight);
      commentsContainer.appendChild(row);
      numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments + 1})`;
      commentsObject.numberOfComments += 1;
      nameField.value = '';
      insightField.value = '';
      const result = await postComment(body, url);
      if (!result.ok) {
        nameField.value = name;
        insightField.value = insight;
        commentsContainer.removeChild(row);
        numberOfCommentsContainer.textContent = `Comments(${commentsObject.numberOfComments - 1})`;
        commentsObject.numberOfComments -= 1;
      }
    }
  });
  commentButton.className = 'comment-button';
  commentButton.textContent = 'Comment';

  form.append(input, insightBox, commentButton);

  popUp.append(
    closeButton,
    image,
    titleContainer,
    descriptionContainer,
    numberOfCommentsContainer,
    commentsContainer,
    newCommentHeading,
    form,
  );

  overlay.appendChild(popUp);

  return overlay;
};

export default newCommentPopUp;
