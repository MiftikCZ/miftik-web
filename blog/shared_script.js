const article = document.querySelector("article")
const main = document.querySelector("main")
/*<a href="../" class="findmorea">
    <button class="findmore">
        Víc typů o sportu 👆
    </button>
</a>*/
article.innerHTML += `
<div class="divider"></div>
<p>Jsem rád že jsi to dočetl až do konce, nezapoměň se připojit na můj gymrats discord pro více info o sportu :D <a href="../../index.html">zde to najdeš!</a></p>
<h1>Zajímá tě víc?</h1>
<p><a href="../">Zde najdeš více informací a typů o sportu!</a></p>
`
main.innerHTML = `<div class="napsal">
<span class="material-symbols-outlined">person</span>
<span class="text">Napsal: MiftikCZ</span>
</div> ${main.innerHTML}`