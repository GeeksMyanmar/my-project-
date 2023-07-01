let bar = document.querySelector("#bars");
let nav_links = document.querySelector(".nav-link");

bar.addEventListener("click", function (){
    nav_links.classList.toggle("show");
});
