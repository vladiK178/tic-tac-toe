let fields = [null, null, null, null, null, null, null, null, null];

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // vertical
  [0, 4, 8],
  [2, 4, 6], // diagonal
];

let currentPlayer = "circle";

function init() {
  render();
}

function render() {
  const contentDiv = document.getElementById("content");

  // Generate table HTML
  let tableHtml = "<table>";
  for (let i = 0; i < 3; i++) {
    tableHtml += "<tr>";
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = "";
      if (fields[index] === "circle") {
        symbol = generateCircleSVG();
      } else if (fields[index] === "cross") {
        symbol = generateCrossSVG();
      }
      tableHtml += `<td onclick="handleClick(this, ${index})">${symbol}</td>`;
    }
    tableHtml += "</tr>";
  }
  tableHtml += "</table>";

  // Set table HTML to contentDiv
  contentDiv.innerHTML = tableHtml;
}
