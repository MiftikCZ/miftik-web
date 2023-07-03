const article = document.querySelector("article")
const main = document.querySelector("main")

article.innerHTML += `
<div class="divider"></div>
<p>Jsem rád že jsi to dočetl až do konce, nezapoměň se připojit na můj gymrats discord pro více info o sportu :D <a href="../../index.html">zde to najdeš!</a></p>
<a href="../" class="findmorea">
    <button class="findmore">
        Klikni pro více užitečných rad 👆
    </button>
</a>
`
main.innerHTML = `<div class="napsal">
<span class="material-symbols-outlined">person</span>
<span class="text">Napsal: MiftikCZ</span>
</div> ${main.innerHTML}`