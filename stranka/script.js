let typeSelected = "default"
let whatWillSend = ``

document.querySelectorAll("[formtype]").forEach(el=>{
    el.addEventListener("click", ()=>{
        document.querySelectorAll("[formtype]").forEach(el=>{
            el.classList.remove("focus")
        })
        
        typeSelected = el.getAttribute("formtype")
        el.classList.add("focus")
    })
})


const _name = document.getElementById("--name")
const _use = document.getElementById("--use")
const _need = document.getElementById("--need")
const _tech = document.getElementById("--tech")
const _why_you = document.getElementById("--why-you")
const _contact = document.getElementById("--contact")
const _notes = document.getElementById("--notes")
const _what_will_send = document.getElementById("what-will-send")


function nextStep() {
    writeWhatWillSend()
    window.open(`mailto:memertv17@proton.me?subject=${encodeURIComponent("Žádám o vytvoření stránky")}&body=${encodeURIComponent(whatWillSend)}`);
}

function writeWhatWillSend() {
    whatWillSend = 
`Jméno: [${_name.value}]
Kontakt: [${_contact.value}]
Využití stránky: [${_use.value}]
Proč: [${_why_you.value}]
Požadavky: [${_need.value}]
Technologie: [${_tech.value}]
Typ: [${typeSelected}]
-----
${_notes.value}
-----
Zpráva vygenerována miftik.xyz/stranka
`

    _what_will_send.innerText = whatWillSend
}