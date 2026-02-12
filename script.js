const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const typedText = document.getElementById("typedText");
const music = document.getElementById("bgMusic");

const message = "kamu selalu menjadi alasan untuk ku selalu bersemangat dan terus berkembang, aku sangat berharap kamu selalu bahagia, dan aku harap kamu selalu menjadi versi terbaik dari dirimu. Aku Selalu Mencintaimu.";

let index = 0;

function typeEffect() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeEffect, 45);
  }
}

function fadeInMusic() {
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.4) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

startBtn.addEventListener("click", () => {
  intro.classList.remove("active");

  setTimeout(() => {
    main.classList.add("active");
    fadeInMusic();
    typeEffect();
  }, 800);
});
