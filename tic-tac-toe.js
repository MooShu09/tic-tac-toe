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
}
}
}


function SP3() {
var canvas = document.getElementById("game-board")
var mark = document.createElementNS(namespace, "circle")
mark.setAttribute("cx", "100")
mark.setAttribute("cy", "340")
mark.setAttribute("r", "50")
mark.setAttribute("fill", "magenta")
canvas.appendChild(mark)
}
