let plane = {
    color: "#bebeff",
    w: 348,
    h: 107,
    x: 0,
    y: 1,
    postDegree:8,
    maxSpeedPerSecond: 20,
    acleration: 180,
    speedRn: 0,
    upL:0,
    upR:0
}

let canmove = true
function setup() {
    createCanvas(600, 600)
    setSize(100, 100, true)
    setFrameRate(60)
    plane.y=400-35
}
function keyPressed(key) {
    if (key == "d" && canmove) clickedKeys.d = true
    if (key == "a" && canmove) clickedKeys.a = true
    if (key == "w" && canmove) clickedKeys.w = true
    if (key == "s" && canmove) clickedKeys.s = true
    if (key == "f") clickedKeys.r = true
    if (key == " ") jump()
}
function keyReleased(key) {
    if (key == "d" ) clickedKeys.d = false
    if (key == "a" ) clickedKeys.a = false
    if (key == "w") clickedKeys.w = false
    if (key == "s") clickedKeys.s = false
    if (key == "f") clickedKeys.r = false
}
function update() {
    setSize(0,0,true)
    //setBackground("#006080")
    setBackground("hsl("+(
        500
    ).toString()+",20%,40%)")

    cam.x+=(plane.x-cam.x-90)/10
    cam.y+=(plane.y-cam.y-450)/10
    for(let i=-80;i<800;i++) {
        rect(i*300,cam.y,3,window.innerHeight,"#ffffff15")
    }      
    
    for(let i=-40;i<20;i++) {
        rect(-300,i*150-cam.y,window.innerWidth+300, 3,"#ffffff15",true,0,true)
    }   

    

    movePlane()
    renderGround()
    renderPlane()
}



function debug(text="n") {
    textBox(80,0,80,80,Math.round(plane.speedRn),"black","20px start")
    // textBox(1000,36,0,0,`
    // N = ${text}
    // PLANE.Y  = ${plane.y}
    // PLANE.X  = ${plane.x}
    // ROUND.X  = ${plane.x-50000}
    // PLANE.upR  = ${plane.upR}
    // PLANE.degree  = ${plane.upR+5}
    //     `,"black", "center")
}

function movePlane() {
    let moveR=0
    if(clickedKeys.d) {
        moveR=1
    }    
    plane.speedRn+=(plane.maxSpeedPerSecond*moveR-plane.speedRn)/plane.acleration
    plane.x+=plane.speedRn
    if(clickedKeys.w) {
        plane.upR+=(50-plane.upR)/380
    } else{
        if(plane.y < 400-plane.h-10) {
            plane.upR+=(-20 -plane.upR)/180
        }
        else {
            plane.upR+=(-plane.postDegree -plane.upR)/80
        }
    }
    if(clickedKeys.r) {
        debug()
    }
    if(clickedKeys.s) {
        plane.upR+=(-30 -plane.upR)/180
    }    
    if(clickedKeys.a) {
        plane.upR-= 60/1000
        plane.y-=1
    }
    plane.y-=plane.upR/30
    if(plane.y>400-plane.h) plane.y+=(plane.y-400-plane.h)/80
}

function landingRamp(x=0,w=8000,color_="#40a280") {
    rect(x-5000,cam.y,22,window.innerHeight,"#000000ff")
    rect(x-cam.x,400-cam.y,w,20,color_,true,0,true)
}

function renderGround() {
    rect(0,400-cam.y,window.innerWidth,900,"#005020",true,0,true)
    landingRamp(-10,8000)
    landingRamp(50000,8500)
}

function renderPlane() {
    debug(plane.upR)
    rendImage(plane.x,plane.y+(plane.upR+plane.postDegree)*-2,"./plane3.png",plane.upR+plane.postDegree,plane.w,plane.h)
    //rawRect(plane.x,plane.y+(plane.upR+plane.postDegree)*-2,plane.w,plane.h,plane.color, plane.upR+plane.postDegree)
    //rect(plane.x,plane.y,plane.w,plane.h,plane.color+"10",true,0,false,plane.upR+5)

}


