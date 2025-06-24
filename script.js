function upDate(previewPic) {
  console.log("Hover event triggered!");
  console.log("Source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  const displayArea = document.getElementById("image");
  displayArea.style.backgroundImage = `url('${previewPic.src}')`;
  displayArea.textContent = previewPic.alt;
}

function undo() {
  const displayArea = document.getElementById("image");
  displayArea.style.backgroundImage = "url('')";
  displayArea.textContent = "Hover over an image below to display here.";
}
