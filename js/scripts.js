
const header = document.querySelector("header")
const main = document.querySelector(".main")

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

// Section Dropdown Elements
const sectionsDropdownGroup = document.querySelectorAll(".sections-dropdown-group")
const sectionsDropdown = document.querySelector("#sections-dropdown")
drowpdownGroupAction(sectionsDropdownGroup, sectionsDropdown)

// Peppers Dropdown Elements
const peppersDropdownGroup = document.querySelectorAll(".peppers-dropdown-group")
const peppersDropdown = document.querySelector("#peppers-dropdown")
drowpdownGroupAction(peppersDropdownGroup, peppersDropdown)

// Others/General Elements
const dropdownBg = document.querySelector("#dropdown-bg")
const allDropdownGroup = document.querySelectorAll(".dropdown-groups")

// Dropdown Action
function drowpdownGroupAction(group, mainElement) {
    group.forEach(element => {
        
        element.addEventListener("click", () => {
            if (mainElement.style.display == "flex") {
                mainElement.style.display = "none"
                dropdownBg.style.display = "none"
                
                // Hide all dropdown elements
                allDropdownGroup.forEach(element => {
                    element.style.display = "none"
                })

            } else {
                mainElement.style.display = "flex"
                dropdownBg.style.display = "unset"
                
                // Hide not main elements
                allDropdownGroup.forEach(element => {
                    if (element != mainElement) {
                        element.style.display = "none"
                    }
                })
            }
        })
    });
}

// Change main content top margin dynamically
window.addEventListener('resize', () => {
    let headerHeight = header.offsetHeight
    console.log("Header height: "+headerHeight)
    main.style.marginTop = String(headerHeight)+"px"
});

