var _fps = 240

let Objects = {
    platform: [
        {
            x: 0,
            y: 400,
            w: 280,
            h: 45,
            ref: "./images/platforma2.png"
        },
        {
            x: 120,
            y: 800,
            w: 280,
            h: 45,
            ref: "./images/platforma2.png"
        },
        {
            x: 400,
            y: 800,
            w: 280,
            h: 45,
            ref: "./images/platforma2.png"
        },
        {
            x: 520,
            y: 120,
            w: 280,
            h: 45,
            ref: "./images/platforma1.png"
        },
    ]
}

var Player = {
    x: 80,
    y: 80,
    w: 40,
    h: 40,
    money: 99,
    speedX: 2.5,
    jumpCount: 1,
    onGround: false,
    toX: 0,
    toY: 0,
    jumpForce: 25,
    degree: 0,
    gravity: true,
    gravitace: 2,
    color: "#000"
}
function keyPressed(key) {
    if (key == "d") { 
        clickedKeys.d = true
    }
    if (key == "a") { 
        clickedKeys.a = true
    }
    if (key == "e") {
        if (game == "default") {
            reload()
            setScene("inventar")
        } else {
            setScene("default")
        }

    }
    if (key == " " && Player.onGround) { broJump() }
}
function keyReleased(key) {
    reload()
    if (key == "d") clickedKeys.d = false
    if (key == "a") clickedKeys.a = false
}
function setup() {
    createCanvas(100, 100)
}
function changedScene(scene) {
    if (scene == "default") {
        document.getElementById("shop").style.display = "none"
        document.querySelector("body").style.overflow = "hidden"
        setFrameRate(60)
    } if (scene == "inventar") {
        setFrameRate(10)
    }
    reload()
}

function update(scene) {
    if (scene == "default") updateMainGame()
    if (scene == "inventar") renderInventarScene()
}
setInterval(() => {
    if(clickedKeys.d) {
        Player.toX=Player.speedX
        reload()
    }
    if(clickedKeys.a) {
        Player.toX=-Player.speedX
        reload()
    }
    if(Player.toY > 0.1) {
        Player.y-=Player.jumpForce / (_fps / 12)
        Player.toY-= 1
        reload()
    } else Player.gravity = true
    if(Player.toX!==0) reload()
    Player.degree -= Player.toX * 1.2
    Player.toX += (0 - Player.toX) / 40
    Player.x += Player.toX
    Player.last_x = Math.round(Player.x / 40) * 40
    Player.last_y = Math.round(Player.y / 40) * 40
    // if(cam.x !== Player.x-(window.innerWidth / 2)) reload()
    // if(cam.x !== Player.y-(window.innerHeight / 2)) reload()
    // cam.x += (Player.x - (window.innerWidth / 2) - cam.x) / 20
    // cam.y += (Player.y - (window.innerHeight / 2) - cam.y) / 20
    cam.x += (Player.x - (window.innerWidth / 2) - cam.x)
    cam.y += (Player.y - (window.innerHeight / 2) - cam.y)
    if (Player.gravity) broFall()
}, 1000 / _fps)
function updateMainGame() {
    setSize(10, 10, true)
    setBackground("hsl("+(140+Player.toY*2).toString()+",50%,20%)")

    //RENDER
    rendImage(Player.x, Player.y, "./images/kulicka1.png", Player.degree, 40, 40)
    renderPlatforms()
}
function broJump() {
    Player.gravity = false
    Player.toY = Player.jumpForce
}

function broFall() {
    let Blocks = Objects.platform
    let theBlock = Blocks.filter(b => b.x < Player.x && b.x + b.w > Player.x && b.y + b.h > Player.y).sort((a, b) => a.y - b.y)[0]
    try {
        if (theBlock.y - theBlock.h > Player.y) {
            Player.y += 40 / (_fps / 8)
            Player.onGround=false
            reload()
        } else {
            Player.onGround=true
        }
    } catch (error) {
        Player.y += 40 / (_fps / 8)
        Player.onGround=false
        reload()
        //console.log(error)
    }
}

function renderPlatforms() {
    Objects.platform.forEach(b => {
        if (b.ref) {
            rendImage(b.x, b.y, b.ref, 0, b.w, b.h)
        } else rect(b.x, b.y, b.w, b.h, b.color)
    })
}