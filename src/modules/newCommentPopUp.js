import getData from "./dom";

const newCommentPopUp = (foodObject, main, menuDiv) => {
  /* 
  {idCategory: '1', strCategory: 
  'Beef', strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png', 
  strCategoryDescription: 
  'Beef is the culinary name for meat from cattle, pa… high-quality protein and essential nutrients.[2]'}
  idCategory: "1"
  strCategory: "Beef"
  strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]
  "strCategoryThumb: "https://www.themealdb.com/images/category/beef.png"[[Prototype]]: Object
  */
  const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } =
    foodObject;

  const overlay = document.createElement("section");
  overlay.className = "overlay";

  const popUp = document.createElement("div");
  popUp.className = "pop-up";

  const closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('hide');
    main.removeChild(document.querySelector('.overlay'));
    menuDiv.classList.remove('hide');
  });

  const image = document.createElement("img");
  image.className = "pop-up-image";
  image.src = strCategoryThumb;
  image.alt = strCategory;

  const titleContainer = document.createElement("h1");
  titleContainer.className = "pop-up-title";
  titleContainer.textContent = strCategory;

  const descriptionContainer = document.createElement("p");
  descriptionContainer.className = "pop-up-description";
  descriptionContainer.textContent = strCategoryDescription;

  const numberOfCommentsContainer = document.createElement("h2");
  numberOfCommentsContainer.className = "num-of-comments";
  numberOfCommentsContainer.textContent = `Comments(${2})`;

  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";

  const comment = document.createElement("p");
  comment.className = "comment";
  comment.textContent = `Date Name: The comment`;

  commentsContainer.appendChild(comment);

  const newCommentHeading = document.createElement("h2");
  newCommentHeading.className = "new-comment-heading";
  newCommentHeading.textContent = "Add a comment";

  const form = document.createElement("div");
  form.className = "form";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "name";
  input.placeholder = "Your name";

  const insightBox = document.createElement("textarea");
  insightBox.className = "insight";
  insightBox.placeholder = "Your insights";

  const commentButton = document.createElement("button");
  commentButton.className = "comment-button";
  commentButton.textContent = "Comment";

  form.append(input, insightBox, commentButton);

  popUp.append(
    closeButton,
    image,
    titleContainer,
    descriptionContainer,
    numberOfCommentsContainer,
    commentsContainer,
    newCommentHeading,
    form
  );

  overlay.appendChild(popUp);

  return overlay;
};

export default newCommentPopUp;