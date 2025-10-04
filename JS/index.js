let startTime;
let updatedTime;
let difference = 0;
let tInterval;
let running = false;

const displayedTime = document.getElementById("displayed-time");
const toggleBtn = document.getElementById("toggle");
const resetBtn = document.getElementById("resetBtn");

toggleBtn.onclick = toggleTimer;
resetBtn.onclick = resetTimer;

function toggleTimer() {
  if (!running) {
    // Start
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 100);
    running = true;
    toggleBtn.textContent = "Stop";
  } else {
    // Stop
    clearInterval(tInterval);
    running = false;
    difference = new Date().getTime() - startTime;
    toggleBtn.textContent = "Start";
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  displayedTime.textContent = "00:00:00";
  toggleBtn.textContent = "Start";
}

function updateTime() {
  updatedTime = new Date().getTime() - startTime;

  let hours = Math.floor(updatedTime / (1000 * 60 * 60));
  let minutes = Math.floor((updatedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((updatedTime % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  displayedTime.textContent = `${hours}:${minutes}:${seconds}`;
}
