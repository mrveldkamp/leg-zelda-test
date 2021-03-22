// Set up Canvas and Context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// HTML Variables
let mapImgEl = document.getElementById("map");


// Start Draw Function once all images load...
window.addEventListener("load", draw);

// Draw Function (Main Program Loop)
function draw() {
  console.log("hello");

  ctx.drawImage(mapImgEl, 200, 0, 200, 200, 0, 0, 800, 600);

  // Call draw again to loop program
  requestAnimationFrame(draw);
}