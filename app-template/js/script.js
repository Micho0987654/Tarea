const slideNav = document.querySelector(".btn-nav")
const slideUl = document.querySelector(".scroll-ul");
slideNav.addEventListener("click", () =>{
    slideUl.classList.toggle("show");
});