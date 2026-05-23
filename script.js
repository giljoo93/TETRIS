// 10 * 30 = 300
// 10 * 20 = 600
// 300 * 600 size board
// game screeen section const
const COLS = 10;
const ROWS = 20;
const BLOCK = 30;


// canvas section const
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const nextCanvas = document.getElementById("nextMino");
const nextCtx = nextCanvas.getContext("2d");
const holdCanvas = document.getElementById("hold");
const holdCtx = holdCanvas.getContext("2d");

// side status let
let score = document.getElementById("score");
let level = document.getElementById("level");
let line = document.getElementById('line');

// overlay status let
let overlay = document.getElementById("overlay");
let running = false;
let pushed = false;

// Tetris Mino setting
// maybe rainbow color..
const MINO_COLORS = {
    A: "rgba(245, 0, 0, 0.96)",
    B: "rgba(240, 88, 0, 0.93)",
    C: "rgba(252, 248, 9, 0.93)",
    D: "rgba(0, 204, 0, 0.93)",
    E: "rgba(4, 127, 228, 0.93)",
    F: "rgb(4, 16, 124)",
    G: "rgba(140, 3, 231, 0.93)",
}

const MINO = {
    A: [[[0, 0, 0, 0],
         [1, 1, 1, 1],
         [0, 0, 0, 0],
         [0, 0, 0, 0]],

        [[0, 1, 0, 0],
         [0, 1, 0, 0],
         [0, 1, 0, 0],
         [0, 1, 0, 0]]],
    
    B: [[[0, 0, 0],
         [1, 1, 1],
         [0, 0, 1]],

        [[0, 1, 0],
         [0, 1, 0],
         [1, 1, 0]],

        [[1, 0, 0],
         [1, 1, 1],
         [0, 0, 0]],

        [[0, 1, 1],
         [0, 1, 0],
         [0, 1, 0]]],

    C: [[[0, 0, 1],
         [1, 1, 1],
         [0, 0, 0]],

        [[0, 1, 0],
         [0, 1, 0],
         [0, 1, 1]],

        [[0, 0, 0],
         [1, 1, 1],
         [1, 0, 0]],

        [[1, 1, 0],
         [0, 1, 0],
         [0, 1, 0]]],

    D: [[[1, 1],
         [1, 1]]],

    E: [[[1, 1, 0],
         [0, 1, 1],
         [0, 0, 0]],
        
        [[0, 1, 0],
         [1, 1, 0],
         [1, 0, 0]]],

    F: [[[0, 1, 1],
         [1, 1, 0],
         [0, 0, 0]],
        
        [[1, 0, 0],
         [1, 1, 0],
         [0, 1, 0]]],

    G: [[[0, 1, 0],
         [1, 1, 1],
         [0, 0, 0]],
        
        [[0, 1, 0],
         [0, 1, 1],
         [0, 1, 0]],
        
        [[0, 0, 0],
         [1, 1, 1],
         [0, 1, 0]],
        
        [[0, 1, 0],
         [1, 1, 0],
         [0, 1, 0]]]
}


function drawBlock(ctx, x, y, color, size = BLOCK) {
    ctx.fillStyle = MINO_COLORS[color];
    ctx.fillRect(x * size, y * size, size, size);

}
// drawBlock(ctx, 0, 0, "D"); 단일 그려짐

function drawMino(ctx, x, y, mino, color) {
    for (let row = 0; row < mino.length; row++){
        for (let col = 0; col < mino[row].length; col++) {
            if (mino[row][col] == 1) {
                drawBlock(ctx, col + x, row + y, color);
            }
        }
    }
}

// drawMino(ctx, 5, 16, MINO.A[0], "A"); 그려짐
// drawMino(nextCtx, 1, 0, MINO.G[2], "G"); 그려짐

// board 선언
let board = [];
    
    for (let y = 0; y < ROWS; y++) {
        board[y] = [];
        for (let x = 0; x < COLS; x++) {
            board[y][x] = 0;
        }
    }


function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
            if (board[y][x] !== 0) {
                drawBlock(ctx, x, y, board[y][x]);
            }
        }
    }
}

// board[5][3] = "A";
// board[7][4] = "D";
// drawBoard();


let minoObject = {type: "G", rotation: 0, x: 6, y: 0};

function render() {
    drawBoard();
    drawMino(ctx,
             minoObject.x,
             minoObject.y,
             MINO[minoObject.type][minoObject.rotation],
             minoObject.type);
}
render();
minoObject = {type : "G", rotation: 1, x: 6, y:1};
render();


document.addEventListener("keydown", function(e) {
    switch(e.key) {
        case "ArrowLeft" :
            minoObject.x--;
            break;
        case "ArrowRight" :
            minoObject.x++;
            break;
        case "ArrowDown" :
            minoObject.y++;
            break;
    }
    render();
});