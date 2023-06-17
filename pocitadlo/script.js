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
let i = 1
let _data = JSON.parse(data.get("data") || JSON.stringify({
    todos: [{}]
}))

function openCounter(id) {
    window.history.pushState(null,"",window.location)
    window.location.replace("app/?id="+id)
}

function deleteTodo(id) {
    _data.todos = _data.todos.filter(e => e.id !== id)
    data.save("data",JSON.stringify(_data))
    document.getElementById("box-id-"+id).remove()
}

function addTodo(text="Null",save=true,_i=i) {
    if(_i==i) _i++
    i++
    if(text=="Null") {
        if(!document.getElementById("apt").value) {
            return
        }
        text = document.getElementById("apt").value
        document.getElementById("apt").value = ""
    }
    document.getElementById("pocitadla").innerHTML += 
        `
        <div class="pocitadlo" onclick="openCounter('${_i.toString()}')">${text}</div>
        `
    if(save) {
        _data.todos.push({
            id:_i.toString(),
            text,
            count: 0
        })
        data.save("data",JSON.stringify(_data))
    }


}

function reloadTodos() {
    _data.todos.forEach(e => {
        addTodo(e.text,false, e.id)
    })

}

window.onload = () => {
    reloadTodos()
}



