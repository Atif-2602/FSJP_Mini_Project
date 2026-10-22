// =========================
// Guess The Number Game
// =========================

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const userGuess = document.getElementById("userGuess");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attemptCount = document.getElementById("attemptCount");
const playAgain = document.getElementById("playAgain");

checkBtn.addEventListener("click", function() {
    let val = Number(userGuess.value);

    if (!val || val < 1 || val > 100) {
        message.textContent = "Please enter a number between 1 and 100";
        message.className = "message wrong";
        userGuess.value = "";
        userGuess.focus();
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

    if (val < secretNumber) {
        message.textContent = "Too low! Try a higher number";
        message.className = "message wrong";
    } else if (val > secretNumber) {
        message.textContent = "Too high! Try a lower number";
        message.className = "message wrong";
    } else {
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts`;
        message.className = "message correct";
        checkBtn.disabled = true;
        userGuess.disabled = true;
        playAgain.classList.remove("hidden");
    }

    userGuess.value = "";
    userGuess.focus();
});

playAgain.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptCount.textContent = 0;
    message.textContent = "";
    message.className = "message";
    checkBtn.disabled = false;
    userGuess.disabled = false;
    playAgain.classList.add("hidden");
    userGuess.value = "";
    userGuess.focus();
});