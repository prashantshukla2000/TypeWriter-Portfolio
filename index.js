const dynamicContent = document.getElementById("dynamic-text");
const phrases = ["Software Engineer...","FullStack Developer", "Mentor..."];
let phraseIndex = 0;
let letterIndex = 0;
let typingSpeed=150;
let erasingSpeed=75;

function printLetters(phrase) {

  if(letterIndex == phrase.length){
  //now we need to clear the wprds for he next word so we call clear letters function
  clearLetters();
  }


else if(letterIndex<phrase.length){

  dynamicContent.textContent += phrase.charAt(letterIndex);
  letterIndex +=1;
 
  setTimeout(function(){
    printLetters(phrase);
  },typingSpeed); //we pass a function reference and in the next paameter we pass the delay in milliseconds;
}
}

function clearLetters(){
  if(letterIndex==-1){//if completed the whole thing adding one by one and then removing one by one then move to the next word to do the same to it
    phraseIndex=(phraseIndex+1)%phrases.length;
    letterIndex=0;
    printLetters(phrases[phraseIndex]);
  }


else if(letterIndex>-1){//Not cleared so we  need to clear the letters one by one
let updatedPhrase ="";
for(let index=0;index<letterIndex;index++){//to show all the characters still present
  updatedPhrase+=phrases[phraseIndex].charAt(index);
}
dynamicContent.textContent = updatedPhrase;
letterIndex-=1;
setTimeout(clearLetters,erasingSpeed);//so that charcters ar removed one by one
}
}
printLetters(phrases[0]);
