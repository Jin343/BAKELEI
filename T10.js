let header = document.querySelector("header")
let secSection =document.querySelector("header + div")
window.addEventListener("scroll", () => {
    if (window.scrollY >= secSection.offsetTop - 100) {
        header.style = "box-shadow: 0 0 10px rgb(208, 208, 208);"
    } else {
        header.style = ""
    }
})
let list =document.querySelector("header .container .links")
let button = document.querySelector("header .container i")
let isClicked =false
list.addEventListener("clicked",()=>{
    if (isClicked === false){
    button.style.color="var(--light-pink)"
    list.classList.add("clickedList")
     isClicked =true
    }else{
        button.style.color="white"
        list.classList.remove("clickedList")
         isClicked =false
    }
})