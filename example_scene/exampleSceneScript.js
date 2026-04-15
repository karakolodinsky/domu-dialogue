
"use strict";

// retrieve dialogue box
var element = document.getElementById("currenttext");
// space to advance dialogue
addEventListener("keydown", function(e) {
    if (e.keyCode == 32){
      advanceText();
      e.preventDefault;
            element.classList.remove("scroll");
    
  void element.offsetWidth;
  
  element.classList.add("scroll");
    }});
// click text box to advance dialogue

element.addEventListener("click", function(e){

  e.preventDefault;
  element.classList.remove("scroll");
  
  void element.offsetWidth;
  
  element.classList.add("scroll");
}, false);

// array with dialoguez
const script = ["aahhh i almost didnt see u there", "thasts my bad", "but im glad youre here", "we have some work to do"];
// starting point for dialogue
var index = 0
// text advancing functions only activate after the page has loaded  html
window.onload = function() {
  const currentText = document.getElementById("currenttext");
  currentText.innerText = script[0];
 }

function advanceText() { 
  index = index+1;
  const currentText = document.getElementById("currenttext");
  // if theres more dialogue to load, load it
  if (index<=script.length-1){
    currentText.innerText = script[index]; 
    currentText.innerText += ""
  }
  // if at the last piece of dialogue, dont show the advancing icon
  if (index==script.length-1){
    const advance = document.getElementById("adv");
    advance.style.visibility = "hidden"
    // disable scrolling text animation after final piece of dialogue is loaded
  } if (index==script.length){
    currentText.style.animation = "none"
    
  }
   
}
