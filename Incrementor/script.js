// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var minus50btn = document.getElementById("minus50");
var displayEL = document.getElementById("display");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus50btn = document.getElementById("plus50");
var plus10btn = document.getElementById("plus10");
var plus1btn = document.getElementById("plus1");

//event listener
minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fnc);
minus1btn.addEventListener("click", minus1fnc);
plus50btn.addEventListener("click", plus50fnc);
plus10btn.addEventListener("click", plus10fnc);
plus1btn.addEventListener("click", plus1fnc);
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

//event function

function minus50fcn() {
  //update the value of the counter (JS)
  counter = counter - 50;

  //use the counter to update the website (HTML)
  displayEL.innerHTML = counter;
}

function minus10fnc() {
  //update counter
  counter -= 10; //same as counter = counter = 10

  //update site
  displayEL.innerHTML = counter;
}

function minus1fnc() {
  //update counter
  counter -= 1;

  //update site
  displayEL.innerHTML = counter;
}

function plus50fnc() {
  counter += 50;

  displayEL.innerHTML = counter;
}
function plus10fnc() {
  counter += 10;

  displayEL.innerHTML = counter;
}
function plus1fnc() {
  counter += 1;

  displayEL.innerHTML = counter;

  // Update site
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

function updateStory() {
  // Save the user's word to a variable
  var word = stringInEl.value;

  // Update the story variable (JS)
  story += word + " ";
  console.log(story);

  // Clear the input field
  stringInEl.value = "";

  // Update the site to show story
  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);

function round3() {
  // -5 to 5
  // var rand = Math.random() * (5 - (-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

function round1() {
  // Create random dec 0 - 1
  let rand = Math.random();
  // Round to 3 dec places
  rand = rand.toFixed(3);
  console.log(rand);

  // Update site
  document.getElementById("rand1-out").innerHTML = rand;
}

// Random # from x to y:
// Math.random() * (y - x) + x

// E.g. If I want a random # from 1 to 3:
// var rand = Math.random() * (3 - 1) + 1
// rand = Math.round(rand);

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // Every click, add another candy to the container
  picContainer.innerHTML += "<img width='50px' src='images/rockets.jpg'>";
}
