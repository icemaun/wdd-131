const menuButton = document.querySelector(".menu-button");

// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

// Attach event listener to the menu button
menuButton.addEventListener("click", toggleMenu);

// Function to handle window resize and adjust menu visibility accordingly
function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

// Call handleResize initially and attach event listener for window resize
handleResize();
window.addEventListener("resize", handleResize);

// Viewer template function
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button id="closeButton" class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

// View handler function
function viewHandler(event) {
  // Check if the clicked element is an image
  if (event.target.tagName === "IMG") {
    // Get the src attribute from the clicked image
    const src = event.target.src;
    // Call viewerTemplate with src and a default alt text
    const viewerHtml = viewerTemplate(src, "Image");
    // Insert the viewer HTML into the body
    document.body.insertAdjacentHTML("afterbegin", viewerHtml);
    // Add event listener to the close button
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", closeViewer);
  }
}

// Attach click event listener to the body to handle image clicks
document.body.addEventListener("click", viewHandler);

// Function to close the viewer
function closeViewer() {
  // Remove the viewer element from the DOM
  const viewer = document.querySelector(".viewer");
  viewer.remove();
}