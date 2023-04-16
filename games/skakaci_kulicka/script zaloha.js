

let Objects = {
    platform: [
        {
            x:0,
            y:400,
            w:280,
            h:45,
            ref:"./images/platforma2.png"
        },
        {
            x:120,
            y:800,
            w:280,
            h:45,
            ref:"./images/platforma2.png"
        },
        {
            x:400,
            y:800,
            w:280,
            h:45,
            ref:"./images/platforma2.png"
        },
        {
            x:520,
            y:120,
            w:280,
            h:45,
            ref:"./images/platforma1.png"
        },
    ]
}

let Player = {
    x:80,
    y:80,
    w:40,
    h:40,
    speedX:2.5,
    toX: 0,
    degree:0,
    gravity: true,
    gravitace: 2,
    color:"#000"
}
function keyPressed(key) {
    if (key == "d") clickedKeys.d = true
    if (key == "a") clickedKeys.a = true
    if (key == "e") {
        if(game=="default") {
            setScene("inventar")
        } else {
            setScene("default")
        }
        
    }
    if (key == " ") broJump()
}
function keyReleased(key) {
    if (key == "d" ) clickedKeys.d = false
    if (key == "a" ) clickedKeys.a = false
}
function setup() {
    createCanvas(100,100)
    setFrameRate(60)
}
function changedScene(scene) {
    if(scene=="default") {
        document.getElementById("shop").style.display="none"
        document.querySelector("body").style.overflow="hidden"
        setFrameRate(60)
    } if(scene=="inventar") {
        setFrameRate(10)
    }
}

function update(scene) {
    
    if(scene=="default") updateMainGame()
    if(scene=="inventar") renderInventarScene()
}
function updateMainGame() {setSize(10,10,true)
    setBackground("hsl(160,50%,20%)")
    if(clickedKeys.d) {
        Player.toX=Player.speedX
    }
    if(clickedKeys.a) {
        Player.toX=-Player.speedX
    }
    Player.degree-=Player.toX*1.2
    Player.toX+=(0-Player.toX)/40
    Player.x+=Player.toX
    Player.last_x = Math.round(Player.x / 40) * 40
    Player.last_y = Math.round(Player.y / 40) * 40
    if(Player.gravity) broFall()

    //RENDER
    cam.x+=(Player.x-(window.innerWidth/2)-cam.x)/20
    cam.y+=(Player.y-(window.innerHeight/2)-cam.y)/20
    rendImage(Player.x,Player.y,"./images/kulicka1.png",Player.degree,40,40)
    renderPlatforms()
}

function broJump() {
    let i = 0
    let b = 7
    let e = 25
    Player.gravity = false
    let int = setInterval(() => {
        if (i < ((b * 7)) - 1) {
            i++
            Player.y -= 40 / ((_fps+(40-_fps)) / (e))/b 
        } else {
            Player.gravity = true
            clearInterval(int)
        }
    }, (1000 / (_fps+(40-_fps)) / e))
    int()
}

function broFall() {
    let Blocks = Objects.platform
    let theBlock = Blocks.filter(b => b.x<Player.x && b.x+b.w>Player.x && b.y+b.h>Player.y).sort((a, b) => a.y - b.y)[0]
    try {
        if (theBlock.y-theBlock.h > Player.y) {
            Player.y += 40 / (60 / 8)
        }
    } catch (error) {
        Player.y += 40 / (60 / 8)
        //console.log(error)
    }
}

function renderPlatforms() {
    Objects.platform.forEach(b => {
        if(b.ref) {
            rendImage(b.x,b.y,b.ref,0,b.w,b.h)
        } else rect(b.x,b.y,b.w,b.h,b.color)
    })
}