function computerPlay() {
    let value = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch (value) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors;"
    }
computerPlay();
}

document.getElementById("button")