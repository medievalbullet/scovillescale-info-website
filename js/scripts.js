
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
function adoptHeaderSize() {
    let headerHeight = header.offsetHeight
    console.log("Header height: "+headerHeight)
    main.style.marginTop = String(headerHeight)+"px"
}

window.addEventListener('resize', () => {
    adoptHeaderSize()
});
window.onload = adoptHeaderSize()

// Slide in animations
const slideinButton = document.querySelector("#slidein-button")
const gridScaleElements = document.querySelectorAll(".grid-scale *")
const gridTextElements = document.querySelectorAll(".grid-text *")

// Slide in animation as you scroll
function slideinScrollAction(elementsGroup, animationName) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationName)
            } //else {
              //  entry.target.classList.remove(animationName)
            //}
        })
    })
    
    elementsGroup.forEach((el) => observer.observe(el))
}

const gridFootElements = document.querySelectorAll(".grid-foot *")

slideinScrollAction(gridTextElements, "anim-slidein-left")
slideinScrollAction(gridScaleElements, "anim-slidein-right")
slideinScrollAction(gridFootElements, "anim-slidein-bottom")


