function playVideo() {
 let userInput = document.getElementById("search-input").value;
  let total = calculateTotal(userInput);
  let div = calculateDiv(userInput);
  let sub = calculateSub(userInput);
  let count = countLetters(userInput);
  let videoSeven = document.getElementById("videoSeven");
  let videoNotSeven = document.getElementById("videoNotSeven");
  if (
    total === 7 ||
    div === 7 ||
    sub === 7 ||
    count === 7 ||
    userInput.toLowerCase() === "thala" ||
    userInput.toLowerCase() === "mahi" ||
    userInput.toLowerCase() === "dhoni" ||
    userInput.toLowerCase() === "msd"
  ) {
    videoNotSeven.currentTime = 0;
    videoNotSeven.pause();
    videoSeven.style.display = "block";
    videoNotSeven.style.display = "none";
    videoSeven.play();
    videoSeven.currentTime = 0;
    if (count === 7) {
      showInputWithPlus();
    } else {
      numText();
    }
  } else {
    videoSeven.currentTime = 0;
    videoSeven.pause();
    videoSeven.style.display = "none";
    videoNotSeven.style.display = "block";
    videoNotSeven.play();
    aukaat();
    videoSeven.currentTime = 0;
  }
}

function calculateTotal(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total += parseInt(input[i]);
    } else {
      total += input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function calculateDiv(input) {
  let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total /= parseInt(input[i]);
    } else {
      total /= input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function calculateSub(input) {
 let total = 0;
  for (let i = 0; i < input.length; i++) {
    if (!isNaN(input[i])) {
      total -= parseInt(input[i]);
    } else {
      total -= input[i].toLowerCase().charCodeAt(0) - 96;
    }
  }
  return total;
}

function countLetters(input) {
  let lettersOnly = input.replace(/[^a-zA-Z]/g, "");
  let numberOfLetters = lettersOnly.length;
  return numberOfLetters;
}

function showInputWithPlus() {
  let userInput = document.getElementById("search-input").value;
  let result = userInput.split("").join("+");
  let total = calculateTotal(userInput);
  document.getElementById("output").innerText =
    result + " = 7 \nTHALA FOR A REASON 😍";
  playVideo(total);
}

function aukaat() {
  let userInput = document.getElementById("search-input").value;
  let result = userInput.split("").join("+");
  let total = calculateTotal(userInput);
  document.getElementById("output").innerText =
    result + " ≠ 7 \n Aukaat dikha di bhai tumne bhi 🙂";
  playVideo(total);
}

function numText() {
  let userInput = document.getElementById("search-input").value;
  let total = calculateTotal(userInput);
  let result = userInput.split("").join("+");
  document.getElementById("output").innerText =
    result + " = 7\n THALA FOR A REASON 😍";
  playVideo(total);
} 