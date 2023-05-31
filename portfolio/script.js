function closePopup() {
    document.getElementById("p-popup").classList.remove("thirdStep")
        setTimeout(()=>{
            document.getElementById("p-popup").classList.remove("secondStep")
            setTimeout(()=>{

                document.getElementById("p-content").classList.remove("firstStep")
                document.getElementById("p-popup").classList.add("nodisplay")
            },150)
        },10)   
}

document.querySelectorAll("[item]").forEach(item => {
    let link = item.getAttribute("item")
    let imageSrc = item.children.item(0).getAttribute("src")
    let title = item.children.item(1).innerText
    let description = item.children.item(2).innerHTML

    let ititle = document.getElementById("p-title")
    let ipopis = document.getElementById("p-popis") 
    let ilink = document.getElementById("p-link")
    let ipopup = document.getElementById("p-popup")
    let icontent = document.getElementById("p-content")
    let iimage = document.getElementById("p-image")

    item.addEventListener("click",()=>{
        ititle.innerText = title
        ipopis.innerHTML = description
        ilink.innerText = link
        ilink.setAttribute("href","https://"+link)
        iimage.src = imageSrc

        ipopup.classList.remove("nodisplay")
        ipopup.classList.add("firstStep")
        setTimeout(()=>{
            ipopup.classList.add("secondStep")
            setTimeout(()=>{
                icontent.classList.add("thirdStep")
            },150)
        },150)
    })
})