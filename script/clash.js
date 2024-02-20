function play() {
  hideSection("play-game");
  showSection("playground");
  continuePlay();
}

function continuePlay() {
  const display = randomAlphabet();
  const displayText = getElementByIdInnerText("displaingAlphabet");
  displayText.innerText = display;
  setBackgroundColor(display);
}

document.addEventListener("keyup", function (event) {
  const pressKey = event.key;
  const acseptedKey = document.getElementById("displaingAlphabet").innerText;
  const displayAlphabet = acseptedKey.toLocaleLowerCase();

  if (displayAlphabet === pressKey) {
    const currentValue =getTextValueById('score');
    const newValue= currentValue +1;
    setElementValue('score', newValue);

     removeBackgroundColor(pressKey);
     continuePlay();
  } else {
    const currentValue= getTextValueById('life');
    const updateVAlue = currentValue -1;
    setElementValue('life', updateVAlue)
    if (totalLife === 0) {
      hideSection("playground");
      showSection("scoreBord");
    }
  }
});
