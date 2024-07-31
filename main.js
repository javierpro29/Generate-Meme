const memeButton = document.querySelector(".meme-generator .generate-meme-btn");
const memeImg = document.querySelector(".meme-generator img");
const memeCaption = document.querySelector(".meme-generator .meme-title");
const memeCreator = document.querySelector(".meme-generator .meme-author");

const setMemeDetails = (imageUrl, caption, creator) => {
  memeImg.src = imageUrl;
  memeCaption.textContent = caption;
  memeCreator.textContent = `Meme by: ${creator}`;
};

const fetchMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data => {
      setMemeDetails(data.url, data.title, data.author);
    });
};

memeButton.addEventListener("click", fetchMeme);

fetchMeme();
