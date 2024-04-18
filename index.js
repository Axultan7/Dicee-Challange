let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

switch (randomNumber1) {
    case 1:
        image1.src = "./images/dice1.png";
        image1.alt = "dice1";
        break;
    case 2:
        image1.src = "./images/dice2.png";
        image1.alt = "dice2";
        break;
    case 3:
        image1.src = "./images/dice3.png";
        image1.alt = "dice3";
        break;
    case 4:
        image1.src = "./images/dice4.png";
        image1.alt = "dice4";
        break;
    case 5:
        image1.src = "./images/dice5.png";
        image1.alt = "dice5";
        break;
    case 6:
        image1.src = "./images/dice6.png";
        image1.alt = "dice6";
        break;
}

switch (randomNumber2) {
    case 1:
        image2.src = "./images/dice1.png";
        image2.alt = "dice1";
        break;
    case 2:
        image2.src = "./images/dice2.png";
        image2.alt = "dice2";
        break;
    case 3:
        image2.src = "./images/dice3.png";
        image2.alt = "dice3";
        break;
    case 4:
        image2.src = "./images/dice4.png";
        image2.alt = "dice4";
        break;
    case 5:
        image2.src = "./images/dice5.png";
        image2.alt = "dice5";
        break;
    case 6:
        image2.src = "./images/dice6.png";
        image2.alt = "dice6";
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}

