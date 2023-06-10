const ratingPage = document.querySelector(".rating-page")
const hiddenPage = document.querySelector(".hidden")
const submitButton = document.querySelector(".submit-btn")
const rates = document.querySelectorAll(".rates")
const actualRating = document.querySelector(".result")

submitButton.addEventListener("click", () => {
    hiddenPage.classList.remove("hidden")
    ratingPage.style.display="none"
})

rates.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice.innerHTML)
  })
})
