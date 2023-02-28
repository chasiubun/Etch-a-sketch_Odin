//Board creation:
//Grab the Board with a grid and divide the grid into equal parts of columns and rows
const board = document.querySelector(".drawingBoard"); 
board.style.gridTemplateColumns = "repeat(16 , 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

//Fill the grid with div elements with a blue background
for (let i = 0; i < 256; i++) {
    let panel = document.createElement('div');
    panel.classList.add("panel");
    panel.style.border = "1px solid black";
    panel.addEventListener("mouseover", () =>  panel.style.backgroundColor = "red");
    board.insertAdjacentElement("beforeend", panel); //insert a displayable panel next to the following element, populating starting from the end
}


