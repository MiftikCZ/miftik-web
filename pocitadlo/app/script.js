// Code from https://miftik.tk/todo/

let id = null
let text = null
let count = null

var data = {
    save: (key, value) => {
        return localStorage.setItem(key, value)
    },
    get: (key) => {
        if(localStorage.getItem(key) == "null" || !localStorage.getItem(key)){
            return null
        }
        return localStorage.getItem(key) || null
    }
}

let _data = JSON.parse(data.get("data") || JSON.stringify({
    todos: [{}]
}))


function addOne() {
    count+=1
    reloadTodos()
}

function removeOne() {
    count-=1
    reloadTodos()
}

function deleteCounter() {
    _data.todos = _data.todos.filter(e => e.id !== id)
    data.save("data",JSON.stringify(_data))
    window.location.replace("../")
}

function reloadTodos() {
    let newdata = []
    _data.todos.forEach(e => {
        if(e.id==id) {
            e.count = count
        }
        newdata.push(e)
    })
    _data.todos = newdata
    data.save("data",JSON.stringify(_data))
    document.getElementById("count").innerText = count.toLocaleString()
}

window.onload = () => {

    let ps = new URLSearchParams(window.location.search)
    id = _data.todos.find(e=>e.id==ps.get("id")).id || "0"
    text = _data.todos.find(e=>e.id==ps.get("id")).text||"Ukázka"
    count = _data.todos.find(e=>e.id==ps.get("id")).count
    document.title+=" "+text
    document.getElementById("count").innerText = count.toLocaleString()
    document.getElementById("hd").innerText=text
}
