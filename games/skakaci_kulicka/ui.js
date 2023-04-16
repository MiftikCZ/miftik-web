function renderInventarScene() {
    setSize(0,0,false)
    reloadMoney()
    document.getElementById("shop").style.display="block"
    document.querySelector("body").style.overflow="auto"
}
function BUYk2() {
    if(Player.money>10-0.1) {

    Player.money-=10
    Player.speedX+=0.085
    reloadMoney()
    }
}
function reloadMoney() {
    let money = Player.money
    document.getElementById("money").innerHTML=money.toString()+
    ' <span style="color: #126316;">$</span>'
    if(money>5-0.1) {
        document.getElementById("k1").classList.replace("border-red", "border-pink")
    } else {
        document.getElementById("k1").classList.replace("border-pink", "border-red")
    }
    if(money>10-0.1) {

        document.getElementById("k2").classList.replace("border-red", "border-pink")
    } else {
        document.getElementById("k2").classList.replace("border-pink", "border-red")

    }
    if(money>99-0.1) {

        document.getElementById("k3").classList.replace("border-red", "border-pink")
    } else {
        document.getElementById("k3").classList.replace("border-pink", "border-red")

    }
}