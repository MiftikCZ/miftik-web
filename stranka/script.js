document.querySelectorAll("[formtype]").forEach(el=>{
    el.addEventListener("click", ()=>{
        document.querySelectorAll("[formtype]").forEach(el=>{
            el.classList.remove("focus")
        })

        el.classList.add("focus")
    })
})