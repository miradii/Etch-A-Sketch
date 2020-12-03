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
createCells(16)

/* customize row size*/
const rowInput = document.getElementById("row-input")
const getRowSize = () => Number(rowInput.value)
function customRows() {
  clear()
  createCells(getRowSize())
}
document.querySelector("#apply-btn").addEventListener("click", customRows)

/*coloring logic*/
function addColorClass(event) {
  event.target.classList.add("colored")
}
function enableColoring() {
  document.querySelector(".pad").addEventListener("mouseover", addColorClass)
}
function disabelColoring() {
  document.querySelector(".pad").removeEventListener("mouseover", addColorClass)
}
document.querySelector(".pad").addEventListener("mousedown", enableColoring)
document.querySelector(".pad").addEventListener("mouseup", disabelColoring)
/*clear*/
function clear() {
  const cells = document.querySelectorAll(".padcell")
  cells.forEach((cell) => cell.classList.remove("colored"))
}

document.getElementById("clear-btn").addEventListener("click", clear)
