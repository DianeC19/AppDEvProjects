let countdown;
const value = document.getElementById('value');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    let timeLeft = 30;
    value.textContent = timeLeft;

    // Disable the start button to prevent multiple clicks
    startBtn.disabled = true;
    resetBtn.disabled = true; // Disable reset during countdown

    countdown = setInterval(() => {
        timeLeft--;
        value.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            startBtn.disabled = false; // Re-enable start button
            resetBtn.disabled = false; // Enable reset button
        }
    }, 500);
}

function resetTimer() {
    clearInterval(countdown); // Stop the countdown if it's running
    value.textContent = 30; // Reset the displayed time
    startBtn.disabled = false; // Re-enable start button
    resetBtn.disabled = false; // Enable reset button
}