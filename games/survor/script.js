var assets = {
    pA: 0, mapa: 0
} 

/** @type {CanvasRenderingContext2D} */
let ctx2
let canv2
let loadYet = false
var playerAuto = {
    w:25,
    h:95,
    x:0,
    y:0,
    degree: 0,
    sSpeed:1.25,
    wSpeedMax: 9,
    speedRn:0,
    acc:580,
    accDef:580,
    color:"#12fe12"
}
var mapa = {
    scale: 27,
    ref:"./assets/mapa2.png"
}
let b = 0
let kratE = 1
let e = 32


function setup() {
    let img
    img = new Image()
    img.src = "./assets/kara1.png"
    assets.pA = img


    img = new Image()
    img.src = "./assets/mapa2.png"
    assets.mapa = img


    // document.getElementById("mapa_layer").height = window.innerHeight
    // document.getElementById("mapa_layer").width = window.innerWidth

    createCanvas(600,600)
    setFrameRate(60)
    
}
function changedScene(scene) {
    if(scene=="game") {
        document.getElementById("menudiv").style.display="none"
        document.getElementById("menu2div").style.display="none"

        setFrameRate(60)
        
        loadYet = true
    }
    if(scene=="menu") {
        setFrameRate(5)

        document.getElementById("menudiv").style.display="none"
        document.getElementById("menu2div").style.display="unset"
    }
    if(scene=="default") {
        setFrameRate(5)

        document.getElementById("menu2div").style.display="none"
        document.getElementById("menudiv").style.display="unset"
    }
}
// 800x 800
// 10

function keyReleased(key) {
    if (key == "d") clickedKeys.d = false
    if (key == "a") clickedKeys.a = false
    if (key == "w") clickedKeys.w = false
    if (key == "s") clickedKeys.s = false
    if (key == "e") {
        setScene("default")
        if(loadYet) document.getElementById("hratButton").innerText="pokračovat"
    }
    if (key == " ") clickedKeys.space = false
}
function keyPressed(key) {
    
    if (key == "d") clickedKeys.d = true
    if (key == "a") clickedKeys.a = true
    if (key == "w") clickedKeys.w = true
    if (key == "s") clickedKeys.s = true
    if (key == " ") clickedKeys.space = true
}
function d2r(d){
    var r=d*(Math.PI/180);
    return r;   
}
function gameUpdate() {
    setSize(0,0,true)
    // document.getElementById("mapa_layer").height = window.innerHeight
    // document.getElementById("mapa_layer").width = window.innerWidth
    
    setBackground("hsla(207, 80%, 30%, 1)")

    if(clickedKeys.d) {
        playerAuto.degree-=playerAuto.sSpeed
    }
    if(clickedKeys.a) {
        playerAuto.degree+=playerAuto.sSpeed
    }
    //let e = playerAuto.wSpeedMax
    if(!clickedKeys.space) {
        playerAuto.speedRn+=((clickedKeys.w-(clickedKeys.s*2))*(playerAuto.wSpeedMax)-playerAuto.speedRn)/playerAuto.acc
    }
    
    let d = playerAuto.degree
    playerAuto.x+=Math.cos(d2r(d))*playerAuto.speedRn
    playerAuto.y-=Math.sin(d2r(d))*playerAuto.speedRn
    myRendImageRaw(0,0,assets.mapa,mapa.scale,mapa.scale)
    myRendImage(playerAuto.x,playerAuto.y,assets.pA,playerAuto.degree,playerAuto.h,playerAuto.w)
    //rawRect(playerAuto.x,playerAuto.y,playerAuto.h,playerAuto.w,playerAuto.color,playerAuto.degree)

    cam.x=playerAuto.x-(window.innerWidth/2)
    cam.y=playerAuto.y-(window.innerHeight/2)

        // Draw number to the screen
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 200, 100);
        ctx.font = '25px Arial';
        ctx.fillStyle = 'black';
        ctx.fillText("FPS: " + fps, 10, 30);
    //rect(20,0,playerAuto.w,playerAuto.h,"#000")
}
function menuUpdate() {
    setSize(0,0)
}

async function update(scene) {
    if(scene=="game") gameUpdate()
    if(scene=="default") menuUpdate()
    if(scene=="menu") menuUpdate()
}