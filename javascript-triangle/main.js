const drawNLinesTriangle = (n = 8) => {
  for(let i = "#"; i.length < n; i += "#") {
    console.log(i)
  }
}

//Another way to do so is
const drawNLinesTriangleV2 = (n = 8) => {
  let s = ""
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      s += "#"
    }
    s += "\n"
  }
  console.log(s)
}

drawNLinesTriangle(8)
drawNLinesTriangleV2(8)

