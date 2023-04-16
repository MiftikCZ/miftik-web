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
    zoom: 1,
    degree: 0,
}

var game = "default"
let lastgame = null
let debug_mode = false
let clicked = false

var clickedKeys = {
    a: false,
    d: false,
    w: false,
    s: false,
    r: false,
    e: false,
    space: false
}

var debugMode = function (debug = true) {
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
var myRendImage = async function (x, y, img, degree = 0, w = 1, h = 1) {
    x -= cam.x
    y -= cam.y
    x *= cam.zoom
    y *= cam.zoom
    degree = -degree

    ctx.save();

    ctx.imageSmoothingEnabled = false
    ctx.beginPath();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(degree * Math.PI / 180)
    ctx.drawImage(img, -w / 2, -h / 2);
    ctx.restore()
}
var myRendImageRaw = function (x, y, img, scaleX, scaleY) {
    x -= cam.x / scaleX
    y -= cam.y / scaleY
    x *= cam.zoom
    y *= cam.zoom
    ctx.save();

    ctx.beginPath();
    ctx.scale(scaleX, scaleY)
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(img, x, y);
    ctx.restore()

}
var rendImageRaw = function (x, y, ref, scaleX, scaleY, myImg) {
    x -= cam.x / scaleX
    y -= cam.y / scaleY
    x *= cam.zoom
    y *= cam.zoom
    ctx.save();

    ctx.beginPath();
    ctx.scale(scaleX, scaleY)
    ctx.imageSmoothingEnabled = false
    let img = new Image()
    img.src = ref
    ctx.drawImage(img, x, y);
    ctx.restore()

}
var rendImage = async function (x, y, ref, degree = 0, w = 1, h = 1) {
    x -= cam.x
    y -= cam.y
    x *= cam.zoom
    y *= cam.zoom
    degree = -degree

    ctx.save();

    ctx.imageSmoothingEnabled = false
    ctx.beginPath();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(degree * Math.PI / 180)

    let img = new Image()
    img.src = ref
    ctx.drawImage(img, -w / 2, -h / 2);
    ctx.restore()





}

var rawRect = function (x, y, w, h, color = "#121213", degree = 0) {
    x -= cam.x
    y -= cam.y
    x *= cam.zoom
    y *= cam.zoom
    w *= cam.zoom
    h *= cam.zoom
    degree = -degree
    ctx.save();

    ctx.beginPath();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.rotate(degree * Math.PI / 180)
    ctx.fillStyle = color
    ctx.rect(-w / 2, -h / 2, w, h);
    ctx.fill()
    ctx.restore()
}

var rect = function (x, y, w, h, color = "#121213", fill = true, radius = 0, raw = false, degree = 0) {

    if (!raw) {
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
        ctx.arcTo(x + w, y - (degree / h * x) + h, x + w, y + h - radius, radius)
        ctx.arcTo(x + w, y - (degree / h * x), x + w - radius, y, radius)
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
    ctx.drawImage(drawing, x, y);
}

var setSize = function (w, h, fullscreen = false, scale = 1) {
    canv_w = w
    canv_h = h
    if (fullscreen) {
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

var collider = function (x, y, w, h, debug = true) {
    rect(x - 1, y - 1, w + 1, h + 1, "#000", false, 0)
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
var secondsPassed;
var oldTimeStamp;
var fps;

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    // Calculate fps
    fps = Math.round(1 / secondsPassed);



    if (game !== lastgame) {
        lastgame = game
        try {
            changedScene(game)
        } catch (error) {
            console.error("Error while executing 'changedScene' function -> " + error)
            console.log("Please, create changedScene() function or fix bugs in the function.")
            return
        }
    } else update(game)
    objects.objects.forEach(obj => {
        rect(obj.x, obj.y, obj.width, obj.height, obj.color, obj.fill, obj.radius)
    })
    if (debug_mode) {
        rect(-cam.x - 5, -cam.y - 5, 10, 10, "#5050fa", true, 0, false)
        rect(-cam.x - 5, -cam.y - 5, 10, 10, "#1010ab", true, 0, true)
    }

    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}


window.onload = () => {
    try {
        objects.objects = new Map()
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
        window.requestAnimationFrame(gameLoop)
    } catch (error) {
        console.error("Error while executing 'update' function -> " + error)
        console.log("Please, create update() function or fix bugs in the function.")
        return
    }
}

var objects = {
    objects: new Map(),

    new: function (id = "", custom = {}, w = 32, h = 32, color = "#24FE24", x = 0, y = 0, fill = true, radius = 0) {
        objects.objects.set(id, {
            width: w,
            height: h,
            color: color,
            x: x,
            y: y,
            fill: fill,
            radius: radius,
            custom
        })
    },
    get: function (id) {
        return {
            remove: function () {
                objects.objects.clear(id)
            },
            moveBy: function (x, y) {
                objects.objects.get(id).x += x
                objects.objects.get(id).y += y
            },
            moveTo: function (x, y) {
                objects.objects.get(id).x = x
                objects.objects.get(id).y = y
            },
            setSize: function (w, h) {
                objects.objects.get(id).width = w
                objects.objects.get(id).height = h
            }
        }
    }
}