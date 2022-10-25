function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.borderRadius = '15px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    // console.log(player);
    // player.style.border = '1px solid red';
    // player.style.margin = '10px';
    // player.style.borderRadius = '15px';
    // player.style.padding = '10px';
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // })
}

function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    // console.log(player);
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quos similique assumenda animi dolor
        quas veritatis, autem ad minus quae cupiditate sequi. Cupiditate, sunt reprehenderit quidem cum
        expedita praesentium eveniet.</p>
    `;
    // console.log(player);
    setPlayerStyle(player);
    playersContainer.appendChild(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // })
}

document.getElementById('players').addEventListener('click', function (event) {
    // console.log(event.target.tagName.toLowerCase());
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        // console.log(event.target.parentNode);
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})