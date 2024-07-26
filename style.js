const oneMove = prompt('Enter the number between 1 and 8');
const twoMove = prompt('Enter the letter between a and h');
const threeMove = prompt('Enter the number between 1 and 8');
const fourMove = prompt('Enter the letter between a and h');

const moveVariantOne = oneMove + fourMove;
const moveVariantTwo = threeMove + twoMove;
const moveOneCell = oneMove + twoMove;
const moveTwoCell = threeMove + fourMove;

if (moveOneCell === moveTwoCell) {
    alert('Rook stands still');
} 

if (oneMove === threeMove || twoMove === fourMove) {
    alert(`The rook needs one move to reach the ${moveTwoCell}`);
}   else {
    alert(`The rook needs two move to reach square ${moveTwoCell}. 
    The first variant via the ${moveVariantOne} cell and the second variant via the ${moveVariantTwo} cell`); 
}