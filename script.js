// 10 * 30 = 300
// 10 * 20 = 600
// 300 * 600 size board
// game screeen section const
const COLS = 10;
const ROWS = 20;
const VLOCK = 30;


// canvas section const
const canvas = document.getElementById("board");
const ctx = canvas.getContent("2d");
const nextCanvas = document.getElementById("nextMino");
const nextCtx = document.getElementById("2d");
const holdCanvas = document.getElementById("hold");
const holdCtx = document.getElementById("2d");

// side status let
let score = document.getElementById("score");
let level = document.getElementById("level");
let line = document.getElementById('line');

// overlay status let
let overlay = document.getElementById("overlay");

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

        [[0, 1, 0]
         [0, 1, 0]
         [0, 1, 1]],

        [[0, 0, 0],
         [1, 1, 1],
         [1, 0, 0]],

        [[1, 1, 0],
         [0, 1, 0],
         [0, 1, 0]]],

    D: [[[1, 1]
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