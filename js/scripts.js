
const header = document.querySelector("header")
const main = document.querySelector(".main")

// Set top margin according to the header size 
let headerHeight = header.offsetHeight
console.log("Header height: "+headerHeight)
main.style.marginTop = String(headerHeight)+"px"

//Scroll to to btn actions
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

// Section Dropdown
const sectionsDropdownGroup = document.querySelectorAll(".sections-dropdown-group")

const sectionsDropdown = document.querySelector("#sections-dropdown")
const dropdownBg = document.querySelector("#dropdown-bg")

console.log("Sections group is: "+sectionsDropdownGroup)

drowpdownGroupAction(sectionsDropdownGroup, sectionsDropdown)

// Peppers Dropdown
const peppersDropdownGroup = document.querySelectorAll(".peppers-dropdown-group")

const peppersDropdown = document.querySelector("#peppers-dropdown")

drowpdownGroupAction(peppersDropdownGroup, peppersDropdown)

// Dropdown Action
function drowpdownGroupAction(group, mainElement) {
    group.forEach(element => {
        
        /*
        element.addEventListener("mouseenter", () => {
            mainElement.style.display = "flex"
            dropdownBg.style.display = "unset"
        })
        element.addEventListener("mouseleave", () => {
            mainElement.style.display = "none"
            dropdownBg.style.display = "none"
        })
        */
        element.addEventListener("click", () => {
            if (mainElement.style.display == "flex") {
                mainElement.style.display = "none"
                dropdownBg.style.display = "none"
            } else {
                mainElement.style.display = "flex"
                dropdownBg.style.display = "unset"
            }
        })
    });
}