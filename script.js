let currentMoleTile;
let currentPlantTile;
let score = 0;
let GameOver = false;
window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", SelectTile)
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setmole, 1000);
    setInterval(setplant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setmole() {
    if (GameOver) {
        return;
    }
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./images/monty-mole.png";
    let num = getRandomTile();

    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setplant() {
    if (GameOver) {
        return
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./images/piranha-plant.png";
    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function SelectTile() {
    if (GameOver) {
        return;
    }
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();//update score

    }
    else if (this == currentPlantTile) {
        document.getElementById("score").innerText = "GameOver!!\n" + "tryHard lil buddy  " + " " + score.toString();
        GameOver = true;
    }
}
