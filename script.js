
function toggleMenu(){const e=document.getElementById("nav");e&&e.classList.toggle("open")}document.addEventListener("click",e=>{const t=document.getElementById("nav"),n=document.querySelector(".menu-btn");t&&n&&!t.contains(e.target)&&!n.contains(e.target)&&t.classList.remove("open")});
