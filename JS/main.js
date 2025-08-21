const text = "About Me";
const header = document.querySelector("#about-header");
let index = 0;

// Add blinking class before typing starts
header.classList.add("blink");

function typeWriter() {
  if (index < text.length) {
    header.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 170);
  } else {
    // Remove blinking class after typing is done
    header.classList.remove("blink");
  }
}

// Start typing
typeWriter();
