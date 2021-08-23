const gameStatus = {
    playerHand: "",
    aiHand: "",
    whoWins: "",
}

const gameStats = {
    wins: 0,
    losses: 0,
    draws: 0,
    games: 0,
}

const hands = [...document.querySelectorAll(".select img")]
function handSelection () {
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 4px purple"
    gameStatus.playerHand = this.dataset.option

}
hands.forEach(hand => hand.addEventListener('click', handSelection))

function winCheck() {
    if (gameStatus.playerHand === gameStatus.aiHand ) gameStatus.whoWins = "Remis"
    else if ((gameStatus.playerHand === "kamień" && gameStatus.aiHand === "nożyczki") || (gameStatus.playerHand === "papier" && gameStatus.aiHand === "kamień") || (gameStatus.playerHand === "nożyczki" && gameStatus.aiHand === "papier")) gameStatus.whoWins = "Wygrałeś"
    else gameStatus.whoWins = "Przegrałeś"
    console.log(gameStatus.whoWins)
}

function gameResult () {
    document.querySelector(".panel-left p:first-of-type span").textContent = gameStatus.playerHand
    document.querySelector(".panel-left p:nth-of-type(2) span").textContent = gameStatus.aiHand
    if (gameStatus.whoWins === "Wygrałeś") {document.querySelector(".panel-left h2 span").textContent = "Ty wygrałeś"
    document.querySelector(".panel-left h2 span").style.color = "green"
}
if (gameStatus.whoWins === "Przegrałeś") {document.querySelector(".panel-left h2 span").textContent = "Komputer"
document.querySelector(".panel-left h2 span").style.color = "red"
}
if (gameStatus.whoWins === "Remis") {document.querySelector(".panel-left h2 span").textContent = "Remis"
document.querySelector(".panel-left h2 span").style.color = "gray"
}
}
function gameStatsUpdate () {
    if (gameStatus.whoWins === "Wygrałeś") {
        gameStats.wins++
        document.querySelector(".panel-right .wins span").textContent = gameStats.wins
    }
    if (gameStatus.whoWins === "Przegrałeś") {
        gameStats.losses++
        document.querySelector(".panel-right .losses span").textContent = gameStats.losses
    }
    if (gameStatus.whoWins === "Remis") {
        gameStats.draws++
        document.querySelector(".panel-right .draws span").textContent = gameStats.draws
    }
}
function gameReset () {
    hands.forEach(hand => hand.style.boxShadow = "")
    gameStatus.playerHand = ""
    gameStatus.aiHand = ""
}
function startGame (){
    if (gameStatus.playerHand === "") return alert("Wybierz dłoń")
    let min = 0
    let max = 2
    gameStatus.aiHand = hands[Math.floor(Math.random() * (max - min + 1)) + min].dataset.option
    console.log(gameStatus.playerHand)
    console.log(gameStatus.aiHand)
    winCheck ()
    gameResult ()
    gameStats.games++
    document.querySelector(".panel-right .numbers span").textContent = gameStats.games
    gameStatsUpdate ()
    gameReset ()

}
document.querySelector(".start").addEventListener('click', startGame)