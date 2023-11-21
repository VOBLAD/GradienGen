const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const textArea = document.querySelector("textarea");
const copyBtn = document.querySelector(".copy");
const body = document.querySelector('body');



const generateGradient = () => {
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    body.style.background = gradient;
    textArea.value = `background: ${gradient};`;
}

const copyCode = () => {
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Готово!"
    setTimeout(() => copyBtn.innerText = "Скопировать Код", 1600);
}



colorInputs.forEach(input => {
    input.addEventListener("input", generateGradient);
})


selectMenu.addEventListener("change", generateGradient)
copyBtn.addEventListener("click", copyCode)