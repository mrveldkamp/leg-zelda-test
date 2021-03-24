// LEGEND OF ZELDA

// Constants
let ROOM_ROWS = 11;
let ROOM_COLS = 16;
let TILE_SIZE = 48;

// Set up Canvas and Context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = ROOM_COLS * TILE_SIZE;
cnv.height = ROOM_ROWS * TILE_SIZE;

// HTML Variables
let mapImgEl = document.getElementById("map");

// Start Draw Function once all images load...
window.addEventListener("load", draw);

// Draw Function (Main Program Loop)
function draw() {

  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 16; col++) {
      let tileNum = room1[row][col];
      let coords = tileClipCoords[tileNum];
      ctx.drawImage(mapImgEl, coords.x, coords.y, 16, 16, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }


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