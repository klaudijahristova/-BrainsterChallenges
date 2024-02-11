let buttons = document.querySelectorAll(".btn");
let writingParagraph = document.querySelector(".writing");
let firstPart = document.querySelector('.first-part');

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const textContent = e.currentTarget.textContent;
    if (textContent === "SPACE") {
      writingParagraph.innerHTML += " ";
    } else {
      writingParagraph.textContent += textContent;
    }
    
    checkParagraphHeight();
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (validLetters.includes(key)) {
    writingParagraph.textContent += key;
  } else if (key === " ") {
    e.preventDefault();
    writingParagraph.innerHTML += " ";
  } else if (key === "BACKSPACE") {
    e.preventDefault();
    writingParagraph.textContent = writingParagraph.textContent.slice(0, -1);
  } else {
    e.preventDefault();
  }
  
  checkParagraphHeight();
});

function newLine() {
  writingParagraph.style.whiteSpace = "pre-wrap";
  writingParagraph.style.wordWrap = "break-word";
}

newLine();

function checkParagraphHeight() {
  const containerHeight = firstPart.clientHeight;
  const firstPartHeight = containerHeight * 0.5; 
  let paragraphHeight = writingParagraph.offsetHeight;

  if (paragraphHeight >= firstPartHeight) {
    writingParagraph.style.height = firstPartHeight + "px";
    writingParagraph.style.overflowY = 'auto';
  } else {
    writingParagraph.style.height = "auto";
    writingParagraph.style.overflowY = 'hidden';
  }
}







 
 





