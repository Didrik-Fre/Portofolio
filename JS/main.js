const text = "About Me";
const header = document.querySelector("#about-header");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    header.innerHTML = text.substring(0, index + 1); // progressively show text
    index++;
    setTimeout(typeWriter, 170); // typing speed
  } else {
    // Wait before restarting
    setTimeout(() => {
      index = 0;
      header.innerHTML = "";
      typeWriter(); // restart typing
    }, 2000); // 2 sec pause before looping again
  }
}

// Start typing
typeWriter();
