const container = document.querySelector("#container");
let rows = document.getElementsByClassName("rowSketch");

function makeGrid(){
    makeRows(16);
    makeCols(16);
}

makeGrid();

function makeRows(numRows){
    for(let i=0;i<numRows;i++){
        let box = document.createElement("div");
        container.appendChild(box).className = "rowSketch";
    }
}

function makeCols(numCols){
    for(let i=0;i<rows.length;i++){
        for(let j=0;j<numCols;j++){
            let box = document.createElement("div");
            rows[j].appendChild(box).className = "colSketch";
        }
    }
}