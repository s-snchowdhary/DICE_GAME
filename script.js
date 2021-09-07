let randomNum1 = Math.floor(Math.random() * 6) + 1;
const img1 = document.querySelector(".img1");
img1.setAttribute("src", `images/dice${randomNum1}.png`);

let randomNum2 = Math.floor(Math.random() * 6) + 1;
const img2 = document.querySelector(".img2");
img2.setAttribute("src", `images/dice${randomNum2}.png`);

const title = document.querySelector("h1");

if (randomNum1 > randomNum2) {
  title.textContent = "Player 1 Won!🚩";
} else if (randomNum2 > randomNum1) {
  title.textContent = "🚩Player 2 Won!";
} else {
  title.textContent = "Draw!";
}
