const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")
const mobileMenu = document.querySelector(".mobile-menu")
const logo = document.querySelector(".logo")
const mobileHeader = document.querySelector(".mobile-header")
const menuScroll = document.querySelector(".menu-scroll")
const younggeeksLogo = document.querySelector(".youngeeks-logo")
const mobileMenuNavigation = document.querySelector(".mobile-menu-navigation")


function openMenu(){
    mobileHeader.style.backgroundColor = "#0E2A47"
    mobileHeader.style.transition = "all 350ms ease"
    mobileMenu.style.display = "block"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
    menuClose.style.color = "white"
    mobileMenu.style.animation = "menuMovement 350ms ease"
    // younggeeksLogo.style.animation = "contentMovement 750ms ease-in-out"
    // mobileMenuNavigation.style.animation = "contentMovement 750ms ease-in-out"
    if(openMenu){
        menuScroll.style.display = "none"
    }
}

function closeMenu(){
    mobileHeader.style.backgroundColor = "white"
    mobileHeader.style.transition = "all 350ms ease"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
    mobileMenu.style.animation = "menuCloses 350ms ease forwards"
}

// let width = screen.width

window.addEventListener('scroll', () =>{
    if(scrollY >= 105){
        mobileHeader.classList.add('menu-scroll')
    }
    else if(scrollY === 0){
        mobileHeader.classList.remove('menu-scroll')
    }
    else{
        mobileHeader.classList.remove('menu-scroll')
    }
})

menuOpen.onclick = openMenu
menuClose.onclick = closeMenu
