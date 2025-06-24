function upDate(previewPic) {
  console.log("Hover or focus triggered for:", previewPic.alt);

  const imageBox = document.getElementById("image");
  imageBox.style.backgroundImage = `url('${previewPic.src}')`;
  imageBox.textContent = previewPic.alt;
}

function undo() {
  console.log("Mouse leave or blur triggered");

  const imageBox = document.getElementById("image");
  imageBox.style.backgroundImage = "url('')";
  imageBox.textContent = "Hover over or focus on an image to display it here.";
}

function addTabIndex() {
  console.log("Page loaded: adding tabindex attributes");
  const images = document.querySelectorAll("img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log(`Tabindex added to image ${i + 1}: ${images[i].alt}`);
  }
}
