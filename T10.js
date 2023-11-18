let header = document.querySelector("header")
let secSection =document.querySelector("header + div")
window.addEventListener("scroll", () => {
    if (window.scrollY >= secSection.offsetTop - 100) {
        header.style = "box-shadow: 0 0 10px rgb(208, 208, 208);"
    } else {
        header.style = ""
    }
})