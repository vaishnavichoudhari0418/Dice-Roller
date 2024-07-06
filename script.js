const diceImg = document.getElementById("roller");
function Diceroller() {
    const min = 1;
    const max = 7;

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    switch (randomNumber) {
        case 1: diceImg.src = "img/dice-six-faces-five.png";
            console.log(randomNumber);
            break;
        case 2: diceImg.src = "img/dice-six-faces-four.png";
            console.log(randomNumber);

            break;
        case 3: diceImg.src = "img/dice-six-faces-one.png";
            console.log(randomNumber);

            break;
        case 4: diceImg.src = "img/dice-six-faces-six (1).png";
            console.log(randomNumber);

            break;
        case 5: diceImg.src = "img/dice-six-faces-three.png";
            console.log(randomNumber);

            break;
        case 6: diceImg.src = "img/dice-six-faces-two.png";
    }
}