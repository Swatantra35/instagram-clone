// LIKE BUTTON FUNCTIONALITY
document.querySelectorAll(".post").forEach((post) => {
  const likeBtn = post.querySelector(".like-btn");
  const likeCount = post.querySelector(".like-count");

  let liked = false;

  likeBtn.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent);

    if (!liked) {
      likeBtn.classList.remove("fa-regular");
      likeBtn.classList.add("fa-solid");
      likeBtn.style.color = "red";
      likeCount.textContent = count + 1;
      liked = true;
    } else {
      likeBtn.classList.remove("fa-solid");
      likeBtn.classList.add("fa-regular");
      likeBtn.style.color = "white";
      likeCount.textContent = count - 1;
      liked = false;
    }
  });

  // DOUBLE CLICK LIKE
  const postImage = post.querySelector(".post-body img");

  postImage.addEventListener("dblclick", () => {
    if (!liked) {
      likeBtn.click();
    }
  });

  // COMMENT FUNCTION
  const commentBtn = post.querySelector(".post-comment");
  const commentInput = post.querySelector(".comment-input");
  const commentBox = post.querySelector(".comments");

  commentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();

    if (text !== "") {
      const newComment = document.createElement("p");
      newComment.innerHTML = `<b>You:</b> ${text}`;
      commentBox.appendChild(newComment);
      commentInput.value = "";
    }
  });
});

// SAVE POST
document.querySelectorAll(".save-post i").forEach((saveBtn) => {
  let saved = false;

  saveBtn.addEventListener("click", () => {
    if (!saved) {
      saveBtn.classList.remove("fa-regular");
      saveBtn.classList.add("fa-solid");
      saved = true;
    } else {
      saveBtn.classList.remove("fa-solid");
      saveBtn.classList.add("fa-regular");
      saved = false;
    }
  });
});
