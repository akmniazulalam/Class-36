let reviewHeading = document.getElementById("reviewHeading")
let reviewInput = document.getElementById("reviewInput")
let submitBtn = document.getElementById("submitBtn")
let resetBtn = document.getElementById("resetBtn")
let next = document.getElementById("next")
let review = document.querySelector(".review")
let reviewTwo = document.querySelector(".reviewTwo")
let originalText =reviewHeading.innerHTML


submitBtn.addEventListener("click", () => {
    if (reviewInput.value == "") {
       alert("Please Write Your Review.");
       return;
    }
    else {
        reviewHeading.innerHTML = `${reviewHeading.innerHTML} <br>  ${reviewInput.value}`
        reviewInput.value = ""
    }
})

resetBtn.addEventListener("click", () => {
    setTimeout(() => {
        reviewHeading.innerHTML = `${originalText}`
    }, 300)
})

next.addEventListener("click", () => {
    review.style.display = "none"
    reviewTwo.style.display = "block"
    document.body.style.background = "linear-gradient(to right, #6A3093, #A044FF)"
})




let paragraph = document.getElementById("paragraph")
let inputDlt = document.getElementById("inputDlt")
let deleteBtn = document.getElementById("deleteBtn")
let previous = document.getElementById("previous")


inputDlt.addEventListener("keyup", () => {
    if (inputDlt.value == "Delete") {
        deleteBtn.removeAttribute("disabled")
        deleteBtn.style.cursor = "pointer"
        deleteBtn.style.background = "linear-gradient(to right, #4C01E0, #7A1FE1)"
    }
    else {
        deleteBtn.setAttribute("disabled", true)
        deleteBtn.style.cursor = "not-allowed"
        deleteBtn.style.background = ""
    }

})
deleteBtn.addEventListener("click", () => {
    paragraph.style.display = "none"
    inputDlt.value = ""
    deleteBtn.style.background = ""
})
previous.addEventListener("click", () => {
    review.style.display = "block"
    reviewTwo.style.display = "none"
    document.body.style.background = "linear-gradient(to left, #9605EA, #46026E)"
})