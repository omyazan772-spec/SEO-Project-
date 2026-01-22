
const texts = [
  "BEST SEO AGENCY",
"ALWAYS ON TOP",
"GREAT TEAM",
  "HAPPY TO SEE YOU"
];

const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) { 
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); 
      return;
    }
  } else {
    
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; 
    }
  }

  const speed = isDeleting ? 20 : 80; 
  setTimeout(typeLoop, speed);
}

typeLoop()

