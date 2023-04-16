/** @type {CanvasRenderingContext2D} */
var ctx

/** @type {HTMLCanvasElement} */
var _canv

var canv_w
var canv_h

var _fps = 60
var cam = {
    x: 0,
    y: 0,
    zoom: 1
}

let game = "default"
let lastgame = null
let debug_mode = false
let clicked = false

var debugMode = function (debug=true) {
    debug_mode = debug
}

var createCanvas = function (w, h, style = "") {
    document.querySelector("body").innerHTML += `<canvas id='_canv' height='${w.toString()}' width='${h.toString()}' style='${style}'></canvas>`
    _canv = document.getElementById("_canv")
    ctx = _canv.getContext("2d")
    canv_w = w
    canv_h = h
    return ctx
}

var setBackground = function (hexColor = "#424242") {
    ctx.fillStyle = hexColor
    ctx.fillRect(0, 0, _canv.width, _canv.height)
}

var setFrameRate = function (new_fps) {
    _fps = new_fps
}

var rect = function (x, y, w, h, color = "#121213", fill = true, radius = 0,raw=false) {
    if(!raw) {
        x -= cam.x
        y -= cam.y
        x *= cam.zoom
        y *= cam.zoom
        w *= cam.zoom
        h *= cam.zoom
    }
    ctx.fillStyle = color
    if (fill) {
        ctx.beginPath()

        ctx.moveTo(x, y + radius)
        ctx.arcTo(x, y + h, x + radius, y + h, radius)
        ctx.arcTo(x + w, y + h, x + w, y + h - radius, radius)
        ctx.arcTo(x + w, y, x + w - radius, y, radius)
        ctx.arcTo(x, y, x, y + radius, radius)

        ctx.fill();
    }
    else {
        ctx.beginPath()
        ctx.moveTo(x, y + radius)
        ctx.arcTo(x, y + h, x + radius, y + h, radius)
        ctx.arcTo(x + w, y + h, x + w, y + h - radius, radius)
        ctx.arcTo(x + w, y, x + w - radius, y, radius)
        ctx.arcTo(x, y, x, y + radius, radius)

        ctx.stroke()
    }
}

var image = async function (dir, x, y) {
    let drawing = new Image() 
    drawing.src = dir
    ctx.drawImage(drawing,x,y);
}

var setSize = function (w,h, fullscreen=false) {
    canv_w = w
    canv_h = h
    if(fullscreen) {
        _canv.height = window.innerHeight
        _canv.width = window.innerWidth
    } else {
        _canv.height = h
        _canv.width = w
    }
}

var setScene = function (new_scene) {
    game = new_scene
}

var textBox = function (x, y, w, h, text, color, font) {
    ctx.lineWidth = 4
    ctx.fillStyle = color
    ctx.font = font
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, x + (w / 2), y + (h / 2))

}

var button = function (x, y, w, h, onclick = () => { alert("ok") }) {
    let event = (evt) => {
        let isInside = (pos, __rect) => {
            return pos.x > __rect.x && pos.x < __rect.x + __rect.width && pos.y < __rect.y + __rect.height && pos.y > __rect.y
        }
        if (isInside({
            x: evt.clientX - _canv.getBoundingClientRect().left,
            y: evt.clientY - _canv.getBoundingClientRect().top
        }, {
            x,
            y,
            width: w,
            height: h
        })) {
            onclick()
        }
    }
    _canv.addEventListener("mousedown", event, false)
}

window.onload = () => {
    try {
        setup()
    } catch (error) {
        console.error("Error while executing 'setup' function -> " + error)
        console.log("Please, create setup() function or fix bugs in the function.")
        return
    }
    document.addEventListener("keypress", (e) => {
        try {
            keyPress(e.key, e)
        } catch (error) { }
    })
    document.addEventListener("keydown", (e) => {
        try {
            keyPressed(e.key, e)
        } catch (error) { }
    })
    document.addEventListener("keyup", (e) => {
        try {
            keyReleased(e.key, e)
        } catch (error) { }
    })
    document.addEventListener("mousedown", (e) => {
        try {
            mousePress(e.clientX, e.clientY, e)
        } catch (error) { }
    })
    document.addEventListener("mouseup", (e) => {
        try {
            mouseReleased(e.clientX, e.clientY, e)
        } catch (error) { }
    })
    document.addEventListener("mousemove", (e) => {
        try {
            mouseMove(e.clientX, e.clientY, e)
        } catch (error) { }
    })


    try {
        setInterval(() => {
            if (game !== lastgame) {
                lastgame = game
                try {
                    changedScene(game)
                } catch (error) {
                    console.error("Error while executing 'changedScene' function -> " + error)
                    console.log("Please, create changedScene() function or fix bugs in the function.")
                    return
                }
            }
            update(game)
            if(debug_mode) {
                rect(-cam.x -5,-cam.y -5,10,10, "#5050fa",true,0,false)
                rect(-cam.x -5,-cam.y -5,10,10, "#1010ab",true,0,true)
            }
        }, 1000 / _fps)
    } catch (error) {
        console.error("Error while executing 'update' function -> " + error)
        console.log("Please, create update() function or fix bugs in the function.")
        return
    }
}