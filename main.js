const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]


const mazeEl = document.getElementById('maze')

function createMaze(blueprint) {
    for (let row = 0; row < blueprint.length; row++) {
        const rowString = blueprint[row]
        let blockDivs = ''

        for (let colm = 0; colm < rowString.length; colm++) {
            const blockType = rowString[colm]
            if (blockType === 'W') {
                blockDivs += '<div id="cell ' + colm + "-" + row + '" class="block wall"></div>'
            } else if (blockType === 'S') {
                blockDivs += '<div id="cell ' + colm + "-" + row + '" class="block start"><div id="player"></div></div>'
            } else if (blockType === 'F') {
                blockDivs += '<div id="cell ' + colm + "-" + row + '" class="block finish"></div>'
            } else {
                blockDivs += '<div id="cell ' + colm + "-" + row + '" class="block"></div>'
            }

        }
        mazeEl.innerHTML += `<div class="row">${blockDivs}</div>`
    }
}
createMaze(map)
let x = 9
let y = 0
let playerPosition = map[x][y]

document.addEventListener('keydown', movePlayer)

let playerTop = 0
let playerLeft = 0


function movePlayer(arrow) {
    switch (`${arrow.code}`) {
        case 'ArrowDown':
            if (map[x + 1][y] !== 'W') {
                x += 1
                playerTop += 20;
            }
            break;
        case 'ArrowUp':
            if (map[x - 1][y] !== 'W') {
                x -= 1
                playerTop += -20;
            }
            break;
        case 'ArrowLeft':
            if (map[x][y - 1] !== 'W' && y > 0) {
                y -= 1;
                playerLeft += -20;
            }
            break;
        case 'ArrowRight':
            if (map[x][y + 1] !== 'W' && y < 20) {
                y += 1;
                playerLeft += 20;
            }
            break;
    }
    document.getElementById('player').style.top = playerTop + 'px'
    document.getElementById('player').style.left = playerLeft + 'px'
    playerPosition = map[x][y]
    if (map[x][y] === 'F') {
        alert('You Won!')
    }
}

