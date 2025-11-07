function toggleMenu(){const e=document.getElementById("nav");e&&e.classList.toggle("open")}
function toggleFab(){const e=document.getElementById("fabIcons"),t=document.querySelector(".fab-button");if(e&&t){const n=e.classList.contains("show");e.classList.toggle("show"),t.textContent=n?"+":"×"}}
document.addEventListener("click",e=>{const t=document.getElementById("nav"),n=document.querySelector(".menu-btn");t&&!t.contains(e.target)&&n&&!n.contains(e.target)&&t.classList.remove("open")});
window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".fade-slider img");if(e.length>0){let t=0;e.forEach((n,o)=>{o!==0&&n.classList.remove("active")});setInterval(()=>{e[t].classList.remove("active"),t=(t+1)%e.length,e[t].classList.add("active")},4e3)}});
