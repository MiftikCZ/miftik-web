window.onload = () => {
    update()
    _import_css("colors.css")
    objem=data.get("sklenicka_objem")||300
}
var objem
function addWater(ml, mlt=1) {
    let date = new Date()
    let dt = date.getUTCDate().toString() + date.getMonth().toString() + date.getUTCFullYear().toString()
    let vt = parseInt(data.get("vodated"+dt)) || 0
    data.save("vodated"+dt, parseInt((vt+ml*mlt)))
    update()
}
function update() {
    let date = new Date()
    let dt = date.getUTCDate().toString() + date.getMonth().toString() + date.getUTCFullYear().toString()
    let vt = parseInt(data.get("vodated"+dt)) || 0
    objem=data.get("sklenicka_objem")||300
    document.getElementById("voda-ted").innerHTML=((vt)/1000).toString()
    document.getElementById("voda-goal").innerHTML = (data.get("vodagoal") || 2).toString() + "L"
    document.getElementById("voda-ted2").innerHTML=Math.round(vt/objem*10)/10
    document.getElementById("voda-goal2").innerHTML = (Math.round(data.get("vodagoal")*100/(objem/10)*10)/10 || Math.round(2000/objem)).toString() + "cup"
    document.getElementById("voda-ted3").innerHTML=(Math.round((vt/data.get("vodagoal"))/10)).toString()

    let txt = Math.round(((data.get("vodagoal")*1000)-vt)/objem*10)/10
if(txt>0) {
    document.getElementById("voda-ted__").innerHTML = `
Zbývá ti ješte <span id="voda-ted_" class="zbyva_">${txt}</span> sklenic vody!
       
    `
} else {
document.getElementById("voda-ted__").innerHTML = `
Dnes už máš vypito<span class="zbyva_">.</span> 
       
    `
}
    
   
}
function setGoal() {
    let gl = document.getElementById("voda-goal-input").value || 2
    data.save("vodagoal", parseFloat(gl))
    update()
}

//sklenicka-input

function setObjem() {
    let gl = document.getElementById("sklenicka-input").value || 300
    data.save("sklenicka_objem", parseFloat(gl))
    objem=gl
    update()
}