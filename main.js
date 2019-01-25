const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function handleMove(e) {
  if (!isDown) return;
  e.preventDefault();
  // e.pageY = px from top of page
  // this.offsetTop = px from top of div to top of page
  const y = e.pageY - this.offsetTop;
  // this.offsetHeight = height in px of the div
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 3;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousedown', () => { isDown = true; });
speed.addEventListener('mouseup', () => { isDown = false; });
speed.addEventListener('mousemove', handleMove);