function changeColor() {
    document.documentElement.style.setProperty(
        "--clr",
        "hsl(" + Math.round(360 * Math.random()) + ", 29%, 15%)",
    );
}
changeColor();
const projectContent = document.getElementById("project_content");
projectContent.oninput = () => {
    let t = projectContent.value;
    localStorage.setItem("project_content", t);
};
let project_content = localStorage.getItem("project_content");
projectContent.value = project_content || "",
    project_content || localStorage.setItem("project_content", "");
const buttonModifierMonospace = document.querySelector(
    "[button-modifier='monospace']",
);
buttonModifierMonospace.addEventListener("change", () => {
    buttonModifierMonospace.checked
        ? projectContent.classList.add("font-monospace")
        : projectContent.classList.remove("font-monospace");
});
const buttonModifierColor = document.querySelector("[button-modifier='color']");
buttonModifierColor.addEventListener("click", () => {
    changeColor();
});
