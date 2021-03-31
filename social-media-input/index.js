// Counter div
const counterFooter = document.querySelector("#counterFooter");
// Text area where user types
const string = document.querySelector("#string");
// Tweet button
const tweetBtn = document.querySelector("#btn");
// Hold character num
let count = 140;

const trackCharactersLeft = (e) => {
  // regex to test characters
  const regex = /^[\sA-Za-z0-9_@.,';=-][/#&+-]*$/;
  const stringLength = string.value.length;

  // reset counter if there is no input
  if (stringLength === 0) count = 140;

  // update counter if there is a match
  // add numbers back to the counter if user backspaces
  if (e.key.match(regex) && e.which !== 8) {
    count -= 1;
  } else if (e.which === 8 && count < 140) {
    count += 1;
  }

  // change color of counter to warn user of limited characters left
  if (count <= 20) {
    counterFooter.style.color = "red";
  } else if (count > 20) {
    counterFooter.style.color = "#fff";
  }

  // disable button if there are no characters left
  if (count < 0) tweetBtn.disabled = true;

  // update counter to DOM
  counterFooter.textContent = `${count}/140`;
};

string.addEventListener("keydown", trackCharactersLeft);
