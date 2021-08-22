const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")]

function handSelection () {
    
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 4px green"
}
hands.forEach(hand => hand.addEventListener('click', handSelection))

function computerChoice () {
    let min = 0
    let max = Math.floor(hands.length - 1);
    return hands[Math.floor(Math.random() * (max - min + 1)) + min].dataset.option;
}
function checkResult (player, ai) {
    if (player === ai) return "Remis"
    else if ((player === "kamień" && ai === "nożyczki") || (player === "papier" && ai === "kamień") || (player === "nożyczki" && ai === "papier")) return "Wygrałeś"
    else return "Przegrałeś"
}

function publishResult () {
    document.querySelector(".panel-left p:nth-of-type(1) span").textContent = game.playerHand
    document.querySelector(".panel-left p:nth-of-type(2) span").textContent = game.aiHand

}

function publishScores () {

}
function startGame () {
    if (game.playerHand === "") return alert("Wybierz dłoń !")
    game.aiHand = computerChoice ()
    const gameResult = checkResult (game.playerHand, game.aiHand)
    let whoWins = document.querySelector(".panel-left h2 span")
    if (gameResult === "Wygrałeś") {
        whoWins.textContent =  "Ty"
        whoWins.style.color = "green"
        gameSummary.wins++
    }
    else if (gameResult === "Przegrałeś") {
        whoWins.textContent = "Komputer"
        whoWins.style.color = "red" 
        gameSummary.losses++   
    }
    else {
        whoWins.textContent = "Remis"
        whoWins.style.color = "black"
        gameSummary.draws++   
    }
    publishResult()
    gameSummary.numbers++
    document.querySelector("p.numbers span").textContent = `${gameSummary.numbers}`
    document.querySelector("p.wins span").textContent = `${gameSummary.wins}`
    document.querySelector("p.losses span").textContent = `${gameSummary.losses}`
    document.querySelector("p.draws span").textContent = `${gameSummary.draws}`
    
}

document.querySelector(".start").addEventListener('click', startGame)