console.log("here")
function createCells(row) {
  for (let i = 0; i < row * row; i++) {
    const div = document.createElement("div")
    div.classList.add("padcell")
    const container = document.querySelector(".pad")
    container.style.setProperty("--rows", row)
    container.appendChild(div)
  }
}
createCells(5)
