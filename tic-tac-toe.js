// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var L1 = 0
var L2 = 0
var L3 = 0
var M1 = 0
var M2 = 0
var M3 = 0
var R1 = 0
var R2 = 0
var R3 = 0
var turn = 0

function SP1() {
var canvas = document.getElementById("game-board")
if(L1 == 0){
if (turn == 0){
var mark = document.createElementNS(namespace, "circle")
mark.setAttribute("cx", "100")
mark.setAttribute("cy", "100")
mark.setAttribute("r", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
turn = turn + 1 }
else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
mark.setAttribute("x", "75")
mark.setAttribute("y", "75")
mark.setAttribute("width", "50")
mark.setAttribute("height", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
L1 = L1 + 1
turn = 0
}
}
}

function SP2() {
var canvas = document.getElementById("game-board")
if(L2 == 0){
if (turn == 0){
var mark = document.createElementNS(namespace, "circle")
mark.setAttribute("cx", "100")
mark.setAttribute("cy", "220")
mark.setAttribute("r", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
turn = turn + 1 }
else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
mark.setAttribute("x", "75")
mark.setAttribute("y", "195")
mark.setAttribute("width", "50")
mark.setAttribute("height", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
L2 = L2 + 1
turn =  0
}
}
}

function SP3() {
  var canvas = document.getElementById("game-board")
  if(L3 == 0){
  if (turn == 0){
  var mark = document.createElementNS(namespace, "circle")
  mark.setAttribute("cx", "100")
  mark.setAttribute("cy", "340")
  mark.setAttribute("r", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  turn = turn + 1 }
  else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
  mark.setAttribute("x", "75")
  mark.setAttribute("y", "315")
  mark.setAttribute("width", "50")
  mark.setAttribute("height", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  L3= L3 + 1
  turn =  0
  }
  }
  }

  ////// Middle
  function SP4() {
  var canvas = document.getElementById("game-board")
  if(M1 == 0){
  if (turn == 0){
  var mark = document.createElementNS(namespace, "circle")
  mark.setAttribute("cx", "220")
  mark.setAttribute("cy", "100")
  mark.setAttribute("r", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  turn = turn + 1 }
  else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
  mark.setAttribute("x", "195")
  mark.setAttribute("y", "75")
  mark.setAttribute("width", "50")
  mark.setAttribute("height", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  M1 = M1 + 1
  turn = 0
  }
  }
  }

  function SP5() {
  var canvas = document.getElementById("game-board")
  if(M2 == 0){
  if (turn == 0){
  var mark = document.createElementNS(namespace, "circle")
  mark.setAttribute("cx", "220")
  mark.setAttribute("cy", "220")
  mark.setAttribute("r", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  turn = turn + 1 }
  else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
  mark.setAttribute("x", "195")
  mark.setAttribute("y", "195")
  mark.setAttribute("width", "50")
  mark.setAttribute("height", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  M2 = M2 + 1
  turn =  0
  }
  }
  }

  function SP6() {
    var canvas = document.getElementById("game-board")
    if(M3 == 0){
    if (turn == 0){
    var mark = document.createElementNS(namespace, "circle")
    mark.setAttribute("cx", "220")
    mark.setAttribute("cy", "340")
    mark.setAttribute("r", "50")
    mark.setAttribute("fill", "magenta")
    canvas.appendChild(mark)
    turn = turn + 1 }
    else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
    mark.setAttribute("x", "195")
    mark.setAttribute("y", "315")
    mark.setAttribute("width", "50")
    mark.setAttribute("height", "50")
    mark.setAttribute("fill", "magenta")
    canvas.appendChild(mark)
    M3 = M3 + 1
    turn =  0
    }
    }
    }
/// Right
function SP7() {
var canvas = document.getElementById("game-board")
if(R1 == 0){
if (turn == 0){
var mark = document.createElementNS(namespace, "circle")
mark.setAttribute("cx", "340")
mark.setAttribute("cy", "100")
mark.setAttribute("r", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
turn = turn + 1 }
else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
mark.setAttribute("x", "315")
mark.setAttribute("y", "75")
mark.setAttribute("width", "50")
mark.setAttribute("height", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
R1 = R1 + 1
turn = 0
}
}
}

function SP8() {
var canvas = document.getElementById("game-board")
if(R2 == 0){
if (turn == 0){
var mark = document.createElementNS(namespace, "circle")
mark.setAttribute("cx", "340")
mark.setAttribute("cy", "220")
mark.setAttribute("r", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
turn = turn + 1 }
else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
mark.setAttribute("x", "315")
mark.setAttribute("y", "195")
mark.setAttribute("width", "50")
mark.setAttribute("height", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
R2 = R2 + 1
turn =  0
}
}
}

function SP9() {
  var canvas = document.getElementById("game-board")
  if(R3 == 0){
  if (turn == 0){
  var mark = document.createElementNS(namespace, "circle")
  mark.setAttribute("cx", "340")
  mark.setAttribute("cy", "340")
  mark.setAttribute("r", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  turn = turn + 1 }
  else if(turn == 1){var mark = document.createElementNS(namespace, "rect")
  mark.setAttribute("x", "315")
  mark.setAttribute("y", "315")
  mark.setAttribute("width", "50")
  mark.setAttribute("height", "50")
  mark.setAttribute("fill", "magenta")
  canvas.appendChild(mark)
  R3 = R3 + 1
  turn =  0
  }
  }
  }
// LOL RESTART BUTTON
function RB() {
  location.reload()
}
