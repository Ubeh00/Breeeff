const mainContainer = document.querySelector(".Pac1")
const thanksContainer = document.querySelector(".Pac2")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rates")
const rate = document.querySelectorAll(".sel")
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "block"
})

rate.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

