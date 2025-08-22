// Dynamic Modal for all project videos
function openModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("projectVideo");
  video.querySelector("source").src = videoSrc;
  video.load();  // Reload the video source
  modal.style.display = "flex";
  video.play();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("projectVideo");
  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
}

// Close modal if clicking outside video content
function clickOutside(event) {
  const modalContent = document.querySelector(".modal-content");
  if (!modalContent.contains(event.target)) {
    closeModal();
  }
}

// Optional: Typewriter effect for About Me header
const text = "About Me";
const header = document.querySelector("#about-header");
let index = 0;

header.classList.add("blink");

function typeWriter() {
  if (index < text.length) {
    header.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);  // Adjust speed here
  } else {
    header.classList.remove("blink");
    setTimeout(() => {  // Optional: loop
      header.innerHTML = "";
      index = 0;
      header.classList.add("blink");
      typeWriter();
    }, 2000);
  }
}

typeWriter();


