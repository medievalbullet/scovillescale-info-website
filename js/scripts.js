
//const header = document.getElementsByClassName("head")
const header = document.querySelector("header")

const main = document.querySelector(".main")

let headerHeight = header.offsetHeight
console.log("Header height: "+headerHeight)
main.style.marginTop = String(headerHeight)+"px"

const scrolltotopBtn = document.querySelector("#scrolltotop-btn")

scrolltotopBtn.addEventListener("click", () => {
    window.scrollTo(0,0)
})

addEventListener("scroll", () => {
    if (window.scrollY < 300) {
        scrolltotopBtn.classList.add("on-top")
    } else {
        scrolltotopBtn.classList.remove("on-top")
    }
});

