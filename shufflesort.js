let numbers = [];
const shuffle = () => {
    let totalGridLength = numbers.length - 1;
    let swap;
    let temp;

    for (let i = totalGridLength; i > 0; i--) {
        swap = Math.floor(Math.random() * (i + 1));
        temp = numbers[i];
        numbers[i] = numbers[swap];
        numbers[swap] = temp;
    }
    let i = 0;
    let grid = document.getElementById("shufflesortgrid");
    gridChildren = grid.childNodes;
  
    for (let g = 3; g < gridChildren.length; g++) {
        gridChildren[g].innerHTML = numbers[i];
        i++
    }

}
const sort = () => {
    numbers.sort();
    let i = 0;
    let grid = document.getElementById("shufflesortgrid");
    gridChildren = grid.childNodes;
    for (let g = 3; g < gridChildren.length; g++) {
        gridChildren[g].innerHTML = numbers[i];
        i++
    }
}

const initializeGrid = () => {
    let grid = document.getElementById("shufflesortgrid");
    const divNames = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (var i = 1; i <= 9; i++) {
        let innerDiv = document.createElement('div');
        innerDiv.className = 'grid-item-' + divNames.shift();
        innerDiv.innerHTML = i;
        grid.appendChild(innerDiv);
        numbers.push(i);
    }
}