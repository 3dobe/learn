// basic, physical
// up+ down-
var g = -3; // px/(s*s)
var birdY = 0; // px
var birdVy = 0; // px/s
var birdVyA = 180; // px/s

// frame transition
var fps = 60; // frame per s
var mspf = 1000 / fps;  // ms per refresh
g = g / fps;
birdVy = birdVy / fps;
birdVyA = birdVyA / fps;

// timer
var gameTimerId;

// auto start
startGame();

// keyboard
function onKeyDown(event) {
  if (/* Key X */ 88 === event.keyCode) {
    birdRushUp();
  }
}

function startGame() {
  // keep updating game
  gameTimerId = setInterval(updateGame, mspf);
  // bind events
  $(document).on('keydown', onKeyDown);
}
function stopGame() {
  // stop updating game
  clearInterval(gameTimerId);
  // unbind events
  $(document).off('keydown', onKeyDown);
}
function updateGame() {
  // log
  $('#log').text('birdY: ' + Math.round(birdY));
  // move bird
  birdMove();
  // detect game
  detectGame();
}
function detectGame() {
  if (birdY < -500) {
    stopGame();
    alert('Bird died.');
  }
}

function birdMove() {
  birdVy = birdVy + g;
  birdY = birdY + birdVy;
  $('.bird').css({
    top: 200-birdY
  });
}
function birdRushUp() {
  birdVy = birdVyA;
}