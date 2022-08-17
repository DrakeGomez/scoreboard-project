let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")

function scoreReset() {
    homeScoreCount = 0
    guestScoreCount = 0
    homeScoreDisplay.textContent = homeScoreCount
    guestScoreDisplay.textContent = guestScoreCount
}

scoreReset()

function homePlusOne() {
     homeScoreCount += 1
     homeScoreDisplay.textContent = homeScoreCount
}

function homePlusTwo() {
     homeScoreCount += 2
     homeScoreDisplay.textContent = homeScoreCount
}

function homePlusThree() {
     homeScoreCount += 3
     homeScoreDisplay.textContent = homeScoreCount
}

function guestPlusOne() {
     guestScoreCount += 1
     guestScoreDisplay.textContent = guestScoreCount
}

function guestPlusTwo() {
     guestScoreCount += 2
     guestScoreDisplay.textContent = guestScoreCount
}

function guestPlusThree() {
     guestScoreCount += 3
     guestScoreDisplay.textContent = guestScoreCount
}