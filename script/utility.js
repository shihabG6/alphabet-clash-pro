function hideSection(sectionId){
  const sectionid= document.getElementById(sectionId);
  sectionid.classList.add('hidden')
}
function showSection(sectionId){
  const sectionid= document.getElementById(sectionId);
  sectionid.classList.remove('hidden')
}

function getTextValueById(elementId){
  const element = document.getElementById(elementId);
  const elemntText = element.innerText;
  const value = parseInt(elemntText);
  return value;
}
function setElementValue(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText=value;
}


function setBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  const add = element.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  const add = element.classList.remove('bg-orange-400')
}

function randomAlphabet(){
  const alphabets = 'abcdefghijklmnopqurstwxyz';
  const alphabet = alphabets.split('');

  const randomIndex = Math.random()*25;
  const index = Math.round(randomIndex);
  const latter = alphabet[index];
  return latter;
}

function getElementByIdInnerText(elementId){
  const elementIds = document.getElementById(elementId);
  const innerText = elementIds.innerText;
  return elementIds;
}