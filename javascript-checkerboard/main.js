 const showNLinesCheckerBoard = (n = 8) => {
   let s = ""
   for(let i = 0; i < n; i++) {
     for(let j = 0; j < n; j++) {
       s += ((i + 1) % 2 !== 0) ? (((j + 1) % 2 !== 0) ? " " : "#") : (((j + 1) % 2 !== 0) ? "#" : " ")
     }
     s += "\n"
   }
   console.log(s)
 }

 showNLinesCheckerBoard(8)

console.log('\n')

 //the following function does the same job
 const showNLinesCheckerBoardV2 = (n = 8) => {
  let board = ""

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      board += ((x + y) % 2 === 0) ? " " : "#"
    }
    board += "\n";
  }
  console.log(board);
 }

 showNLinesCheckerBoardV2()
 
