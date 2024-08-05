const oneMove = prompt('Enter the number between 1 and 8');
const twoMove = prompt('Enter the letter between a and h');
const threeMove = prompt('Enter the number between 1 and 8');
const fourMove = prompt('Enter the letter between a and h');

if (
    oneMove < 1 || oneMove > 8 
    || threeMove < 1 || threeMove > 8 
    || twoMove < 'a' || twoMove > 'h' 
    || fourMove < 'a' || fourMove > 'h'
) {
    alert('Incorrect data entered. Please enter numbers between 1 and 8 and letters between a and h.');
} else {
    const moveVariantOne = oneMove + fourMove;
    const moveVariantTwo = threeMove + twoMove;
    const moveOneCell = oneMove + twoMove;
    const moveTwoCell = threeMove + fourMove;

    if (moveOneCell === moveTwoCell) {
        alert('Rook stands still!');
    } else if (oneMove === threeMove || twoMove === fourMove) {
        alert(`The rook needs one move to reach the ${moveTwoCell} cell`);
    }   else {
        alert(`The rook needs two move to reach the ${moveTwoCell} cell.' + 
            'The first variant via the ${moveVariantOne} cell and the second variant via the ${moveVariantTwo} cell`); 
    }
}