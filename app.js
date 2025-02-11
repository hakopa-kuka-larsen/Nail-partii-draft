const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const bars = document.querySelectorAll(".navbar__toggle .bar");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

    // Toggle .active on each bar
    bars.forEach(bar => bar.classList.toggle("active"));
});

// let burger = document.getElementById("burger")



// console.log(burger)