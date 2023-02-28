const board = document.querySelector(".drawingBoard");
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let panel = document.createElement('div');
    panel.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", panel);
}
