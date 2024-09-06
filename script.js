function generateRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDotElement(position) {
    const dotElement = document.createElement('div');
    dotElement.classList.add('dot');
    if (position) {
        dotElement.style.gridColumn = position.column;
        dotElement.style.gridRow = position.row;
    }
    return dotElement;
}

function getDotPositions(dotCount) {
    const positions = {
        1: [{ row: 2, column: 2 }],
        2: [{ row: 1, column: 1 }, { row: 3, column: 3 }],
        3: [{ row: 1, column: 1 }, { row: 2, column: 2 }, { row: 3, column: 3 }],
        4: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
        5: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 2, column: 2 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
        6: [{ row: 1, column: 1 }, { row: 1, column: 3 }, { row: 2, column: 1 }, { row: 2, column: 3 }, { row: 3, column: 1 }, { row: 3, column: 3 }],
    };
    return positions[dotCount] || [];
}

function createDotSection(dotCount) {
    const dotSection = document.createElement('div');
    dotSection.classList.add('section');
    const positions = getDotPositions(dotCount);
    positions.forEach(pos => {
        dotSection.appendChild(createDotElement(pos));
    });
    return dotSection;
}

function createDominoElement() {
    const dominoElement = document.createElement('div');
    dominoElement.classList.add('domino');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    dominoElement.style.backgroundColor = randomColor;

    const topDotsCount = generateRandomInteger(1, 6);
    const bottomDotsCount = generateRandomInteger(1, 6);
    dominoElement.appendChild(createDotSection(topDotsCount));
    dominoElement.appendChild(createDotSection(bottomDotsCount));
    return dominoElement;
}

function displayDominoes() {
    const dominoContainer = document.getElementById('dominoContainer');
    for (let i = 0; i < 50; i++) {
        dominoContainer.appendChild(createDominoElement());
    }
}

window.onload = displayDominoes;