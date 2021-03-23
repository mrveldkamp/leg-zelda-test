// Set up Canvas and Context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 768;
cnv.height = 528;

// HTML Variables
let mapImgEl = document.getElementById("map");

// Global Variables
let roomRow = 4;
let roomCol = 3;

let redStairs = {
  row: 0,
  col: 0
};
let redBush = {
  row: 2,
  col: 3
}

let tileGrid = [];
for (let y = 1; y <= 120; y += 17) {
  let tempRow = [];
  for (let x = 1; x <= 290; x += 17) {
    tempRow.push({
      x: x,
      y: y
    });
  }
  tileGrid.push(tempRow);
}



// Start Draw Function once all images load...
window.addEventListener("load", draw);

// Draw Function (Main Program Loop)
function draw() {

  let coords = tileGrid[redBush.row][redBush.col];
  ctx.drawImage(mapImgEl, coords.x, coords.y, 16, 16, 0, 0, 48, 48);

  // Call draw again to loop program
  requestAnimationFrame(draw);
}

// (1, 1) // [0,0]
// (18, 1) // [0,1]
// (35, 1) // [0,2]
// (52, 1) // [0,3]
// ...
// (290, 1) // [0, 17]

// (1, 18) // [1,0]
// (18, 18) // [1,1]
// (35, 18) // [1,2]
// (52, 18) // [1,3]
// ...
// (290, 18) // [1, 17]

// (1, 35) // [2,0]
// (18,35) // [2,1]
// (35,35) // [2,2]
// (52,35) // [2,3]
// ...
// (290, 35) // [2, 17]

// ... 

// ... (290, 120)