let scoreA = 0;
let scoreB = 0;

function updateScore(team) {
    if (team === 'A') {
        scoreA++;
        document.getElementById('scoreA').innerText = scoreA;
    } else if (team === 'B') {
        scoreB++;
        document.getElementById('scoreB').innerText = scoreB;
    }
    else if (team === 'a') {
        scoreA--;
        document.getElementById('scoreA').innerText = scoreA;
    }
    else if (team === 'b') {
        scoreB--;
        document.getElementById('scoreB').innerText = scoreB;
    }
}

function reset(team){
        scoreA = 0;
        scoreB = 0;
        document.getElementById('scoreA').innerText = scoreA;
        document.getElementById('scoreB').innerText = scoreB;
}