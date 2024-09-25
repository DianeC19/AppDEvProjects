let countdown;
const value = document.getElementById('value');
const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', startTimer);

function startTimer() {
    let timeLeft = 30;
    value.textContent = timeLeft;

    // Disable the button to prevent multiple clicks
    startBtn.disabled = true;

    countdown = setInterval(() => {
        timeLeft--;
        value.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            startBtn.disabled = false; // Re-enable button after countdown
        }
    }, 1000);
}