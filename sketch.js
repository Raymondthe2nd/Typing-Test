let wordList = [
  "cat","dog","sun","sky","red","blue","tree","rock","fish","bird",
  "jump","fast","slow","kind","cool","warm","cold","fire","snow","rain",
  "wind","leaf","star","moon","milk","sand","wave","road","path","hill",
  "lake","seed","root","stem","grow","play","game","time","word","type",
  "light","dark","soft","hard","easy","quick","smart","small","large",
  "house","chair","table","water","bread","apple","grape","peach","berry",
  "sweet","salty","spicy","happy","sad","angry","laugh","smile","think",
  "brain","heart","hands","feet","mouth","teeth","sleep","dream","night",
  "day","week","month","year","clock","watch","phone","cable","mouse",
  "drive","truck","train","plane","boat","ship","river","ocean","beach",
  "stone","metal","glass","paper","pencil","music","sound","noise","quiet",
  "green","brown","black","white","yellow","purple","orange","silver",
  "gold","magic","power","energy","focus","speed","skill","level","score",
  "point","round","start","begin","again","reset","press","enter","space",
  "shift","click","touch","swipe","move","drag","drop","push","pull",
  "earth","world","space","stars","orbit","solar","pixel","frame","code",
  "logic","array","value","input","output","debug","error","build","test"
];

let targetWord = "";
let userInput = "";
let startTime = 0;
let endTime = 0;
let finished = false;
let wpm = 0;

function setup() {
  createCanvas(600, 300);
  textAlign(CENTER, CENTER);
  textSize(32);
  newWord();
}

function draw() {
  background(20);

  fill(255);
  text("Type the word as fast as you can", width/2, 40);

  fill(0, 200, 255);
  text(targetWord, width/2, 120);

  fill(255);
  text(userInput, width/2, 180);

  if (finished) {
    fill(0, 255, 0);
    text("WPM: " + nf(wpm, 1, 2), width/2, 240);
    text("Press ENTER for new word", width/2, 280);
  }
}

function keyTyped() {
  if (finished) return;

  if (key.length === 1 && key.match(/[a-z]/i)) {
    userInput += key;

    if (userInput === targetWord) {
      endTime = millis();
      let seconds = (endTime - startTime) / 1000;
      wpm = (targetWord.length * 12) / seconds;
      finished = true;
    }
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    userInput = userInput.slice(0, -1);
  }

  if (keyCode === ENTER && finished) {
    newWord();
  }
}

function newWord() {
  targetWord = random(wordList);
  userInput = "";
  finished = false;
  startTime = millis();
}
