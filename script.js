//retrieve the HTML selector. REMEMBER to add " . " TO YOUR CLASSES
const board = document.querySelector(".drawingBoard");
    // //Create a div element
    // let panel = document.createElement("div");
    // //Classify the div element
    // panel.classList.add("panel");
    // //put content in the div element for reference...
    // panel.textContent = "help..."
    // panel.style.border = "1px solid black"
    // //Append child visibly to the board
    // board.appendChild(panel)

function createPanel(n){
    for (i = 0; i < n; i++){
        let column = document.createElement("div");
        column.classList.add("panel");
        board.appendChild(column);
        // column.addEventListener("mouseover", () => 
        // {console.log("hovering..."); 
        //     console.log(column);
        //     column.style.color = "red"}
        // ); 
        for (j = 0; j < n; j++){
            let row = document.createElement("div");
            row.classList.add("panel");
            row.style.border = "1px solid black"
            column.appendChild(row);
        }
    }
}


createPanel(4)

// const panel = board.querySelector("div")
// const subPanel = panel.querySelectorAll("div")
// //subPanel.forEach((div) =>div.remove());

// // subPanel.addEventListener(
// //     "mouseover", () => console.log("hovering...")
// // )

// panel.addEventListener(
//     "mouseover", () =>{
//     console.log(panel)
//     console.log("hover works");
//     //subPanel.style.backgroundColor = "green"
// }
// )
