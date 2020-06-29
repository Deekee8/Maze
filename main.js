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

let x
let y

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
                x = colm
                y = row

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

// document.addEventListener('keydown', movePlayer)

// let playerTop = 0
// let playerLeft = 0


// function movePlayer(arrow) {
//     switch (`${arrow.code}`) {
//         case 'ArrowDown':
//             // if ()
//             playerTop += 20;
//             break;
//         case 'ArrowUp':
//             playerTop += -20;
//             break;
//         case 'ArrowLeft':
//             playerLeft += -20;
//             break;
//         case 'ArrowRight':
//             playerLeft += 20;
//         break;
//     }
//     document.getElementById('player').style.top = playerTop + 'px'
//     document. getElementById('player').style.left = playerLeft + 'px'
// }

let player = document.getElementById('player')
// function canMove(direction) {
//     if ()
// }


// function movePlayer(direction) {

// }
let destinationCell = document.getElementById("cell 1-1")
console.log(destinationCell)