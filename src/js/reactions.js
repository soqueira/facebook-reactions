() => {
  let btns = document.querySelectorAll(".reaction");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      GetReaction(i);
    });
  }
};

const GetReaction = index => {
  const reactArr = [
    { id: 0, name: "Like", url: "https://i.imgur.com/c3cuy55.png" },
    { id: 1, name: "Amei", url: "https://i.imgur.com/Z4d86La.png" },
    { id: 2, name: "Haha", url: "https://i.imgur.com/K23r4ci.png" },
    { id: 3, name: "Uau", url: "https://i.imgur.com/GoWf7Bo.png" },
    { id: 4, name: "Triste", url: "https://i.imgur.com/lujSSPd.png" },
    { id: 5, name: "Grr", url: "https://i.imgur.com/zyayeKC.png" },
    { id: 6, name: "Like ", url: "https://i.imgur.com/DwJTeBK.png" }
  ];
  reactArr.forEach(item => {
    if (item.id === index) {
      setReactions(item.name, item.url);
    }
  });
};

const setReactions = (name, url) => {
  const reactionNameSpan = document.getElementsByClassName("ReactionName")[0];
  const likesSection = document.getElementsByClassName("likes-section")[0];
  const likesSectionImg = document.getElementsByClassName("likesSectionImg")[0];
  const likeReactionImg = document.getElementsByClassName("likeReactionImg")[0];
  const likeBtn = document.getElementsByClassName("likeBtn")[0];

  likesSectionImg.src = url;
  likeReactionImg.src = url;
  likesSection.classList.add("likes-section-active");
  likeBtn.classList.add("active");
  reactionNameSpan.innerHTML = name;
  reactionNameSpan.dataset.name = name;
};
() => {
  const likesSection = document.getElementsByClassName("likes-section")[0];
  const likeBtn = document.getElementsByClassName("likeBtn")[0];
  likeBtn.addEventListener("click", () => {
    const classBtn = document.getElementsByClassName("likeBtn")[0].className;
    if (classBtn.indexOf("active") !== -1) {
      GetReaction(6);
      likeBtn.classList.remove("active");
      likesSection.classList.remove("likes-section-active");
    } else {
      GetReaction(0);
      likeBtn.classList.add("active");
    }
  });
};
