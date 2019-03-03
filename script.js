const Sketch = document.querySelector('.Sketch');

let grid_height = 450;


function generateGrid(size) {
    clearGrid();
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'gridRow');
        
    for (let j = 0; j < size; j++) {
        let cell = generateCell(i, j, grid_height/size, 0);
        row.appendChild(cell);
    }
        
        grid.appendChild(row);
    }
}

function generateCell(row, column, height, width) {
    let cell = document.createElement('div');
    cell.setAttribute('class', 'grid-cell');
    cell.setAttribute('data-row', `${row}`);
    cell.setAttribute('data-col', `${column}`);
    cell.setAttribute('data-painted', 1);
    cell.style.height = `${height}`;
    cell.addEventListener('mouseover', paintCell);
    return cell;
}


function paintCell(e) {
    let cell = e.target;
    if (grayscale_mode) {
        let paintedVal = +(cell.getAttribute('data-painted'));
        if (paintedVal > 10) { return }
        cell.style.backgroundColor = `rgba(0,0,0,${paintedVal / 10})`;
        cell.setAttribute('data-painted', ++paintedVal);
    } else {
        cell.style.backgroundColor = `#${randomColour()}`;
        cell.setAttribute('data-painted', 1);
    }
}

