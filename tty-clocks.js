let x = process.stdout.columns
let y = process.stdout.rows

function idk(word,times) {
    let f = ""
    for(let i=0;i<times;i++) f += word
    return f
}
function getdata(text) {
    let radky = [
        
    ]
    let cisla = {
        "0": [
            "yyy",
            "yny",
            "yny",
            "yny",
            "yyy",
        ],
        "1": [
            "nyn",
            "yyn",
            "nyn",
            "nyn",
            "yyy",
        ],
        "2": [
            "yyy",
            "nny",
            "yyy",
            "ynn",
            "yyy",
        ],
        "3": [
            "yyy",
            "nny",
            "yyy",
            "nny",
            "yyy",
        ],
        "4": [
            "yny",
            "yny",
            "yyy",
            "nny",
            "nny",
        ],
        "5": [
            "yyy",
            "ynn",
            "yyy",
            "nny",
            "yyy",
        ],
        "6": [
            "yyy",
            "ynn",
            "yyy",
            "yny",
            "yyy",
        ],
        "7": [
            "yyy",
            "nny",
            "nyy",
            "nny",
            "nny",
        ],
        "8": [
            "yyy",
            "yny",
            "yyy",
            "yny",
            "yyy",
        ],
        "9": [
            "yyy",
            "yny",
            "yyy",
            "nny",
            "nny",
        ],
        ":": [
            "nnn",
            "nyn",
            "nnn",
            "nyn",
            "nnn",
        ],
        " ": [
            "  ",
            "  ",
            "  ",
            "  ",
            "  ",
        ],
    }

    console.clear()
    text.split("").forEach(char => {
        let ch = cisla[char]
        for(let i=0;i<ch.length;i++) {
            radky[i] = radky[i] || ""
            radky[i]+=ch[i]+" "
        }
    })
    console.log(idk("\n",(y/2)-1-3))
    radky.forEach(line => {
        let tl = ""
        for(let ch of line.split("")) {
            if(ch == "y") {
                tl += "\033[0;37;44m  " + "\033[0;38;40m"
            } else {
                tl += "\033[0;38;40m  "
            }
        }
        console.log(idk(" ", (
                (x/2) - line.length
            )
        )+
            tl
        )
    })
    
}

process.stdout.on("resize", () => {
    x = process.stdout.columns
    y = process.stdout.rows
    update()
})


function update() {
    getdata(new Date().getHours()+":"+new Date().getMinutes())
}

setInterval(()=>{
    update()
},500)