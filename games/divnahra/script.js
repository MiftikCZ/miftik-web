let blockSize = 30
let objectLastId = 0
let down_player = 0
let player = {
    color: "#fe1142",
    w: blockSize,
    h: blockSize,
    x: 0,
    y: 0,
    speed_horiz: 6,
    last_x: 0,
    last_y: 0
}
let bg = {
    color:"hsl(230, 60%, " + 12 + "%)"
}

let gravity = true
let silaSkoku = 2
let silaGravitace = 0.30
let Blocks = []
let canmove = true

function setup() {
    createCanvas(600, 600)
    setSize(100, 100, true)
    setFrameRate(60)
    createTerrain()
}


function move(x) {
    let i = 0
    let e = 8
    let int = setInterval(() => {
        if (i < e) {
            i++
            player.x += x * (blockSize / (e))
        } else {
            clearInterval(int)
        }
    }, (1000 / (60) / e))
    int()
}
function keyPressed(key) {
    if (key == "d" && canmove) clickedKeys.d = true
    if (key == "a" && canmove) clickedKeys.a = true
    if (key == " ") jump()
}
function keyReleased(key) {
    if (key == "d" ) clickedKeys.d = false
    if (key == "a" ) clickedKeys.a = false
}


function update() {
    setSize(0, 0, true)
    //setBackground("#4545FA")
    
    setBackground(bg.color)
    // MAIN
    // TERRAIN
    generateTerrain()
    if (gravity) {
        try {
            if (Blocks.find(b => b.x == player.last_x / blockSize) && Blocks.filter(b => b.x == player.last_x / blockSize).sort((a, b) => a.y - b.y)[0].y > player.y / blockSize + 1) {
                player.y += blockSize / (60 / 8)
            
            }
        } catch (error) {

        }
    }

    player.last_x = Math.round(player.x / 30) * 30
    player.last_y = Math.round(player.y / 30) * 30
    
    rect(player.x, player.y, player.w, player.h, player.color)
}

function jump() {
    let i = 0
    let e = 25
    gravity = false
    let int = setInterval(() => {
        if (i < ((silaSkoku * 4)) - 1) {
            i++
            player.y -= blockSize / (60 / (e))
        } else {
            gravity = true
            clearInterval(int)
        }
    }, (1000 / (60) / e))
    int()
}

function createTerrain() {
    let rn_y = 0
    let add_down = 14
    for (let j = 0; j < 80; j++) {
        rn_y += Math.round(Math.random() * 2) - 1
        let _y = 0
        for (let i = 0; i < 23; i++) {
            _y++
            Blocks.push({
                x: j,
                y: Math.round(window.innerHeight / blockSize) - _y + rn_y + add_down,
                color: "hsl(31, 57%, " + (i + 4 - add_down).toString() + "%)",
                collison: ["player"]

            })
        }
        for (let ii = 0; ii < 3; ii++) {
            _y++
            Blocks.push({
                x: j,
                y: Math.round(window.innerHeight / blockSize) - _y + rn_y + add_down,
                color: "hsl(80, 57%, " + (ii + 20 - (add_down / 2)).toString() + "%)",
                collison: ["player"]
            })
        }
    }
}
function generateTerrain() {
    Blocks.forEach(b => {
        // left strana collis
        
    rect(b.x * blockSize, b.y * blockSize, blockSize, blockSize, b.color)
        if(player.x/blockSize+1>b.x && player.x/blockSize<b.x+1 && b.y==player.last_y/blockSize ) {
            if(b.y*blockSize < player.y) {
                player.y=player.last_y
            }
            
            if(player.x == player.last_x && clickedKeys.d) {
                player.x-=(b.x*blockSize-player.last_x)/3
            } else {
                player.x=player.last_x
            }
            clickedKeys.d=false
            
        }
        if(player.x/blockSize-1<b.x && player.x/blockSize>b.x-1 && b.y==player.last_y/blockSize ) {
            if(b.y*blockSize < player.y) {
                player.y=player.last_y
            }
            
            if(player.x == player.last_x && clickedKeys.a) {
                player.x+=(player.last_x-b.x*blockSize)/3
            } else {
                player.x=player.last_x
            }
            clickedKeys.a=false 
        } 
        let gl = player.last_x - (window.innerWidth / 2)
        cam.x += (gl-cam.x)/20000
        cam.y = (player.y - (window.innerHeight / 2)) 
        
    })
    if (clickedKeys.d) player.x += (60 / player.speed_horiz)
    if (clickedKeys.a) player.x -= (60 / player.speed_horiz)
}

function renderBlock(Color = "#888", { }, x, y) {
    objects.new("block-" + objectLastId.toString(), {},
        blockSize, blockSize, Color, x * blockSize, y * blockSize)
    objectLastId++
}
