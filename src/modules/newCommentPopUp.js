import getData from "./dom";
import getComments from "./getComments";
import postComment from "./postComment";

const newCommentPopUp = async (foodObject, main, menuDiv) => {
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

  //IvP42xNcmZ7sT5rp87wL    App id for comments

  const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } =
    foodObject;
  
  const overlay = document.createElement("section");
  overlay.className = "overlay";

  const popUp = document.createElement("div");
  popUp.className = "pop-up";

  const closeButton = document.createElement("button");
  closeButton.className = "close";
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    document.querySelector(".overlay").classList.add("hide");
    main.removeChild(document.querySelector(".overlay"));
    document.querySelector("body").classList.remove("stop-scrolling");
    menuDiv.classList.remove("hide");
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
  
  const commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";
  
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/?item_id=${idCategory}`;
  
  const allComments = await getComments(url);
  console.log(allComments);
  numberOfCommentsContainer.textContent = `Comments(${!allComments.error && allComments.length || 0})`;

  !allComments.error && allComments.forEach((each) => {
    const comment = document.createElement("p");
    comment.className = "comment";
    commentsContainer.appendChild(comment);
    /*
    "comment": "This is nice!",
        "creation_date": "2021-01-10",
        "username": "John"
    */
    comment.innerHTML = `<strong>${each.creation_date} ${each.username}</strong>: ${each.comment}`;
  });

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
  commentButton.addEventListener("click", async () => {
    const { value: name } = document.querySelector(".name");
    const { value: insight } = document.querySelector(".insight");

    if (name && insight) {
      const url =
        "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IvP42xNcmZ7sT5rp87wL/comments/";
      const body = {
        item_id: idCategory,
        username: name,
        comment: insight,
      };
      try {
        const result = await postComment(body, url);
        console.log("After posting", result);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log(88888);
    }
  });
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
