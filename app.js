const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const bars = document.querySelectorAll(".navbar__toggle .bar");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

    // toggles menu in-out
    bars.forEach(bar => bar.classList.toggle("active"));
});

const collapse = document.querySelectorAll(".navbar__links");

// toggles menu out when navbar__link is clicked
collapse.forEach(link => {
    link.addEventListener("click", function () {
        menu.classList.remove("is-active"); 
        menuLinks.classList.remove("active"); 
    });
});

// let burger = document.getElementById("burger")



// console.log(burger)