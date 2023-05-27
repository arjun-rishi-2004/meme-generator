const generateBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImg = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.textContent = title; // Use textContent instead of innerHTML
  memeAuthor.textContent = author; // Use textContent instead of innerHTML
};


const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes/2")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateBtn.addEventListener("click", generateMeme);
