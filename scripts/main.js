let board = document.querySelector('#board');
let score = document.querySelector('#attemptOutput');
let startBtn = document.querySelector('#start');

let gm = new GameManager(board, score);
gm.startGame();

board.addEventListener('click', (e) => {
    let clickedCard = e.target.connectedCard;
    if (clickedCard) gm.selectCard(clickedCard);
})

startBtn.addEventListener('click', () => gm.startGame());