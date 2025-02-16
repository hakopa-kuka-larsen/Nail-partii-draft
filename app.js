//            ______
// 　　　　　 /  ＞　　 フ 
// 　　　　　| 　 _　 _ l    
// 　 　　　／` ミ ＿ xノ  
// 　　 　 /　　　 o |
// 　　　 /　 ヽ　　 ﾉ
// 　 　 │　　|　|　|
// 　／￣|　　 |　|　|
// 　| (￣ヽ＿_ヽ_)__)
// 　＼二つ


// Burger menu //

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const bars = document.querySelectorAll(".navbar__toggle .bar");  /**/

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");

    // toggles menu in-out
    bars.forEach(bar => bar.classList.toggle("active"));
});

const collapse = document.querySelectorAll(".navbar__links");

// this toggles menu out when navbar__link is clicked 
collapse.forEach(link => {
    link.addEventListener("click", function () {
        menu.classList.remove("is-active"); 
        menuLinks.classList.remove("active"); 
    });
});

// star rotater //

// write a random number generator, look online.
const allStars = document.querySelectorAll(".pink__star");


allStars.forEach(star => {
    let numGen = Math.floor(Math.random() * 360) + 1;  //+1 cause counting frm 0
    star.dataset.rotation = numGen; // store initial rotation
    star.style.transform = `rotate(${numGen}deg)`;
});

// for each id  of pink star, apply random number geenerator numbers 1 to 360,
// to rotate the star

window.addEventListener("scroll", () => {

    let scrollAmount = window.scrollY / 5; 

    allStars.forEach(star => {
        let baseRotation = parseInt(star.dataset.rotation); 
        star.style.transform = `rotate(${baseRotation + scrollAmount}deg)`;
    });
});
