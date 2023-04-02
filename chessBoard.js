// loop and get 8*8 grid with #
// then create the first line 
// then create the second line 
// concat the tow line to make the board

let theBoard = ""
let firstLine = "";
let secondLine = "";
let size = 8
for (let i = 0; i < 4; i++) {
  firstLine += " " + "#"
}
for (let i = 0; i < 4; i++) {
  secondLine += "#" + " "
}
for (let i = 0; i < size; i++) {
  theBoard += firstLine + "\n" + secondLine + "\n";
}
console.log(board);

// after saw many sulation i liked this idea
/* because the first thing i realized that there tow separate 
 line repeating but i didn't think that i can jsut type it */

let board = "";
let oddLine = " # # # #";
let evenLine = "# # # # ";

function makeCheeseBoard(size) {
  for (let i = 0; i < size; i++) {
    board += oddLine + "\n" + evenLine + "\n";
  }
}
makeChessBoard(8)