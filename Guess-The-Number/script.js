let secret = Math.floor(Math.random() * 100) + 1;
let count = 0;

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const restart = document.getElementById("restart");

checkBtn.addEventListener("click", guessNumber);
userInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        guessNumber();
    }
});

restart.addEventListener("click", playAgain);

function guessNumber(){
    let val = Number(userInput.value);

    if(userInput.value === ""){
        message.textContent = "Please enter a number";
        message.className = "msg high";
        return;
    }

    if(val < 1 || val > 100){
        message.textContent = "Enter a number between 1 and 100";
        message.className = "msg high";
        return;
    }

    count++;
    attempts.textContent = count;

    if(val < secret){
        message.textContent = "Too low! Try a bigger number";
        message.className = "msg low";
    }else if(val > secret){
        message.textContent = "Too high! Try a smaller number";
        message.className = "msg high";
    }else{
        message.textContent = "Congratulations! You guessed the correct number";
        message.className = "msg win";
        userInput.disabled = true;
        checkBtn.disabled = true;
        restart.classList.remove("hidden");
    }

    userInput.value = "";
    userInput.focus();
}

function playAgain(){
    secret = Math.floor(Math.random() * 100) + 1;
    count = 0;
    attempts.textContent = 0;
    message.textContent = "";
    message.className = "msg";
    userInput.value = "";
    userInput.disabled = false;
    checkBtn.disabled = false;
    restart.classList.add("hidden");
    userInput.focus();
}
