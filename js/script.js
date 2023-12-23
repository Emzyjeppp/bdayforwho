const audio = document.querySelector("body");
audio.addEventListener("play", () => {
  body.classList.add("play-music");
});

audio.addEventListener("pause", () => {
  body.classList.remove("play-music");
});
