function play(){
  hideSection('play-game')
  showSection('playground')
  continuePlay()
}

function continuePlay(){
  const display=(randomAlphabet());
  const displayText = getElementByIdInnerText('displaingAlphabet');
  displayText.innerText=display
  setBackgroundColor(display);
  
}

document.addEventListener('keyup', function(event){
  const pressKey = event.key;
  const acseptedKey = document.getElementById('displaingAlphabet').innerText;
  const displayAlphabet = acseptedKey.toLocaleLowerCase()
  

  if(displayAlphabet === pressKey){
    const preskey= pressKey;
    removeBackgroundColor(preskey)
    continuePlay()
    const currentScore = document.getElementById('score');
    const scoureText = currentScore.innerText;
    const scoure = parseInt(scoureText);
    const newScour = scoure +1;
    currentScore.innerText= newScour; 

  }
  else{
    const life = document.getElementById('life');
    const lifelevel= life.innerText;
    const totalLife= lifelevel -1;
    life.innerText= totalLife
   
  }
})